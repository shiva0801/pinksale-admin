import { CardActions, Grid } from "@mui/material";
import React from "react";
import {
  CustomButton,
  Heading,
  Text,
  TredingCard,
} from "./toptrendingcard.styled";
import { trendingdata } from "./data";
import TrendingModal from "./TrendingModal";

const TopTrendingCard = () => {
  const [open, setOpen] = React.useState(false);
  const handlerTrendingModal = () => {
    setOpen(true);
  };
  return (
    <>
      <TrendingModal open={open} setOpen={setOpen} />
      <Grid container spacing={5} sx={{ paddingInline: 10 }}>
        {trendingdata &&
          trendingdata.map((cardData, index) => (
            <Grid item xs={12} md={6} lg={3} key={index} p={0}>
              <TredingCard
                sx={{
                  padding: { md: "15px 0px", xs: "15px 0" },
                  margin: { xs: "auto" },
                }}
              >
                <Heading component="p">{cardData?.amount}</Heading>
                <Text component="p">{cardData?.description}</Text>
                <CardActions>
                  <CustomButton size="small" variant="outlined">
                    View Ico Statics
                  </CustomButton>
                  <CustomButton
                    onClick={handlerTrendingModal}
                    size="small"
                    variant="outlined"
                  >
                    Edit
                  </CustomButton>
                </CardActions>
              </TredingCard>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default TopTrendingCard;
