import { useContext, useEffect, useState } from 'react';
import {
    requestRoninWalletConnector,
    ConnectorEvent,
    ConnectorError,
    ConnectorErrorType,
    RoninWalletConnector,
} from '@sky-mavis/tanto-connect';
import { Web3Provider } from '@ethersproject/providers'; // ethers v5
import { RoninWalletContext } from '../context';

export function useRoninWallet() {
    const [connector, setConnector] = useState<RoninWalletConnector | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [provider, setProvider] = useState<Web3Provider | null>(null);

    useEffect(() => {
        requestRoninWalletConnector()
            .then(conn => {
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
                if (
                    err instanceof ConnectorError &&
                    err.code === ConnectorErrorType.ConnectorNotFound
                ) {
                    window.location.href = 'https://wallet.roninchain.com';
                }
            });
    }, []);

    const connect = async () => {
        if (!connector) return;
        const { provider: eth } = await connector.connect();
        const accts = await connector.getAccounts();
        setAddress(accts[0]);
        if (eth) {
            const web3Provider = new Web3Provider(eth);
            setProvider(web3Provider);
        }
    };

    return { address, provider, connect, isConnected: !!address };
}

export function useRoninWalletContext() {
    const ctx = useContext(RoninWalletContext);
    if (!ctx) throw new Error('useRoninWalletContext must be used within RoninWalletProvider');
    return ctx;
}