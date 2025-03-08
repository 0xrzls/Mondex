import { createAppKit } from "@reown/appkit";
import { createConfig } from "wagmi";
import { createPublicClient, http } from "viem";

const publicClient = createPublicClient({
    chainId: 10143, // ID Monad Testnet
    transport: http("https://rpc.testnet.monad.xyz"),
});

const wagmiClient = createConfig({
    autoConnect: true,
    publicClient,
});

export const appKit = createAppKit({
    wagmiClient,
    projectId: "8814f573a0d13d77352e522ad7d3c721",
});
