require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    monad: {
      url: "https://testnet-rpc.monad.xyz"
      chainId: 10143
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
