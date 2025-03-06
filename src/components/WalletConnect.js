import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "@walletconnect/web3modal"; // Pastikan dependensinya sudah diinstall
// Karena kita hanya mendukung Monad, kita tidak perlu switch network

const WalletConnect = () => {
  const [walletType, setWalletType] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectEvmWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      setWalletType("EVM Wallet");
      setProvider(provider);
    } catch (error) {
      console.error("EVM Wallet connection failed:", error);
    }
  };

  return (
    <div>
      {!walletType ? (
        <button onClick={connectEvmWallet} className="px-3 py-2 bg-button rounded hover:bg-hover">
          <i className="fa-duotone fa-solid fa-wallet"></i> Connect Wallet
        </button>
      ) : (
        <p>Connected: {walletType}</p>
      )}
    </div>
  );
};

export default WalletConnect;
