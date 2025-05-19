import { Link, Outlet } from '@tanstack/react-router';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col" style={{ color: 'var(--color-text-main)' }}>
            <header
                className="flex justify-between items-center px-8 py-5 border-b"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-card)' }}
            >
                <h1 className="text-3xl font-extrabold text-blue-400 font-serif tracking-wide">RonkeBlades</h1>
                <nav className="flex space-x-8 text-sm font-medium">
                    <Link
                        to="/fighters"
                        className="hover:text-blue-400 transition-colors uppercase tracking-wider"
                        style={{ color: 'var(--color-text-main)' }}
                    >
                        Fighters
                    </Link>
                    <Link
                        to="/inventory"
                        className="hover:text-blue-400 transition-colors uppercase tracking-wider"
                        style={{ color: 'var(--color-text-main)' }}
                    >
                        Inventory
                    </Link>
                    <Link
                        to="/dungeon"
                        className="hover:text-blue-400 transition-colors uppercase tracking-wider"
                        style={{ color: 'var(--color-text-main)' }}
                    >
                        Dungeon
                    </Link>
                    <Link
                        to="/token"
                        className="hover:text-blue-400 transition-colors uppercase tracking-wider"
                        style={{ color: 'var(--color-text-main)' }}
                    >
                        Token
                    </Link>
                </nav>
                <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="w-2 h-2 rounded-full bg-zinc-500" />
                </div>
            </header>
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
}