import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/Navbar';
import { useRoninWalletContext } from '../hooks/useRoninWallet';

export default function MainLayout() {
    const { address, connect, isConnected } = useRoninWalletContext();

    return (
        <div className="min-h-screen flex flex-col text-[var(--color-text-main)] font-['Chakra_Petch',sans-serif]">
            <header className="flex justify-between items-center px-8 py-5 border-b border-[var(--color-border)] bg-[var(--color-card)]">
                <h1 className="text-3xl font-extrabold text-blue-400 font-serif tracking-wide">RonkeBlades</h1>
                <button onClick={connect} className="btn">
                    {isConnected ? address : 'Connect Ronin Wallet'}
                </button>
            </header>
            <Navbar />
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
}