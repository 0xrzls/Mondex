const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const currentTimestamp = Math.floor(Date.now() / 1000);
  const unlockTime = currentTimestamp + 86400; // 1 hari ke depan

  console.log(`Unlock time set to: ${unlockTime}`);

  // Contoh deploy kontrak Uniswap V2 atau kontrak swap yang disesuaikan
  // Gantilah "Lock" dengan nama kontrak Anda jika berbeda
  const Contract = await hre.ethers.getContractFactory("Lock");
  const contract = await Contract.deploy(unlockTime, { value: hre.ethers.utils.parseEther("0.1") });

  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
