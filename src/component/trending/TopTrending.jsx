import { Box } from "@mui/material";
import React from "react";
import TopTrendingCard from "./TopTrendingCard";
import CardItemSection from "../LaunchpadList/CardItemSection";
import AdvancedMode from "../LaunchpadList/AdvancesMode/AdvancedMode";
import { Tabs } from "antd";
const TopTrending = () => {
  const item = [
    {
      label: `All launchpads`,
      key: "656",
      children: <CardItemSection />,
    },
    {
      label: `Advanced Mode`,
      key: "666",
      children: <AdvancedMode />,
    },
  ];
  return (
    <Box>
      <div className="container">
        <div className="sub_container Current_Presales_section">
          <div className="heading">
            <h1>Top Trendings</h1>
          </div>
        </div>
      </div>

      <Box sx={{ marginBottom: 10 }}>
        <TopTrendingCard />
      </Box>
    </Box>
  );
};

export default TopTrending;
