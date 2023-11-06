import { Box } from "@mui/material";
import React from "react";
import TopTrendingCard from "./TopTrendingCard";


const TopTrending = () => {
  
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
