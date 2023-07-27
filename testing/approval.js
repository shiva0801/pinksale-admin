const Web3 = require('web3');
const contractAbi = [
  // Replace with the ABI of your ERC20 contract
  {
    constant: false,
    inputs: [
      {
        name: '_spender',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545'); // Replace with your Ethereum provider URL

// Function to approve an address to spend ERC20 tokens
async function approveERC20(targetAddress, tokenAddress, amount) {
  const contract = new web3.eth.Contract(contractAbi, tokenAddress);
  const account = web3.eth.accounts.privateKeyToAccount('314db7b7bece4d4684f17d7df24ed88c64a907159da856cfe7020d847cfd62ed'); // Replace with the private key of the account making the approval

  const gasPrice = await web3.eth.getGasPrice();
  const gasLimit = await contract.methods.approve(targetAddress, amount).estimateGas({ from: account.address });

  const rawTransaction = {
    from: account.address,
    to: tokenAddress,
    gasPrice,
    gasLimit,
    data: contract.methods.approve(targetAddress, amount).encodeABI(),
    nonce: await web3.eth.getTransactionCount(account.address),
  };

  const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, account.privateKey);
  const approvalTx = web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  return approvalTx;
}

// Usage example
const targetAddress = '0x468286AFa5A82faC3396446ca09e30c19a0e4c31'; // Replace with the address you want to approve
const tokenAddress = '0x8e5c5E2b4614deb64b062b96a7E09e65D5c96183'; // Replace with the address of your ERC20 contract
const amount = '10000000000000000000'; // Replace with the amount of tokens to approve

approveERC20(targetAddress, tokenAddress, amount)
  .then((transaction) => {
    console.log('Approval successful!');
    console.log('Transaction hash:', transaction.transactionHash);
  })
  .catch((error) => {
    console.error('Approval failed:', error);
  });
