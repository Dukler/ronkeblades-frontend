import { Link, useRouterState } from '@tanstack/react-router';

const tabs = [
    { name: 'Fighters', path: '/' },
    { name: 'Dungeon', path: '/dungeon' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Token', path: '/token' },
];

export default function Navbar() {
    const { location } = useRouterState();

    return (
        <nav className="w-full flex justify-center mb-2">
            <div className="flex gap-2 shadow-lg">
                {tabs.map(tab => {
                    const isActive = location.pathname === tab.path;
                    return (
                        <Link
                            key={tab.path}
                            to={tab.path}
                            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${isActive
                                ? 'bg-accent text-white'
                                : 'bg-transparent text-[var(--color-text-main)] hover:bg-[#23272f]'
                                }`}
                        >
                            {tab.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}