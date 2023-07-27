import BnbIcon from "../../Images/BSC.png";

export const GetChainConfig = (chainId) => {
  const chainConfig = {
    97: {
      icon: BnbIcon,
      name: "Bsc Testnet",
      explorer: "https://testnet.bscscan.com",
    },
  };
  return chainConfig[chainId];
};


