import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import DungeonStats from '../components/DungeonStats';
import MyFighters from '../components/MyFighters';

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => (
        <div className="mt-4 space-y-4">
            <h1 className="text-xl font-bold">RonkeBlades Dungeon</h1>
            <p>Send your heroes into the dungeon to earn <strong>RonkeBladesToken</strong>.</p>
            <DungeonStats />
            <MyFighters />
        </div>
    ),
});
