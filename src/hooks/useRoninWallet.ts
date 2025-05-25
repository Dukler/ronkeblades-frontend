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

declare global {
    interface Window {
        ethereum?: any;
        ronin?: any;
    }
}

export function useRoninWallet() {
    const [connector, setConnector] = useState<RoninWalletConnector | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [provider, setProvider] = useState<Web3Provider | null>(null);
    const [isRonin, setIsRonin] = useState<boolean>(false);

    useEffect(() => {
        // Prefer Ronin Wallet if available
        if (window.ronin) {
            setIsRonin(true);
            requestRoninWalletConnector()
                .then(conn => {
                    conn.on(ConnectorEvent.CONNECT, async () => {
                        const accts = await conn.getAccounts();
                        setAddress(accts[0]);
                    });
                    conn.on(ConnectorEvent.DISCONNECT, () => {
                        setAddress(null);
                        setProvider(null);
                        window.localStorage.removeItem('ronin:wallet:connected'); // <-- clear login flag
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
        } else if (window.ethereum) {
            // Fallback to MetaMask
            setIsRonin(false);
            const eth = window.ethereum;
            const web3Provider = new Web3Provider(eth);
            setProvider(web3Provider);
            eth.request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => {
                setAddress(accounts[0]);
            });
            eth.on('accountsChanged', (accounts: string[]) => {
                setAddress(accounts[0]);
            });
            eth.on('disconnect', () => {
                setAddress(null);
                setProvider(null);
                window.localStorage.removeItem('ronin:wallet:connected'); // <-- clear login flag
            });
        }
    }, []);

    const connect = async () => {
        if (isRonin && connector) {
            const { provider: eth } = await connector.connect();
            const accts = await connector.getAccounts();
            setAddress(accts[0]);
            if (eth) {
                const web3Provider = new Web3Provider(eth);
                setProvider(web3Provider);
            }
        } else if (window.ethereum) {
            const eth = window.ethereum;
            await eth.request({ method: 'eth_requestAccounts' });
            const accounts = await eth.request({ method: 'eth_accounts' });
            setAddress(accounts[0]);
            setProvider(new Web3Provider(eth));
        }
    };

    return { address, provider, connect, isConnected: !!address, isRonin };
}

export function useRoninWalletContext() {
    const ctx = useContext(RoninWalletContext);
    if (!ctx) throw new Error('useRoninWalletContext must be used within RoninWalletProvider');
    return ctx;
}