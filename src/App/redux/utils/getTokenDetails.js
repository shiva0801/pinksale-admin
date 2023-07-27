import Web3 from "web3";
import contractAbi from "../../Blockchain/abi/erc20Contract.json";

export const getTokenDetails = async (tokenAddress) => {
  try {
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");

    const contract = new web3.eth.Contract(contractAbi, tokenAddress);

    const name = await contract.methods.name().call();
    const symbol = await contract.methods.symbol().call();
    const decimals = await contract.methods.decimals().call();

    const data = {
      tokenAddress: tokenAddress,
      name: name,
      symbol: symbol,
      decimals: decimals,
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
