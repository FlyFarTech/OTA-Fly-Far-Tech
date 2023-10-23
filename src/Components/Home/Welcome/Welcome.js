import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Plane from "./plane.png";
const Welcome = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "67px" }}>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "700",
              color: "var(--dark-color)",
            }}
          >
            Welcome
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "45px" },
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          <span style={{ color: "var(--purple-color)" }}>
            Explore Our Booking Engine & Let's Build<br></br> Your Engine With
          </span>{" "}
          <span style={{ color: "var(--dark-color)" }}> Fly Far Tech.</span>
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "54px" }}>
        <img src={Plane} alt="plane" style={{ width: "100%" }} />
      </Box>
    </Container>
  );
};

export default Welcome;
