const Web3 = require("web3");
const factoryContractABI = require("./factoryContractAbi.json");
const icoContractABI = require("./IcoContractAbi.json");

async function deployICOContract() {
  // Connect to the Ethereum network using Web3
  const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");

  // Set the account that will deploy the contracts
  const deployerAddress = "0x184e42a758e6aa2f0768cdc0e4344a245ca165e9";
  const privateKey =
    "314db7b7bece4d4684f17d7df24ed88c64a907159da856cfe7020d847cfd62ed";

  // Load the contract ABIs
  const factoryContractAddress = "0x468286AFa5A82faC3396446ca09e30c19a0e4c31";
  const factoryContract = new web3.eth.Contract(
    factoryContractABI,
    factoryContractAddress
  );

  // Set the dummy data for the ICO contract
  const icoData = {
    tokenAddress: "0x8e5c5E2b4614deb64b062b96a7E09e65D5c96183",
    icoAmount: 10,
    presaleRate: 1000,
    startTimestamp: 376578267642,
    endTimestamp: 386578267642, // 2 hours from now
    listingRate: 2000,
    liquiditPer: 50,
    refralRate: 5,
    softcap: 1223,
    hardcap: 22313,
    minBuy: 1,
    maxBuy: 10,
  };

  const icoUrl = {
    website: "https://example.com",
    logo: "https://example.com/logo.png",
    youtube: "https://youtube.com/example",
    info: "Example ICO",
    facebook: "https://facebook.com/example",
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
    telegram: "https://t.me/example",
    reddit: "https://reddit.com/r/example",
    instagram: "https://instagram.com/example",
  };

  const routerAddress = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
  const currencyAddress = "0x8e5c5E2b4614deb64b062b96a7E09e65D5c96183";
  const contributionAmount = web3.utils.toWei("1", "ether");

  try {
    // Estimate gas required for the contract deployment
    // const gasEstimate = await factoryContract.methods.createICOContract(
    //   icoData,
    //   icoUrl,
    //   currencyAddress,
    //   routerAddress,
    //   currencyAddress,
    //   10
    // ).estimateGas({ from: deployerAddress });

    // Build the transaction data
    const txData = factoryContract.methods
      .createICOContract(
        icoData,
        icoUrl,
        currencyAddress,
        routerAddress,
        currencyAddress,
        10
      )
      .encodeABI();

    // Sign the transaction
    const signedTx = await web3.eth.accounts.signTransaction(
      {
        from: deployerAddress,
        to: factoryContractAddress,
        gas: 6000000,
        data: txData,
        nonce: await web3.eth.getTransactionCount(deployerAddress),
      },
      privateKey
    );

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log("Contract deployed at address:", receipt.contractAddress);

    // Access the deployed ICO contract
    const icoContractAddress = await factoryContract.methods
      .getDeployedICOContract(icoData.tokenAddress)
      .call();
    const icoContract = new web3.eth.Contract(
      icoContractABI,
      icoContractAddress
    );

    // Perform additional operations on the deployed ICO contract if needed
    // ...
  } catch (error) {
    console.error("Error deploying ICO contract:", error);
  }
}

// Call the deployICOContract function
deployICOContract();
