import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Web3 from "web3";

const initialState = {
  Wallet: null,
  tokenDetails: null,
  formTokenDetails:null,
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

const todoSlice = createSlice({
  name: "tokenCreator",
  initialState,
  reducers: {
    addTokenDetails: (state, action) => {
      state.tokenDetails = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTokenDetails.fulfilled, (state, action) => {
      state.tokenDetails = action.payload;
    });
    builder.addCase(fetchTokenDetails.rejected, (state, action) => {
      state.tokenDetails = null;
    });
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
