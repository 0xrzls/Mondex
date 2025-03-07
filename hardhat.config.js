require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19", // Pastikan kompatibel dengan kontrak
  networks: {
    monadTestnet: {
      url: "https://testnet-rpc.monad.network", // Ganti dengan RPC dari chainlist
      chainId: 10143, // Monad Testnet Chain ID
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Ambil private key dari .env
    },
  },
