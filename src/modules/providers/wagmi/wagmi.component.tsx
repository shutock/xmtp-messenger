"use client";

import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectLegacyConnector } from "wagmi/connectors/walletConnectLegacy";

import type { IComponent } from "@/lib";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  connectors: [
    new InjectedConnector({
      chains: [mainnet],
      options: {},
    }),
    new WalletConnectLegacyConnector({ chains: [mainnet], options: {} }),
  ],
});

export const Wagmi: IComponent = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
