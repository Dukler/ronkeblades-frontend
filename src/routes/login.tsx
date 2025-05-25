import { useRoninWalletContext } from '../hooks/useRoninWallet';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export default function Login() {
    const { connect, isConnected } = useRoninWalletContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected) {
            navigate({ to: '/' });
        }
    }, [isConnected, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] bg-white">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <button
                onClick={connect}
                className="px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
                {isConnected ? 'Connected' : 'Connect Wallet'}
            </button>
            {isConnected && <p className="mt-4 text-green-500">Connected!</p>}
        </div>
    );
}