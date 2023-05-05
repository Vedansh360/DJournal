// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const post = await hre.ethers.getContractFactory("Post");
    const contract = await post.deploy();
  
    await contract.deployed();
    console.log("Address of contract: ", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

// Address of contract:  0x5c611501D7630985dF81C5B107F5c0729b000a56
// npx hardhat run --network mumbai scripts/deploy.js