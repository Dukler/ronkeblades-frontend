import { useEffect, useState } from 'react';
import { Contract } from 'ethers';
import { useRoninWalletContext } from '../hooks/useRoninWallet';
import { FIGHTER_ADDRESS, ABI, fetchFighters, claimFighterRewards } from '../contracts/ronkebladesFighter';
import { sendFighterToDungeon } from '../contracts/ronkebladesDungeon';

export default function MyFighters() {
    const { provider, address, isConnected } = useRoninWalletContext();
    const [fighters, setFighters] = useState<string[]>([]);

    useEffect(() => {
        if (!provider || !isConnected || !address) return;
        (async () => {
            // Get the signer with the connected address
            const signer = provider.getSigner(address);
            // Create the contract instance with signer
            const contract = new Contract(FIGHTER_ADDRESS, ABI, signer);
            // Fetch fighters
            const ids = await fetchFighters(contract, address);
            setFighters(ids);
        })();
    }, [provider, isConnected, address]);

    return (
        <div>
            <h2>Your Fighters</h2>
            <ul>
                {fighters.map(id => (
                    <>
                        <li key={id}>Fighter #{id}</li>
                        <button onClick={() => sendFighterToDungeon(provider, id)}>
                            Send to Dungeon
                        </button>
                        <button onClick={() => claimFighterRewards(provider, id)}>
                            Claim
                        </button>
                    </>
                ))}
            </ul>
        </div>
    );
}