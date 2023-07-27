import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Web3 from "web3";

const initialState = {
  tokenDetails: null,
  lounchPadData: null,
  fair_lounchPadData: null,
  dutch_lounchPadData: null,
  sunbcription_lounchPadData: null,
  private_lounchPadData: null,
  multisender: null,
  airdrop: null,
  locker: null,
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
  name: "LounchpadForm",
  initialState,
  reducers: {
    addLounchPadData: (state, action) => {
      const newData = action.payload;
      state.lounchPadData = { ...state.lounchPadData, ...newData };
    },
    addFairLounchPadData: (state, action) => {
      const newData = action.payload;
      state.fair_lounchPadData = { ...state.fair_lounchPadData, ...newData };
    },
    addDutchLounchPadData: (state, action) => {
      const newData = action.payload;
      state.dutch_lounchPadData = { ...state.dutch_lounchPadData, ...newData };
    },
    addSubscriptionLounchPadData: (state, action) => {
      const newData = action.payload;
      state.sunbcription_lounchPadData = {
        ...state.sunbcription_lounchPadData,
        ...newData,
      };
    },
    addPrivateLounchPadData: (state, action) => {
      const newData = action.payload;
      state.private_lounchPadData = {
        ...state.private_lounchPadData,
        ...newData,
      };
    },
    addMultisenderData: (state, action) => {
      const newData = action.payload;
      state.multisender = { ...state.multisender, ...newData };
    },
    addAirdrop: (state, action) => {
      const newData = action.payload;
      state.airdrop = { ...state.airdrop, ...newData };
    },
    addLockerData: (state, action) => {
      const newData = action.payload;
      state.locker = { ...state.locker, ...newData };
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

export const {
  addLounchPadData,
  addFairLounchPadData,
  addDutchLounchPadData,
  addSubscriptionLounchPadData,
  addPrivateLounchPadData,
} = lounchPad.actions;
export default lounchPad.reducer;
