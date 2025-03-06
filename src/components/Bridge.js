import React, { useState } from "react";

const Bridge = () => {
  const [fromNetwork, setFromNetwork] = useState("other");
  const [toNetwork, setToNetwork] = useState("monad");
  const [amount, setAmount] = useState("");

  const handleBridge = async () => {
    alert(`Bridging ${amount} tokens from ${fromNetwork} to ${toNetwork}`);
    // TODO: Implementasi transaksi bridge melalui smart contract atau API proxy
  };

  return (
    <div className="bridge-container p-4 bg-secondary text-white rounded">
      <h2 className="text-xl mb-4">Bridge Tokens</h2>
      <label className="block mb-2">From Network:</label>
      <select value={fromNetwork} onChange={(e) => setFromNetwork(e.target.value)} className="w-full p-2 mb-4 rounded bg-gray-800">
        <option value="other">Other</option>
        <option value="monad">Monad</option>
      </select>
      <label className="block mb-2">To Network:</label>
      <select value={toNetwork} onChange={(e) => setToNetwork(e.target.value)} className="w-full p-2 mb-4 rounded bg-gray-800">
        <option value="monad">Monad</option>
        <option value="other">Other</option>
      </select>
      <label className="block mb-2">Amount:</label>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 mb-4 rounded bg-gray-800" />
      <button onClick={handleBridge} className="w-full p-2 bg-button rounded hover:bg-hover">Bridge</button>
    </div>
  );
};

export default Bridge;
