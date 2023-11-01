import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const PassengerContactInfo = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "39px",
          bgcolor: "var(--white-color)",
          borderRadius: "5px",
          paddingTop: "19px",
          paddingBottom: "37px",
        }}
      >
        <Container>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "600", marginBottom: "17px" }}
          >
            Passenger Contact Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <Box>
                <input
                  type="email"
                  name="email"
                  placeholder="Passenger Email"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    border: "1px solid var(--grey-color)",
                    paddingLeft: "14px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box>
                <input
                  type="number"
                  name="Phone"
                  placeholder="Passenger Phone"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    border: "1px solid var(--grey-color)",
                    paddingLeft: "14px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PassengerContactInfo;
