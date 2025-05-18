// import { createRoute } from '@tanstack/react-router';
// import { rootRoute } from './root';
// import DungeonStats from '../components/DungeonStats';
// import MyFighters from '../components/MyFighters';

// export const indexRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: '/',
//     component: () => (
//         <div className="mt-4 space-y-4">
//             <h1 className="text-xl font-bold">RonkeBlades Dungeon</h1>
//             <p>Send your heroes into the dungeon to earn <strong>RonkeBladesToken</strong>.</p>
//             <DungeonStats />
//             <MyFighters />
//         </div>
//     ),
// });
import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Fighters from './fighters'
import Dungeon from './dungeon'
import Inventory from './inventory'
import Token from './token'

export const indexRoute = createRoute({
    path: '/',
    getParentRoute: () => rootRoute,
    component: Fighters,
})

export const dungeonRoute = createRoute({
    path: '/dungeon',
    getParentRoute: () => rootRoute,
    component: Dungeon,
})

export const inventoryRoute = createRoute({
    path: '/inventory',
    getParentRoute: () => rootRoute,
    component: Inventory,
})

export const tokenRoute = createRoute({
    path: '/token',
    getParentRoute: () => rootRoute,
    component: Token,
})
