import { useState } from 'react';

export default function Fighters() {
    const fighters = [
        { name: 'Knight', attack: 10, defense: 8, image: '/images/ronke-knight.png' },
        { name: 'Mage', attack: 7, defense: 5, image: '/images/ronke-mage.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
        { name: 'Rogue', attack: 9, defense: 6, image: '/images/ronke-rogue.png' },
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

    // Adjust these heights to match your footer and button heights
    const footerHeight = 64; // px, adjust if your footer is taller/shorter
    const buttonHeight = 64; // px, adjust if your button is taller/shorter

    return (
        <div className="relative min-h-screen">
            {/* Scrollable content with padding at bottom for button+footer */}
            <div
                className="max-w-6xl mx-auto pb-40 pt-8 space-y-8 overflow-y-auto"
                style={{ minHeight: `calc(100vh - ${footerHeight + buttonHeight}px)` }}
            >
                {/* Fighters Section */}
                <section className="relative">
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
                </section>
            </div>

            {/* Fixed button above the footer */}
            <div
                className="fixed left-0 right-0 z-40"
                style={{
                    bottom: `${footerHeight + 8}px`,
                    height: `${buttonHeight}px`,
                    pointerEvents: 'none', // allow footer clicks if overlapping
                }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <button
                        onClick={sendToDungeon}
                        disabled={selected.length === 0}
                        className={`w-full py-4 px-6 text-white text-xl font-bold tracking-wide
    transition-all duration-300 rounded-full shadow-lg
    bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-500
    hover:from-blue-500 hover:to-indigo-600 hover:shadow-xl
    focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50
    ${selected.length === 0 ? 'opacity-40 cursor-not-allowed' : ''}
  `}
                        style={{ pointerEvents: selected.length === 0 ? 'none' : 'auto' }}
                    >
                        ⚔️ Enter Dungeon
                    </button>


                </div>
            </div>
        </div>
    );
}