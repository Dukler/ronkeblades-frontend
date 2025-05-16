import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './index.css';
import React from 'react';
import { RoninWalletProvider } from './context/RoninWalletProvider';

const qc = new QueryClient();

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={qc}>
            <RoninWalletProvider>
                <RouterProvider router={router} />
            </RoninWalletProvider>
        </QueryClientProvider>
    </React.StrictMode>
);