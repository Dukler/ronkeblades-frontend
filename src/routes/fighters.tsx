export default function Fighters() {
    const fighters = [
        { name: 'Knight', attack: 10, defense: 8, image: '/images/ronke-knight.png' },
        { name: 'Mage', attack: 7, defense: 5, image: '/images/ronke-mage.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
    ];

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Fighters Section */}
            <section className="relative border border-[#1f2937] rounded-xl p-8 bg-transparent card-light-effect">
                <h2 className="text-3xl font-bold mb-8 text-[var(--color-text-main)]">
                    Fighters
                </h2>
                {/* 2 per row on mobile, 3 per row on md+ */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {fighters.map((f) => (
                        <div
                            key={f.name}
                            className="border border-[#1f2937] rounded-xl p-6 flex flex-col items-center text-center transition-transform card-light-effect card-light-effect-hover bg-transparent"
                        >
                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 bg-gray-800 rounded-xl">
                                <span className="text-gray-400 text-sm">Placeholder: Ronke {f.name}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-main)]">
                                {f.name}
                            </h3>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Attack: {f.attack}
                            </p>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Defense: {f.defense}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="absolute top-6 right-6 rounded-xl px-4 py-2 border border-[#1f2937] bg-transparent card-light-effect">
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                        Dashboard
                    </p>
                    <p className="text-2xl font-semibold text-[var(--color-text-main)]">
                        1,250 RBT
                    </p>
                </div>
            </section>

            {/* Footer */}
            {/* <footer className="flex justify-end mt-6 text-sm">
                <span className="px-4 py-2 border border-[#1f2937] rounded-xl bg-transparent card-light-effect text-[var(--color-text-muted)]">
                    ron82ng...21a0
                </span>
            </footer> */}
        </div>
    );
}