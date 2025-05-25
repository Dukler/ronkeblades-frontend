import { createRootRoute, redirect } from '@tanstack/react-router';
import MainLayout from '../layouts/MainLayout';

export const rootRoute = createRootRoute({
    component: MainLayout,
    beforeLoad: ({ location }) => {
        // Don't redirect if already on login page
        if (location.pathname === '/login') return;

        // Use localStorage or RoninWalletContext for auth check
        const isConnected = window.localStorage.getItem('ronin:wallet:connected') === 'true';
        if (!isConnected) {
            throw redirect({ to: '/login' });
        }
    },
});