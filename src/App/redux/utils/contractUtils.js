import { ethers } from "ethers";
import factoryContractABI from "../../Blockchain/abi/icoFactory.json";
import icoContractABI from "../../Blockchain/abi/icoContract.json";
import contractAbi from "../../Blockchain/abi/erc20Contract.json";

const provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545"
);

export async function deployICOContract(signer, data) {
  try {
    const factoryContractAddress = "0x468286AFa5A82faC3396446ca09e30c19a0e4c31";
    const factoryContract = new ethers.Contract(
      factoryContractAddress,
      factoryContractABI,
      signer
    );

    const icoData = {
      tokenAddress: "0x8e5c5E2b4614deb64b062b96a7E09e65D5c96183",
      // icoAmount: (`${data?.approvalToken*10**Number(data?.decimals)}`),
      icoAmount: 10,
      presaleRate: data?.presaleRate,
      startTimestamp: data?.startTimeStamp,
      endTimestamp: data?.endTimeStamp, // 2 hours from now
      listingRate: data?.listingRate,
      liquiditPer: data?.liquidity,
      refralRate: 5,
      softcap: 1,
      hardcap: data?.hardcap,
      minBuy: data?.minimumbuy,
      maxBuy: data?.maximumbuy,
    };

    const icoUrl = {
      website: data?.website,
      logo: data?.logo,
      youtube: data?.Youtube,
      info: data?.description,
      facebook: data?.facebook,
      twitter: data?.twitter,
      github: data?.Github,
      telegram: data?.telegram,
      reddit: data?.Reddit,
      instagram: data?.instagram,
    };

    const routerAddress = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
    const currencyAddress = "0x8e5c5E2b4614deb64b062b96a7E09e65D5c96183";
    const contributionAmount = ethers.utils.parseEther("1");

    console.log("this is ico data", icoData);

    const txData = factoryContract.interface.encodeFunctionData(
      "createICOContract",
      [
        icoData,
        icoUrl,
        currencyAddress,
        routerAddress,
        currencyAddress,
        contributionAmount,
      ]
    );

    const gasPrice = await signer.getGasPrice();

    const gasLimit = await factoryContract.estimateGas.createICOContract(
      icoData,
      icoUrl,
      currencyAddress,
      routerAddress,
      currencyAddress,
      contributionAmount
    );

    const rawTransaction = {
      to: factoryContractAddress,
      gasPrice,
      gasLimit,
      data: txData,
      nonce: await signer.getTransactionCount(),
    };

    const transactionResponse = await signer.sendTransaction(rawTransaction);
    const receipt = await transactionResponse.wait();
    console.log("Contract deployed at address:", receipt.contractAddress);
  } catch (error) {
    console.error("Error deploying ICO contract:", error);
  }
}

export async function approveERC20(
  targetAddress,
  tokenAddress,
  amount,
  signer
) {
  try {
    const contract = new ethers.Contract(tokenAddress, contractAbi, signer);

    const gasPrice = await signer.getGasPrice();
    const gasLimit = await contract.estimateGas.approve(targetAddress, amount);

    const rawTransaction = {
      to: tokenAddress,
      gasPrice,
      gasLimit,
      data: contract.interface.encodeFunctionData("approve", [
        targetAddress,
        amount,
      ]),
      nonce: await signer.getTransactionCount(),
    };

    const transactionResponse = await signer.sendTransaction(rawTransaction);
    const receipt = await transactionResponse.wait();

    return receipt;
  } catch (error) {
    console.error("Error approving ERC20 tokens:", error);
    throw error;
  }
}

export async function checkErcApprovals(
  userAddress,
  spenderAddress,
  tokenAddress
) {
  try {
    const contract = new ethers.Contract(tokenAddress, contractAbi, provider);

    // Get the approval amount
    const approvalAmount = await contract.allowance(
      userAddress,
      spenderAddress
    );

    console.log("Approval Amount:", approvalAmount.toString());
    return approvalAmount;
  } catch (error) {
    console.error("Error checking approval amount:", error);
    throw error;
  }
}

export const testFn = async () => {
  const data = await checkErcApprovals(
    "0x01dCc7d862ad0E81Ae0e8fb1e3D40d9CAcdc89Ba",
    "0x468286AFa5A82faC3396446ca09e30c19a0e4c31",
    "0xfcBe26cED88CB34154d3c9b08B25890331280CDb"
  );
  console.log("aprroval token", Number(data?._hex) / 10 ** 18);
};

