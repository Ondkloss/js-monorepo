// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'ProxysGBP';
export const address = '0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F';
export const source = 'ProxyERC20';
export const abi = [
  'constructor(address _owner)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event TargetUpdated(address newTarget)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'function _emit(bytes callData, uint256 numTopics, bytes32 topic1, bytes32 topic2, bytes32 topic3, bytes32 topic4)',
  'function acceptOwnership()',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 value) returns (bool)',
  'function balanceOf(address account) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function name() view returns (string)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function setTarget(address _target)',
  'function symbol() view returns (string)',
  'function target() view returns (address)',
  'function totalSupply() view returns (uint256)',
  'function transfer(address to, uint256 value) returns (bool)',
  'function transferFrom(address from, address to, uint256 value) returns (bool)',
];