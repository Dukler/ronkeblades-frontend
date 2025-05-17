import { Contract } from 'ethers';
import { getFighterContract } from './ronkebladesFighter';

export const DUNGEON_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'; // <-- update after deploy
export const DUNGEON_ABI = [
    'function deployFighter(uint256 tokenId) public',
    'function claimRewards(uint256 tokenId) public',
    'function recallFighter(uint256 tokenId) public',
    'function getPendingRewards(uint256 tokenId) public view returns (uint256)',
];

export function getDungeonContract(provider: any) {
    const signer = provider.getSigner();
    return new Contract(DUNGEON_ADDRESS, DUNGEON_ABI, signer);
}

export async function sendFighterToDungeon(provider, tokenId) {
    const fighterContract = await getFighterContract(provider);
    // Approve dungeon to manage this NFT if not already approved
    const approved = await fighterContract.getApproved(tokenId);
    if (approved.toLowerCase() !== DUNGEON_ADDRESS.toLowerCase()) {
        const tx = await fighterContract.approve(DUNGEON_ADDRESS, tokenId);
        await tx.wait();
    }
    // Call deployFighter on dungeon contract
    const dungeonContract = getDungeonContract(provider);
    const tx2 = await dungeonContract.deployFighter(tokenId);
    await tx2.wait();
    alert('Fighter sent to dungeon!');
}