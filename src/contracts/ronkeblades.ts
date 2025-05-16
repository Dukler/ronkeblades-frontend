import { Contract } from 'ethers';
export const TOKEN_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ABI = [
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address owner) view returns (uint256)',
];

export async function getContract(provider: any) {
    const signer = await provider.getSigner();
    return new Contract(TOKEN_ADDRESS, ABI, signer);
}

export async function fetchTotal(contract: Contract) {
    const raw = await contract.totalSupply();
    return raw.toString();
}

export async function fetchUser(contract: Contract, addr: string) {
    const raw = await contract.balanceOf(addr);
    return raw.toString();
}