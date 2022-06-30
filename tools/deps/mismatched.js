#!/usr/bin/env node

const path = require('path');
const cp = require('child_process');
const fs = require('fs');
const { fgReset, fgRed, fgGreen, fgYellow, fgCyan } = require('./lib/colors');

const isFix = process.argv.includes('--fix');

async function run() {
	const workspaces = await require('./lib/workspaces')();
	const ROOT = await require('./lib/exec')('yarn workspace root exec pwd');

	const { unique, mismatched } = workspaces
		.flatMap((p) => {
			const location = path.join(ROOT, p.location);
			const packageJson = require(`${location}/package.json`);
			const { dependencies, devDependencies } = packageJson;
			return Object.entries(dependencies || {})
				.map(([name, version]) => [name, version, p])
				.concat(Object.entries(devDependencies || {}).map(([name, version]) => [name, version, p]));
		})
		.sort((a, b) => a[1].localeCompare(b[1]))
		.sort((a, b) => a[0].localeCompare(b[0]))
		.reduce(
			(result, [name, version, context]) => {
				if (version === 'latest') {
					// Disallow "latest"
					result.mismatched.push({
						parent: context.name,
						location: context.location,
						name,
						version,
						expected: '^<EXACT VERSION>',
						//	expected: '<EXACT VERSION>', // exact version
					});
					return result;
				}
				if (name in result.unique && version === result.unique[name]) {
					// Keep only unique
					return result;
				}
				if (name in result.unique && version !== result.unique[name]) {
					result.mismatched.push({
						parent: context.name,
						location: context.location,
						name,
						version,
						expected: result.unique[name],
					});
					return result;
				}
				result.unique[name] = version;
				return result;
			},
			{ unique: {}, mismatched: [] }
		);
	//  return

	mismatched.forEach(({ parent, name, version, location }) => {
		console.log(
			'⚠️ Dependency version mismatch',
			`${fgRed}"${name}@${version}"${fgReset} found in ${fgCyan}${parent}${fgReset}`,
			`(expected ${fgGreen}${unique[name]}${fgReset})`
		);
		if (isFix) {
			const packageJson = JSON.parse(fs.readFileSync(`${ROOT}/${location}/package.json`, 'utf-8'));
			if ('dependencies' in packageJson && name in packageJson.dependencies) {
				packageJson.dependencies[name] = unique[name];
			}
			if ('devDependencies' in packageJson && name in packageJson.devDependencies) {
				packageJson.devDependencies[name] = unique[name];
			}
			console.log(`...FIXING ${fgYellow}${location}/package.json${fgReset}`);
			fs.writeFileSync(`${ROOT}/${location}/package.json`, JSON.stringify(packageJson, null, '\t'));
		}
	});

	if (mismatched.length > 0 && isFix) {
		console.log('');
		console.log(`${fgGreen}Packages fixed: ${fgGreen}${mismatched.length}${fgReset}`);
		cp.execSync('yarn install', { encoding: 'utf-8', stdio: 'inherit' });
		return;
	}

	if (mismatched.length > 0) {
		console.log('');
		console.log(`${fgRed}Versions need fixing: ${fgGreen}${mismatched.length}${fgReset}`);
		console.log(`${fgCyan}Run ${fgGreen}deps-mismatched --fix${fgReset}`);
		throw new Error(`Versions need fixing: ${mismatched.length}`);
	}
}

run().catch((e) => {
	console.error(e);
	process.exit(1);
});