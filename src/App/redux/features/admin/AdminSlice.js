import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../axios/AxiosInstace";

export const getTrendingData = createAsyncThunk(
  "admin/trendingData",
  async () => {
    try {
      const apiResponse = await axiosInstance.get("/admin/get-trending-data");
      return apiResponse;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const blockIco = createAsyncThunk("admin/blockIco", async () => {
  try {
    const apiResponse = await axiosInstance.get("/admin/get-trending-data");
    return apiResponse;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const serachIco = createAsyncThunk("admin/trendingData", async () => {
  try {
    const apiResponse = await axiosInstance.get("/admin/get-trending-data");
    return apiResponse;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const getIcoStatics = createAsyncThunk(
  "admin/trendingData",
  async () => {
    try {
      const apiResponse = await axiosInstance.get("/admin/get-trending-data");
      return apiResponse;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const blockAirdrop = createAsyncThunk(
  "admin/trendingData",
  async () => {
    try {
      const apiResponse = await axiosInstance.get("/admin/get-trending-data");
      return apiResponse;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const unblockAirdrop = createAsyncThunk(
  "admin/trendingData",
  async () => {
    try {
      const apiResponse = await axiosInstance.get("/admin/get-trending-data");
      return apiResponse;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const unblockIco = createAsyncThunk(
  "admin/trendingData",
  async () => {
    try {
      const apiResponse = await axiosInstance.get("/admin/get-trending-data");
      return apiResponse;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const changeTrendingData = createAsyncThunk(
  "admin/trendingData",
  async () => {
    try {
      const apiResponse = await axiosInstance.get("/admin/get-trending-data");
      return apiResponse;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);
