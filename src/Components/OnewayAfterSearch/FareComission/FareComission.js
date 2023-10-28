import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const FareComission = ({ flight }) => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: "0px" }}
      >
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ bgcolor: "var(--purple-color)" }}>
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Description
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "var(--white-color)", fontSize: "11px" }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Customer Invoice
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "11px", color: "var(--grey-color)" }}
              >
                {flight?.clientPrice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Agent Invoice
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "11px", color: "var(--grey-color)" }}
              >
                {flight?.price}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Profit Amount
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "11px", color: "var(--grey-color)" }}
              >
                {flight.commission}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FareComission;
