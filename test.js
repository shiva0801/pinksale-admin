const { checkErcApprovals } 
= require("./src/App/redux/utils/contractUtils");

const testFn = async() => {
  const data = await checkErcApprovals("0x184E42a758E6aA2f0768cDC0e4344A245ca165e9","0x0805361666f81954f1d8cc17a9d303f161934e84","0x7EdF9B6482B21DCF77996F60155DdC1f77b56bA6")
  console.log(data);
}

testFn();