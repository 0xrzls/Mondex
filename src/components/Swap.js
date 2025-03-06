import React, { useState } from "react";
import { ethers } from "ethers";

const Swap = () => {
  const [activeTab, setActiveTab] = useState("swap"); // "swap" atau "liquidity"
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");

  const handleSwap = async () => {
    alert(`Swapping ${amount} ${fromToken} to ${toToken}`);
    // TODO: Implementasi transaksi swap ke smart contract Uniswap V2 di Monad
  };

  const handleAddLiquidity = async () => {
    alert(`Adding liquidity for ${fromToken} and ${toToken}`);
    // TODO: Implementasi transaksi add liquidity
  };

  return (
    <div className="swap-container p-4 bg-secondary rounded text-white">
      <div className="tab-menu flex justify-center space-x-4 mb-4">
        <button onClick={() => setActiveTab("swap")} className={`px-4 py-2 rounded ${activeTab === "swap" ? "bg-primary" : "bg-button"}`}>
          Swap
        </button>
        <button onClick={() => setActiveTab("liquidity")} className={`px-4 py-2 rounded ${activeTab === "liquidity" ? "bg-primary" : "bg-button"}`}>
          Liquidity
        </button>
      </div>
      {activeTab === "swap" ? (
        <div className="swap-tab">
          <h2 className="text-xl mb-4">Swap Tokens</h2>
          <input type="text" placeholder="From Token" value={fromToken} onChange={(e) => setFromToken(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800" />
          <input type="text" placeholder="To Token" value={toToken} onChange={(e) => setToToken(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800" />
          <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800" />
          <button onClick={handleSwap} className="w-full p-2 bg-button rounded hover:bg-hover">Swap</button>
        </div>
      ) : (
        <div className="liquidity-tab">
          <h2 className="text-xl mb-4">Add Liquidity</h2>
          <input type="text" placeholder="Token A" value={fromToken} onChange={(e) => setFromToken(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800" />
          <input type="text" placeholder="Token B" value={toToken} onChange={(e) => setToToken(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800" />
          <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800" />
          <button onClick={handleAddLiquidity} className="w-full p-2 bg-button rounded hover:bg-hover">Add Liquidity</button>
        </div>
      )}
    </div>
  );
};

export default Swap;
