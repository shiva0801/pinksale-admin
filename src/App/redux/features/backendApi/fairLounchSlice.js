import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Web3 from "web3";

const initialState = {
  tokenDetails: null,
  lounchpadForm_1_Enabled: false,
  lounchpadForm_2_Enabled: false,
  lounchpadForm_3_Enabled: false,
  progressBar:0,
  lounchPadData: {
    name: null,
    symbol: null,
    totalSupply: null,
    contractAddress: null,
    presaleRate:null,
    whitelist:false,
    softcap:null,
    hardcap:null,
    minBuy:null,
    maxBuy:null,
    refundType:null,
    router:null,
    liquidity:null,
    listingRate:null,
    startTime:null,
    endTime:null,
    liquidityLock:null
  },
  reviewDataEnabled: false,
};

export const fetchTokenDetails = createAsyncThunk(
  "todo/fetchTokenDetails",
  async (tokenAddress, thunkAPI) => {
    try {
      const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");

      const contract = new web3.eth.Contract(
        [
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
        ],
        tokenAddress
      );

      const name = await contract.methods.name().call();
      const symbol = await contract.methods.symbol().call();
      const decimals = await contract.methods.decimals().call();

      return {
        name,
        symbol,
        decimals,
      };
    } catch (error) {
      console.log("Error fetching token details:", error);
      throw error;
    }
  }
);

const lounchPad = createSlice({
  name: "Lounchpad",
  initialState,
  reducers: {
    validateForm1: (state, action) => {
      state.lounchpadForm_2_Enabled = false;
      state.progressBar = 1;
      state.lounchpadForm_1_Enabled = true;
      state.lounchpadForm_3_Enabled = false;
    },
    validateForm2: (state, action) => {
      state.progressBar = 2;
      state.lounchpadForm_2_Enabled = true;
      state.lounchpadForm_1_Enabled = false;
      state.lounchpadForm_3_Enabled = false;
    },
    validateForm3: (state, action) => {
      state.progressBar = 3;
      state.lounchpadForm_2_Enabled = false;
      state.lounchpadForm_1_Enabled = false;
      state.lounchpadForm_3_Enabled = true;
    },
    addLounchPadData: (state, action) => {
      const newData = action.payload;
      state.lounchPadData = { ...state.lounchPadData, ...newData };
    },     
    clearAllForm: (state, action) => {
      state.progressBar = 0;
      state.lounchpadForm_2_Enabled = false;
      state.lounchpadForm_1_Enabled = false;
      state.lounchpadForm_3_Enabled = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTokenDetails.fulfilled, (state, action) => {
      state.tokenDetails = action.payload;
      const newData = action.payload;
      state.lounchPadData = { ...state.lounchPadData, ...newData };
    });
    builder.addCase(fetchTokenDetails.rejected, (state, action) => {
      state.tokenDetails = null;
    });
  },
});

export const { validateForm1, validateForm2, validateForm3, clearAllForm , addLounchPadData} =
  lounchPad.actions;
export default lounchPad.reducer;
