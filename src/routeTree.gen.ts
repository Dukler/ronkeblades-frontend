import { rootRoute } from './routes/root';
import { dungeonRoute, indexRoute, inventoryRoute, tokenRoute } from './routes/index';

export const routeTree = rootRoute.addChildren([
    indexRoute,
    dungeonRoute,
    inventoryRoute,
    tokenRoute,
]);
