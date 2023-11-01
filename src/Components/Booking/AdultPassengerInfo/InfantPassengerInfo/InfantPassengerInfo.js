import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const InfantPassengerInfo = ({ index }) => {
  const PassengerInfo = styled(Box)({
    background: "var(--white-color)",
    paddingTop: "19px",
    paddingBottom: "26px",
    borderRadius: "5px",
    marginTop: "31px",
  });
  return (
    <div>
      <PassengerInfo>
        <Container>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "var(--black-color)",
              marginBottom: "15px",
            }}
          >
            Passenger #{index + 1},Infant
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "var(--purple-color)",
                  }}
                >
                  Mr
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "var(--purple-color)",
                  }}
                >
                  Mrs
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "var(--purple-color)",
                  }}
                >
                  Miss
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}></Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ marginBottom: "16px" }}>
                <input
                  type="text"
                  name="afName"
                  placeholder="Search By"
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
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <Box sx={{ marginBottom: "16px" }}>
                <input
                  type="text"
                  name="afName"
                  placeholder="FirstName"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    border: "1px solid var(--grey-color)",
                    paddingLeft: "14px",
                  }}
                />
              </Box>
              <Box sx={{ marginBottom: "16px" }}>
                <input
                  name="adob"
                  placeholder="Date Of Birth"
                  type="text"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    border: "1px solid var(--grey-color)",
                    paddingLeft: "14px",
                  }}
                />
              </Box>
              <Box>
                <input
                  name="apassNo"
                  placeholder="Passport Expiry Date"
                  type="text"
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
              <Box sx={{ marginBottom: "16px" }}>
                <input
                  type="text"
                  name="alName"
                  placeholder="LastName"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    paddingLeft: "14px",
                    border: "1px solid var(--grey-color)",
                  }}
                />
              </Box>
              <Box>
                <input
                  type="text"
                  name="apassNation"
                  placeholder="Nationality"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    paddingLeft: "14px",
                    border: "1px solid var(--grey-color)",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ marginBottom: "16px" }}>
                <input
                  type="text"
                  name="agender"
                  placeholder="Gender"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    paddingLeft: "14px",
                    border: "1px solid var(--grey-color)",
                  }}
                />
              </Box>
              <Box>
                <input
                  type="text"
                  name="apassNo"
                  placeholder="Passport Number"
                  style={{
                    width: "100%",
                    height: "37px",
                    outline: "none",
                    paddingLeft: "14px",
                    border: "1px solid var(--grey-color)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </PassengerInfo>
    </div>
  );
};

export default InfantPassengerInfo;
