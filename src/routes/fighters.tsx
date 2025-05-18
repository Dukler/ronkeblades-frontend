export default function Fighters() {
    const fighters = [
        { name: 'Knight', attack: 10, defense: 8, image: '/images/knight.png' },
        { name: 'Mage', attack: 7, defense: 5, image: '/images/mage.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/rogue.png' },
    ];

    return (
        <div className="space-y-10">
            <section
                className="border rounded-2xl p-6 shadow-xl"
                style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
            >
                <h2 className="text-2xl font-bold mb-6">Fighters</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {fighters.map((f) => (
                        <div
                            key={f.name}
                            className="border rounded-2xl p-5 shadow-md flex flex-col items-center text-center"
                            style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                        >
                            <img src={f.image} alt={f.name} width={160} height={160} className="mb-4 rounded-xl object-cover" />
                            <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text-main)' }}>{f.name}</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Attack: {f.attack}</p>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Defense: {f.defense}</p>
                        </div>
                    ))}
                </div>
                <div
                    className="absolute top-10 right-10 rounded-2xl px-4 py-3 shadow-xl"
                    style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', border: '1px solid var(--color-border)' }}
                >
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Dashboard</p>
                    <p className="text-2xl font-semibold mt-1" style={{ color: 'var(--color-text-main)' }}>1,250 RBT</p>
                </div>
            </section>

            <section
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 border rounded-2xl p-6 shadow-xl"
                style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
            >
                <div className="flex flex-col items-center text-center">
                    <img src="/images/rogue.png" alt="Select Fighter" width={200} height={200} className="rounded-xl" />
                    <p className="text-xl font-semibold mt-4" style={{ color: 'var(--color-text-main)' }}>Enter Dungeon</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/images/portal.png" alt="Dungeon Portal" width={200} height={200} className="rounded-xl" />
                    <button
                        className="mt-4 px-6 py-2 text-white rounded-xl border hover:bg-zinc-700 transition"
                        style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                    >
                        Send Fighters
                    </button>
                </div>
            </section>

            <footer className="flex justify-end mt-8 text-sm">
                <span className="px-4 py-2 border rounded-xl" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                    ron82ng...21a0
                </span>
            </footer>
        </div>
    );
}
