import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Fighters from './fighters'
import Inventory from './inventory'
import Token from './token'
import Login from './login'

export const indexRoute = createRoute({
    path: '/',
    getParentRoute: () => rootRoute,
    component: Fighters,
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

export const loginRoute = createRoute({
    path: '/login',
    getParentRoute: () => rootRoute,
    component: Login,
});