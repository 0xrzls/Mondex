require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  defaultNetwork: "monadTestnet",
  networks: {
    monadTestnet: {
      url: "https://rpc.testnet.monad.xyz",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: "0.8.17"
};
