import { Contract } from 'ethers';
export const FIGHTER_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; // RonkeFighter address

export const ABI = [
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address owner) view returns (uint256)',
    'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
    'function getClass(uint256 tokenId) view returns (uint256)',
    'function approve(address to, uint256 tokenId) public',
    'function getApproved(uint256 tokenId) view returns (address)', // <-- Add this line
];

export async function getFighterContract(provider: any) {
    if (!provider) throw new Error("Provider is undefined!");
    const signer = await provider.getSigner();
    return new Contract(FIGHTER_ADDRESS, ABI, signer);
}

// Get all fighter token IDs owned by an address
export async function fetchFighters(contract: Contract, addr: string) {
    const balance = await contract.balanceOf(addr);
    const ids = [];
    for (let i = 0n; i < balance; i++) { // Use BigInt for ethers v6
        const tokenId = await contract.tokenOfOwnerByIndex(addr, i);
        ids.push(tokenId.toString());
    }
    return ids;
}

import { getDungeonContract } from './ronkebladesDungeon';

export async function claimFighterRewards(provider, tokenId) {
    const dungeonContract = getDungeonContract(provider);
    const tx = await dungeonContract.claimRewards(tokenId);
    await tx.wait();
    alert('Rewards claimed!');
}