testFn();

export const getTokenDetails = async (tokenAddress) => {
  try {
    const contract = new ethers.Contract(tokenAddress, contractAbi, provider);
    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    const totalSupply = await contract.totalSupply();

    const data = {
      tokenAddress: tokenAddress,
      name: name,
      symbol: symbol,
      decimals: decimals,
      totalSupply: totalSupply,
    };

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

export const getIcoDetails = async (icoAddress) => {
  try {
    const contract = new ethers.Contract(icoAddress, icoContractABI, provider);

    // Get the approval amount
    const icoData = await contract.getICOData();
    const token = await getTokenDetails(icoData[0]?.tokenAddress);
    const data = {
      totalSupply: token?.data?.totalSupply,
      tokenName: token?.data?.name,
      symbol: token?.data?.symbol,
      decimal: token?.data?.decimals,
      tokenAddress: icoData[0]?.tokenAddress,
      icoAddress: icoAddress,
      endTimestamp: Number(icoData[0]?.endTimestamp?._hex),
      hardcap: Number(icoData[0]?.hardcap?._hex),
      icoAmount: Number(icoData[0]?.icoAmount?._hex),
      liquidityPer: Number(icoData[0]?.liquiditPer?._hex),
      listingRate: Number(icoData[0]?.listingRate?._hex),
      maxBuy: Number(icoData[0]?.maxBuy?._hex),
      minBuy: Number(icoData[0]?.minBuy?._hex),
      presaleRate: Number(icoData[0]?.presaleRate?._hex),
      refralRate: Number(icoData[0]?.refralRate?._hex),
      softcap: Number(icoData[0]?.softcap._hex),
      startTimestamp: Number(icoData[0]?.startTimestamp?._hex),
      facebook: icoData[1]?.facebook,
      github: icoData[1]?.github,
      info: icoData[1]?.info,
      instagram: icoData[1]?.instagram,
      logo: icoData[1]?.logo,
      reddit: icoData[1]?.reddit,
      telegram: icoData[1]?.telegram,
      twitter: icoData[1]?.twitter,
      website: icoData[1]?.website,
      youtube: icoData[1]?.youtube,
      auditedUrl: icoData[2]?.auditedUrl,
      doxxdUrl: icoData[2]?.doxxdUrl,
      kycUrl: icoData[2]?.kycUrl,
      safuUrl: icoData[2]?.safuUrl,
      owner: icoData[3],
      canceled: icoData[4],
      finished: icoData[5],
      autoLiquidity: icoData[6],
    };

    console.log("icoData:", data);
    return {
      error: false,
      res: data,
    };
  } catch (error) {
    return {
      error: true,
      res: undefined,
    };
  }
};

export const  icoArray = [
  "0x5e623ccb3d79fb17accff11729ee6c23c73c1ec1",
  "0x74c7b102a5ebddfe5df75d8468a578ea6c61f20e",
  "0x4a3e1ee4191f66d541953daeafcecbb1d8574a94",
  "0x0985138c7cc36de22112638f8372685b3bb925d4",
  "0x4904d9a9428b433408eb870d82e28e822b9d1ce6",
  "0xa44b1a57c8fc9745da105187b9ec52db38ccf6e9",
  "0x7bdbc1b5887523068c93c5d7aef438b3e50620ea",
  "0x5cdadc5539676424eaf39d98b9729fcc140c5cec",
  "0xe4a58c4246d106b27c0d87c92eadcb410943272d",
];

export const getMultipleIco = async (icoArray) => {
  try {
    const icoDetailsPromises = icoArray.map(async (icoAddress) => {
      try {
        const icoDetails = await getIcoDetails(icoAddress);
        if (!icoDetails.error) {
          return icoDetails.res;
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    });

    const icoDetailsArray = await Promise.all(icoDetailsPromises);
    const filteredIcoDetailsArray = icoDetailsArray.filter((icoDetails) => icoDetails !== null);

    return filteredIcoDetailsArray;
  } catch (error) {
    return [];
  }
};

// (async () => {
//   const allIcoDetails = await getMultipleIco(icoArray);
//   console.log("all ico details",allIcoDetails);
// })();
