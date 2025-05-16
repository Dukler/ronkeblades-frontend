import { useContext, useEffect, useState } from 'react';
import {
    requestRoninWalletConnector,
    ConnectorEvent,
    ConnectorError,
    ConnectorErrorType,
    RoninWalletConnector,
    // IConnector,
} from '@sky-mavis/tanto-connect';
import { BrowserProvider } from 'ethers';
import { RoninWalletContext } from '../context';

export function useRoninWallet() {
    const [connector, setConnector] = useState<RoninWalletConnector | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [provider, setProvider] = useState<BrowserProvider | null>(null);

    useEffect(() => {
        requestRoninWalletConnector()
            .then(conn => {
                if (!conn) return window.location.href = 'https://wallet.roninchain.com';
                conn.on(ConnectorEvent.CONNECT, async () => {
                    const accts = await conn.getAccounts();
                    setAddress(accts[0]);
                });
                conn.on(ConnectorEvent.DISCONNECT, () => {
                    setAddress(null);
                    setProvider(null);
                });
                setConnector(conn);
            })
            .catch(err => {
                if (err instanceof ConnectorError &&
                    err.type === ConnectorErrorType.ConnectorNotFound) {
                    window.location.href = 'https://wallet.roninchain.com';
                }
            });
    }, []);

    const connect = async () => {
        if (!connector) return;
        console.log('roninconected');

        const { provider: eth } = await connector.connect();
        const accts = await connector.getAccounts();
        setAddress(accts[0]);
        if (eth) setProvider(new BrowserProvider(eth));
    };

    return { address, provider, connect, isConnected: !!address };
}

export function useRoninWalletContext() {
    const ctx = useContext(RoninWalletContext);
    if (!ctx) throw new Error('useRoninWalletContext must be used within RoninWalletProvider');
    return ctx;
}