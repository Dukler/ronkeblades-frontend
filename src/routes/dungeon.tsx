export default function Dungeon() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Enter Dungeon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-xl text-center">
                    <p className="mb-2">Select Fighter</p>
                    <div className="h-40 bg-zinc-800 rounded" />
                </div>
                <div className="bg-card p-4 rounded-xl text-center">
                    <p className="mb-2">Dungeon Portal</p>
                    <div className="h-40 bg-zinc-800 rounded" />
                </div>
            </div>
            <button className="w-full mt-4 py-2 bg-accent text-white font-bold rounded-xl">
                Send Fighters
            </button>
        </div>
    );
}