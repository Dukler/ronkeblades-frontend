import { useEffect, useState } from 'react';
import { useRoninWalletContext } from '../hooks/useRoninWallet';
import { fetchFighters, getFighterContract } from '../contracts/ronkebladesFighter';

export default function MyFighters() {
    const { provider, address, isConnected } = useRoninWalletContext();
    const [fighters, setFighters] = useState<string[]>([]);

    useEffect(() => {
        console.log('Fighter IDs:');
        if (!provider || !isConnected || !address) return;
        (async () => {
            console.log('Fighter ID1');
            const contract = await getFighterContract(provider);
            console.log('Fighter ID2');
            const ids = await fetchFighters(contract, address);
            console.log('Fighter ID3', ids);
            setFighters(ids);
        })();
    }, [provider, isConnected, address]);

    return (
        <div>
            <h2>Your Fighters</h2>
            <ul>
                {fighters.map(id => (
                    <li key={id}>Fighter #{id}</li>
                ))}
            </ul>
        </div>
    );
}