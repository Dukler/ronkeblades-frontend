import { createContext } from "react";
import type { useRoninWallet } from "../hooks/useRoninWallet";

export const RoninWalletContext = createContext<ReturnType<typeof useRoninWallet> | null>(null);
