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
