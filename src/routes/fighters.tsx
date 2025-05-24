import { useState } from 'react';

export default function Fighters() {
    const fighters = [
        { name: 'Knight', attack: 10, defense: 8, image: '/images/ronke-knight.png' },
        { name: 'Mage', attack: 7, defense: 5, image: '/images/ronke-mage.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
    ];

    const [selected, setSelected] = useState<number[]>([]);

    const toggleFighter = (idx: number) => {
        setSelected(sel =>
            sel.includes(idx) ? sel.filter(f => f !== idx) : [...sel, idx]
        );
    };

    const sendToDungeon = () => {
        if (selected.length === 0) return;
        alert(`Sending fighters: ${selected.map(i => fighters[i].name).join(', ')}`);
    };

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Fighters Section */}
            <section className="relative">
                {/* 2 per row on mobile, 3 per row on md+ */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {fighters.map((f, idx) => (
                        <div
                            key={f.name}
                            className={`border rounded-xl p-6 flex flex-col items-center text-center transition-transform card-light-effect card-light-effect-hover bg-transparent
                                ${selected.includes(idx) ? 'border-blue-500 ring-2 ring-blue-500' : 'border-[#1f2937]'}
                            `}
                            onClick={() => toggleFighter(idx)}
                            style={{ cursor: 'pointer' }}
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
                {/* <div className="absolute top-6 right-6 rounded-xl px-4 py-2 border border-[#1f2937] bg-transparent card-light-effect">
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                        Dashboard
                    </p>
                    <p className="text-2xl font-semibold text-[var(--color-text-main)]">
                        1,250 RBT
                    </p>
                </div> */}
            </section>

            {/* Send to Dungeon Button (styles unchanged) */}
            <div className="flex flex-col items-center mt-10">
                <button
                    onClick={sendToDungeon}
                    disabled={selected.length === 0}
                    className={`group transition-all rounded-2xl p-1 bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg
                        ${selected.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                >
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="/images/portal.png"
                            alt="Dungeon Portal"
                            className="w-40 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <span className="mt-3 block text-center text-lg font-bold text-blue-200 group-hover:text-white">
                        Send Fighters
                    </span>
                </button>
            </div>

            {/* Footer */}
            {/* <footer className="flex justify-end mt-6 text-sm">
                <span className="px-4 py-2 border border-[#1f2937] rounded-xl bg-transparent card-light-effect text-[var(--color-text-muted)]">
                    ron82ng...21a0
                </span>
            </footer> */}
        </div>
    );
}