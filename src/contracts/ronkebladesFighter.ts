import { Contract } from 'ethers';
export const FIGHTER_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; // RonkeFighter address
const ABI = [
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address owner) view returns (uint256)',
    'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
    'function getClass(uint256 tokenId) view returns (uint256)',
];

export async function getFighterContract(provider: any) {
    const signer = await provider.getSigner();
    return new Contract(FIGHTER_ADDRESS, ABI, signer);
}

// Get all fighter token IDs owned by an address
export async function fetchFighters(contract: Contract, addr: string) {
    const balance = await contract.balanceOf(addr);
    const ids = [];
    for (let i = 0; i < balance; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(addr, i);
        ids.push(tokenId.toString());
    }
    return ids;
}

// Optionally, get the class for a fighter
export async function fetchFighterClass(contract: Contract, tokenId: string) {
    const fighterClass = await contract.getClass(tokenId);
    return fighterClass.toString();
}