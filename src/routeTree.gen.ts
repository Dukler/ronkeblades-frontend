import { rootRoute } from './routes/root';
import { indexRoute, inventoryRoute, tokenRoute, loginRoute } from './routes/index';

export const routeTree = rootRoute.addChildren([
    indexRoute,
    inventoryRoute,
    tokenRoute,
    loginRoute,
]);
