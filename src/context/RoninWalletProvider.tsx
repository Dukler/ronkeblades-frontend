import { RoninWalletContext } from '.';
import { useRoninWallet } from '../hooks/useRoninWallet';


export function RoninWalletProvider({ children }: { children: React.ReactNode }) {
    const wallet = useRoninWallet();
    return (
        <RoninWalletContext.Provider value={wallet} >
            {children}
        </RoninWalletContext.Provider>
    );
}

