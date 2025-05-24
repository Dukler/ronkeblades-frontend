import { useState } from 'react';

const mockFighters = [
    { id: 1, name: 'Knight' },
    { id: 2, name: 'Mage' },
    { id: 3, name: 'Rogue' },
];

export default function Dungeon() {
    const [selected, setSelected] = useState<number[]>([]);

    const toggleFighter = (id: number) => {
        setSelected(sel =>
            sel.includes(id) ? sel.filter(f => f !== id) : [...sel, id]
        );
    };

    const sendToDungeon = () => {
        if (selected.length === 0) return;
        alert(`Sending fighters: ${selected.join(', ')}`);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {mockFighters.map(f => (
                    <button
                        key={f.id}
                        onClick={() => toggleFighter(f.id)}
                        className={`flex flex-col items-center p-4 rounded-2xl border transition-all shadow-xl
              ${selected.includes(f.id)
                                ? 'border-blue-500 bg-blue-950/30'
                                : 'border-[var(--color-border)] bg-[var(--color-card)]'
                            }`}
                        type="button"
                    >
                        <div className="w-20 h-20 flex items-center justify-center bg-zinc-800 rounded-xl mb-2">
                            <span className="text-zinc-500 text-sm">Fighter #{f.id}</span>
                        </div>
                        <span className="font-semibold text-blue-200">{f.name}</span>
                        <span className={`mt-1 text-xs text-blue-400 transition-opacity duration-200 ${selected.includes(f.id) ? 'opacity-100' : 'opacity-0'}`}>
                            Selected
                        </span>
                    </button>
                ))}
            </div>

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
        </div>
    );
}
