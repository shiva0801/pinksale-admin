import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  Select } from "antd";
import TopTrendingCard from "../trending/TopTrendingCard";
import { getMultipleIco, icoArray } from "../../App/redux/utils/contractUtils";

const PlatformStatistics = () => {
  

  const { Option } = Select;

  const [icoData, seticoData] = useState(null);
  const [val, setVal] = useState("Not Selected");
  // const hendleActive = (val) => {
  //     setActive(val);
  // };
  const handleChange = (labelValue) => {
    setVal(labelValue);
  };

  const getData = async () => {
    const data = await getMultipleIco(icoArray);
    console.log("here is ico aaray", data);
    seticoData(data);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const labels = ["Change Network"];
  const filterdata = [
    "Polygon Testnet",
    "Bsc Testnet",
    "Binance Smart Chain",
    "Ethereum Mainnet",
    "Polygon Mainnet",
  ];

  return (
    <Box>
      <Box
        className="main_input_box"
        sx={{ marginBlock: "20px", padding: "0 70px" }}
      >
        <div className="fillterVal">
          {labels.map((label) => (
            <div className="subFillterVal">
              <label style={{ textTransform: "capitalize" }}>{label}</label>
              <Select value={val} onChange={handleChange}>
                {filterdata.map((filter) => (
                  <Option value={filter}>{filter}</Option>
                ))}
              </Select>
            </div>
          ))}
        </div>
      </Box>

      <Box sx={{ marginBottom: 10 }}>
        <TopTrendingCard />
      </Box>
    </Box>
  );
};

export default PlatformStatistics;
