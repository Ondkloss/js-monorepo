import * as wagmi from 'wagmi';

/*
 * Stub methods wrapping wagmi for now
 * TODO: non-wagmi implementation
 * */

export function useProvider() {
  const provider = wagmi.useProvider();
  return provider;
}

export function useSigner() {
  const { data: signer } = wagmi.useSigner();
  return signer;
}

export function useNetwork() {
  const provider = wagmi.useProvider();
  return {
    id: provider.network.chainId,
    name: provider.network.name,
  };
}

export function useAccount(): { address: string } {
  const account = wagmi.useAccount();
  return {
    address: account.address as string,
  };
}

export function useIsConnected(): boolean {
  const account = wagmi.useAccount();
  return Boolean(account.address);
}