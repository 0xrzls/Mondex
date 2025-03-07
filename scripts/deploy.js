const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const tokenA = "0xTokenAAddress"; // Ganti dengan alamat token valid di Monad Testnet
  const tokenB = "0xTokenBAddress"; // Ganti dengan alamat token valid di Monad Testnet

  const SimpleDex = await hre.ethers.getContractFactory("SimpleDex");
  const dex = await SimpleDex.deploy(tokenA, tokenB);
  await dex.deployed();

  console.log("SimpleDex deployed to:", dex.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
