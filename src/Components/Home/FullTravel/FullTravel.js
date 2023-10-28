import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Blank from "./blank.png";
const FullTravel = () => {
  return (
    <>
      <Box
        sx={{ marginTop: "144px !important", margin: "0 auto", width: "70%" }}
      >
        <Grid container spacing={8}>
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
                <span style={{ color: "var(--purple-color)" }}>
                  Full Travel{" "}
                </span>
                OTA Portal
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "var(--dark-color)",
                }}
              >
                More than 750+ airlines including GDS carriers and low cost
                <br></br>
                carriers (LCCs) connecting various destinations in 170+<br></br>{" "}
                countries.
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "var(--dark-color)",
                  fontWeight: "700",
                  marginTop: "26px",
                }}
              >
                Benefits of Fly Far Tech Flights API:
              </Typography>

              <Box sx={{ marginTop: "25px", textAlign: "left" }}>
                <Typography sx={{ fontWeight: "400", fontSize: "13px" }}>
                  Access to best net rates and availability
                </Typography>
                <Typography
                  sx={{ marginTop: "6px", fontWeight: "400", fontSize: "13px" }}
                >
                  Fast, Robust and scalable backend
                </Typography>
                <Typography
                  sx={{ marginTop: "6px", fontWeight: "400", fontSize: "13px" }}
                >
                  Auto confirmation feature for select flights
                </Typography>
                <Typography
                  sx={{ marginTop: "6px", fontWeight: "400", fontSize: "13px" }}
                >
                  Fast and lean JSON based XML code
                </Typography>
                <Typography
                  sx={{ marginTop: "6px", fontWeight: "400", fontSize: "13px" }}
                >
                  Multiple GDS and LCCs aggregator
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img src={Blank} style={{ width: "100%" }} alt="blank" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FullTravel;
