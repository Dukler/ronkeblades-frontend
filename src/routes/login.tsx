import { useEffect } from 'react';
import { useRoninWalletContext } from '../hooks/useRoninWallet';

export default function Login() {
    const { connect, isConnected, isConnecting } = useRoninWalletContext();

    useEffect(() => {
        console.log('Login component mounted');
    }, []);

    return (
        <div className=" flex flex-col items-center justify-center min-h-[100vh] bg-white">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <button
                onClick={connect}
                disabled={isConnecting}
                className={`px-6 py-2 rounded-md text-white ${isConnecting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
            >
                {isConnecting ? 'Connecting...' : isConnected ? 'Connected' : 'Connect Wallet'}
            </button>
            {isConnected && <p className="mt-4 text-green-500">Connected!</p>}
        </div>
    );
}