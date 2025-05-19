export default function Fighters() {
    const fighters = [
        { name: 'Knight', attack: 10, defense: 8, image: '/images/ronke-knight.png' },
        { name: 'Mage', attack: 7, defense: 5, image: '/images/ronke-mage.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
    ];

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Fighters Section */}
            <section className="relative border rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text-main)' }}>
                    Fighters
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {fighters.map((f) => (
                        <div
                            key={f.name}
                            className="border rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
                        >
                            <div className="w-40 h-40 flex items-center justify-center mb-4 bg-gray-800 rounded-xl">
                                <span className="text-gray-400 text-sm">Placeholder: Ronke {f.name}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-main)' }}>
                                {f.name}
                            </h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                Attack: {f.attack}
                            </p>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                Defense: {f.defense}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="absolute top-6 right-6 rounded-xl px-4 py-2 border">
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                        Dashboard
                    </p>
                    <p className="text-2xl font-semibold" style={{ color: 'var(--color-text-main)' }}>
                        1,250 RBT
                    </p>
                </div>
            </section>

            {/* Dungeon Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 border rounded-xl p-8">
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-text-main)' }}>
                        Select Fighter
                    </h3>
                    <div className="w-48 h-48 flex items-center justify-center bg-gray-800 rounded-xl">
                        <span className="text-gray-400 text-sm">Placeholder: Ronke Rogue</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-text-main)' }}>
                        Enter Dungeon
                    </h3>
                    <div className="w-48 h-48 flex items-center justify-center mb-6 relative">
                        <img
                            src="/images/portal.png"
                            alt="Dungeon Portal"
                            className="max-w-full max-h-full rounded-xl object-contain"
                        />
                    </div>
                    <button
                        className="px-8 py-3 text-white rounded-xl border hover:bg-blue-600 hover:border-blue-600 transition-colors"
                        style={{
                            backgroundColor: 'transparent',
                            borderColor: 'var(--color-border)',
                            color: 'var(--color-text-main)',
                        }}
                    >
                        Send Fighters
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="flex justify-end mt-6 text-sm">
                <span className="px-4 py-2 border rounded-xl">
                    ron82ng...21a0
                </span>
            </footer>
        </div>
    );
}