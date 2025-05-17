import { useEffect, useState } from 'react';
import { getContract, fetchTotal, fetchUser } from '../contracts/ronkebladesToken';
import { useRoninWalletContext } from '../hooks/useRoninWallet';

export default function DungeonStats() {
    const { provider, address, isConnected } = useRoninWalletContext();
    const [total, setTotal] = useState('');
    const [me, setMe] = useState('');

    useEffect(() => {
        if (!provider || !isConnected || !address) return;
        console.log('roninconected');
        (async () => {
            const contract = await getContract(provider);
            setTotal(await fetchTotal(contract));
            setMe(await fetchUser(contract, address));
        })();
    }, [provider, isConnected, address]);

    return (
        <div className="space-y-2">
            <p>Total Token Minted: {total}</p>
            <p>Your Token Balance: {me}</p>
        </div>
    );
}
