import { Outlet, useRouterState } from '@tanstack/react-router';
import Skeleton from '../components/Skeleton';

export default function MainLayout() {
    const { location } = useRouterState();
    const isLogin = location.pathname === '/login';

    if (isLogin) {
        return <Outlet />;
    }

    return (
        <Skeleton>
            <Outlet />
        </Skeleton>
    );
}