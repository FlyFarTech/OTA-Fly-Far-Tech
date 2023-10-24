import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const AirSearchFilter = () => {
  const AirSearchFilter = styled(Box)({
    backgroundColor: "var(--white-color)",
    paddingTop: "18px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "5px",
  });

  return (
    <>
      <AirSearchFilter>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Air Search Filter
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              color: "var(--purple-color)",
              cursor: "pointer",
            }}
          >
            Reset All
          </Typography>
        </Box>
        {/* selected options area Start */}
        <Box></Box>
        {/* selected options area End  */}

        {/* Price Sliderarea Start */}
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Price Slider
          </Typography>
          <Box sx={{ width: "100%" }}></Box>
        </Box>
        {/* Price Slider area End  */}

        {/* sTOP area Start */}
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Stops
          </Typography>
        </Box>
        {/* sTOP  area End  */}

        {/* Fare Type area Start */}
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Fare Type
          </Typography>
        </Box>
        {/* Fare Type  area End  */}

        {/* Onward Depart Time area Start */}
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Onward Depart Time
          </Typography>
        </Box>
        {/* Onward Depart Time  area End  */}

        {/* Onward Arrival Timearea Start */}
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Onward Arrival Time
          </Typography>
        </Box>
        {/* Onward Arrival Time area End  */}

        {/* Baggage area Start */}

        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Baggage
          </Typography>
        </Box>

        {/* Baggage area End  */}

        {/* Airlines area Start */}
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Airlines
          </Typography>
        </Box>
        {/* Airlines area End  */}

        {/* Layover Time area Start */}
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
            Layover Time
          </Typography>
        </Box>
        {/*Layover Time area End  */}
      </AirSearchFilter>
    </>
  );
};

export default AirSearchFilter;
