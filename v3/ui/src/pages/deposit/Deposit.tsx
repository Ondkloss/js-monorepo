import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { usePreferredPool } from '@snx-v3/usePreferredPool';
import { useParams } from '@snx-v3/useParams';
import { FC } from 'react';
import { createSearchParams, generatePath, NavigateFunction, useNavigate } from 'react-router-dom';
import { DepositForm } from '../../components/accounts/Deposit';

const DepositUi: FC<{
  collateralSymbol?: string;
  preferredPool?: { name: string; id: string };
  accountId?: string;
  navigate: NavigateFunction;
}> = ({ preferredPool, accountId, collateralSymbol, navigate }) => {
  return (
    <Flex height="100%" flexDirection="column">
      <Flex alignItems="flex-end" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
        <Box flexGrow={1} mr={12}>
          <Heading fontSize="xl">Welcome to Synthetix V3</Heading>
          <Text>
            Deposit your collateral (SNX and/or ETH) to borrow snxUSD and contribute to the network
            collateral. If you have never staked on Synthetix V3 before, please read through this
            quick introduction first.
          </Text>
        </Box>
        <Button variant="outline" minW="unset" size="sm" mt={{ base: 2, md: 0 }}>
          Read Introduction
        </Button>
      </Flex>
      <Divider mt={4} bg="gray.900" />
      <Flex flexWrap={{ base: 'wrap', md: 'nowrap' }}>
        <Box
          p={4}
          mt={8}
          bg="navy.900"
          mr={{ base: 0, md: 2 }}
          borderWidth="1px"
          borderColor="gray.900"
          borderRadius="base"
        >
          <Heading fontSize="xl">Deposit Collateral</Heading>
          <Text fontSize="sm">
            Take an interest-free loan against your collateral. This increases your debt and
            decreases your C-Ratio.
          </Text>
          <Heading mt={4} mb={2} size="sm">
            Deposit {collateralSymbol}
          </Heading>
          <DepositForm />
        </Box>
        <Box
          ml={{ base: 0, md: 2 }}
          p={4}
          mt={8}
          bg="navy.900"
          borderWidth="1px"
          borderColor="gray.900"
          borderRadius="base"
        >
          {
            preferredPool ? (
              <Flex justifyContent="space-between">
                <Flex flexDirection="column">
                  <Heading fontSize="xl">{preferredPool.name}</Heading>
                  <Text fontSize="sm" color="gray.400">
                    Pool #{preferredPool.id}
                  </Text>
                </Flex>
                <Button
                  size="sm"
                  onClick={() =>
                    navigate({
                      pathname: generatePath('/pools/:poolId', { poolId: preferredPool.id }),
                      search: accountId ? createSearchParams({ accountId }).toString() : '',
                    })
                  }
                  variant="outline"
                >
                  See Pool
                </Button>
              </Flex>
            ) : null // TODO skeleton
          }
          <Text color="gray.400" mt={2} fontSize="sm">
            The Spartan Council Pool is the primary pool of Synthetix. All collateral will be
            deposited in this pool by default.
          </Text>
          <Box mt={4} p={4} border="1px" borderColor="gray.500" borderRadius="base">
            <Heading fontSize="md">Performance</Heading>
            <Text color="green.500" fontSize="2xl" fontWeight="bold">
              TODO
            </Text>
            <Text color="green.500" fontSize="md" fontWeight="bold">
              TODO
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export const Deposit = () => {
  const params = useParams();
  const { data: preferredPool } = usePreferredPool();
  const navigate = useNavigate();
  return (
    <DepositUi
      collateralSymbol={params.collateralSymbol}
      preferredPool={preferredPool}
      accountId={params.accountId}
      navigate={navigate}
    />
  );
};