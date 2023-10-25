import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { ReactComponent as Lines } from "./line.svg";
import EastIcon from "@mui/icons-material/East";
import ErrorIcon from "@mui/icons-material/Error";
const OnewayflightBox = () => {
  let OnewayflightBox = styled(Box)({
    backgroundColor: "var(--white-color)",
  });
  return (
    <OnewayflightBox>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={2.5}>
            <Box>
              <Box>
                <img src="https://i.ibb.co/znB5qwg/2A-1.png" />
              </Box>
              <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                Air Astra
              </Typography>
              <Typography sx={{ fontSize: "11px" }}>
                <span style={{ color: "var(--grey-color)" }}>BG-737</span>,{" "}
                <span style={{ color: "var(--purple-color)" }}>
                  Boeing 737-800
                </span>{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={1.2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <AirplanemodeActiveIcon
                sx={{
                  transform: "rotate(90deg)",
                  fontSize: "34px",
                  color: "var(--purple-color)",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "25px" }}>DAC</Typography>
                <Typography sx={{ fontSize: "25px" }}>JFK</Typography>
              </Box>
              <Lines style={{ width: "100%" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "18px",
                }}
              >
                <Typography
                  sx={{ fontSize: "11px", color: "var(--grey-color)" }}
                >
                  07: 30 AM{" "}
                </Typography>
                <Typography
                  sx={{ fontSize: "11px", color: "var(--grey-color)" }}
                >
                  07: 30 AM{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={1.3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                border: "1px solid var(--grey-color)",
                justifyContent: "start",
                alignItems: "center",
                gap: "5px",
                borderRadius: "10px",
                padding: "2px 3px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AccessTimeFilledIcon
                  sx={{ fontSize: "17px", color: "var(--grey-color)" }}
                ></AccessTimeFilledIcon>
                <Typography
                  sx={{ fontSize: "10px", color: "var(--grey-color)" }}
                >
                  {" "}
                  1 H 35 Min
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: "28px" }}>৳45,500</Typography>
              <Box>
                <Button
                  endIcon={<EastIcon />}
                  variant="contained"
                  sx={{
                    marginTop: "17px",
                    bgcolor: "var(--purple-color)",
                    width: "100%",
                    fontSize: "15px",
                    textTransform: "capitalize",
                    boxShadow: "none",
                    borderRadius: "30px",
                  }}
                >
                  Select
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Typography
              sx={{
                fontSize: "12px",
                color: "var(--grey-color)",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <ErrorIcon sx={{ fontSize: "13.58px" }} />{" "}
              <span>Non Refundable</span>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "12px",
                textDecoration: "underline",
                color: "var(--purple-color)",
              }}
            >
              More Details
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}></Grid>
        </Grid>
      </Container>
    </OnewayflightBox>
  );
};

export default OnewayflightBox;
