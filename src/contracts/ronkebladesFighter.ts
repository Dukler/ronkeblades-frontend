import { Contract } from 'ethers';
export const FIGHTER_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; // RonkeFighter address
export const ABI = [
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address owner) view returns (uint256)',
    'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
    'function getClass(uint256 tokenId) view returns (uint256)',
];

export async function getFighterContract(provider: any) {
    if (!provider) throw new Error("Provider is undefined!");
    const signer = await provider.getSigner();
    return new Contract(FIGHTER_ADDRESS, ABI, signer);
}

// Get all fighter token IDs owned by an address
export async function fetchFighters(contract: Contract, addr: string) {
    console.log("Contract address:", contract.address || contract.target);
    console.log("ABI:", contract.interface.fragments.map(f => f.format()));
    console.log("Address passed to balanceOf:", addr);
    const code = await contract.provider.getCode(contract.address || contract.target);
    console.log("Deployed code at address:", code);
    const network = await contract.provider.getNetwork();
    await window.ronin.request({ method: 'eth_getCode', params: [contract.address || contract.target, 'latest'] });
    console.log("Frontend connected to chainId:", network.chainId);
    const balance = await contract.balanceOf(addr);
    const ids = [];
    for (let i = 0n; i < balance; i++) { // Use BigInt for ethers v6
        const tokenId = await contract.tokenOfOwnerByIndex(addr, i);
        ids.push(tokenId.toString());
    }
    return ids;
}