import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/Navbar';
import { useRoninWalletContext } from '../hooks/useRoninWallet';

export default function MainLayout() {
    const { address, connect, isConnected } = useRoninWalletContext();

    return (
        <div className="min-h-screen flex flex-col text-[var(--color-text-main)] font-['Chakra_Petch',sans-serif]">
            <header className="fixed md:sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-[var(--color-border)] bg-[var(--color-card)] w-full">
                <h1 className="text-3xl font-extrabold text-blue-400 font-serif tracking-wide">RonkeBlades</h1>
                <button onClick={connect} className="btn">
                    {isConnected ? address : 'Connect Ronin Wallet'}
                </button>
            </header>
            <main className="flex-1 p-4 pt-20">
                <Outlet />
            </main>
            <footer className="sticky bottom-0 left-0 w-full z-50 border-t border-zinc-800 bg-[var(--color-background)]">
                <nav className="flex justify-around items-center max-w-md mx-auto py-2">
                    <Navbar />
                </nav>
            </footer>
        </div>
    );
}