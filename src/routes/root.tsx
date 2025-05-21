import { Outlet, createRootRoute } from '@tanstack/react-router';
import { useRoninWalletContext } from '../hooks/useRoninWallet';

export const rootRoute = createRootRoute({
    component: function RootComponent() {
        const { address, connect, isConnected } = useRoninWalletContext();
        return (
            <div className="p-4 text-[var(--color-text-main)]">
                <button onClick={connect} className="btn">
                    {isConnected ? address : 'Connect Ronin Wallet'}
                </button>
                <Outlet />
            </div>
        );
    },
});