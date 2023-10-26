import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const FarePolicy = () => {
  return (
    <Box sx={{ marginTop: "34px" }}>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                bgcolor: "var(--grey-color )",
                color: "var(--white-color)",

                borderBottom: "1px solid var(--white-color)",
                padding: "6px 16px",
              }}
            >
              <Typography sx={{ fontSize: "11px" }}>Policy Name </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box
              sx={{
                bgcolor: "var(--purple-color)",
                padding: "6px 0",
                paddingLeft: "131px !important",
              }}
            >
              <Typography
                sx={{ fontSize: "11px", color: "var(--white-color)" }}
              >
                Policy Details
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                bgcolor: "var(--grey-color )",
                color: "var(--white-color)",

                borderBottom: "1px solid var(--white-color)",
                padding: "6px 16px",
              }}
            >
              <Typography sx={{ fontSize: "11px" }}>Cancellation </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box
              sx={{
                bgcolor: "var(--white-color)",
                padding: "6px 0",
                paddingLeft: "131px !important",
                borderBottom: "1px solid var(--grey-color)",
              }}
            >
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Refund Amount = Paid Amount - Airline Cancellation Fee
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                bgcolor: "var(--grey-color )",
                color: "var(--white-color)",

                borderBottom: "1px solid var(--white-color)",
                padding: "6px 16px",
              }}
            >
              <Typography sx={{ fontSize: "11px" }}>Re-Issue</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box
              sx={{
                bgcolor: "var(--white-color)",
                padding: "6px 0",
                paddingLeft: "131px !important",
                borderBottom: "1px solid var(--grey-color)",
              }}
            >
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Re-issue Fee = Airline’s Fee + Fare Difference
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                bgcolor: "var(--grey-color )",
                color: "var(--white-color)",

                borderBottom: "1px solid var(--white-color)",
                padding: "6px 16px",
              }}
            >
              <Typography sx={{ fontSize: "11px" }}>Refund</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box
              sx={{
                bgcolor: "var(--white-color)",
                padding: "6px 0",
                paddingLeft: "131px !important",
                borderBottom: "1px solid var(--grey-color)",
              }}
            >
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Refund Fee = Airline’s Fee + Fare Difference
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                bgcolor: "var(--grey-color )",
                color: "var(--white-color)",

                borderBottom: "1px solid var(--white-color)",
                padding: "6px 16px",
              }}
            >
              <Typography sx={{ fontSize: "11px" }}>Void </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box
              sx={{
                bgcolor: "var(--white-color)",
                padding: "6px 0",
                paddingLeft: "131px !important",
                borderBottom: "1px solid var(--grey-color)",
              }}
            >
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Void Fee = Airline’s Fee + Fare Difference
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FarePolicy;
