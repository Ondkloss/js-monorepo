// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'AddressResolver';
export const address = '0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C';
export const source = 'AddressResolver';
export const abi = [
  'constructor(address _owner)',
  'event AddressImported(bytes32 name, address destination)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function acceptOwnership()',
  'function areAddressesImported(bytes32[] names, address[] destinations) view returns (bool)',
  'function getAddress(bytes32 name) view returns (address)',
  'function getSynth(bytes32 key) view returns (address)',
  'function importAddresses(bytes32[] names, address[] destinations)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rebuildCaches(address[] destinations)',
  'function repository(bytes32) view returns (address)',
  'function requireAndGetAddress(bytes32 name, string reason) view returns (address)',
];