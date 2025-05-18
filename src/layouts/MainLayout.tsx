import { Link, Outlet } from '@tanstack/react-router';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-main)' }}>
            <header
                className="flex justify-between items-center px-6 py-4 border-b"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-card)' }}
            >
                <h1 className="text-3xl font-extrabold text-blue-400 font-serif">RonkeBlades</h1>
                <nav className="flex space-x-6 text-sm font-medium">
                    <Link to="/fighters" className="hover:text-blue-400 transition-colors">Fighters</Link>
                    <Link to="/inventory" className="hover:text-blue-400 transition-colors">Inventory</Link>
                    <Link to="/dungeon" className="hover:text-blue-400 transition-colors">Dungeon</Link>
                    <Link to="/token" className="hover:text-blue-400 transition-colors">Token</Link>
                </nav>
                <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                </div>
            </header>
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
}
