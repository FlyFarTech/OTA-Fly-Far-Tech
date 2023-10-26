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
import React from "react";

const FareComission = () => {
  return (
    <Box sx={{ marginTop: "34px" }}>
      <TableContainer sx={{ boxShadow: "none", borderRadius: "0px" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "var(--purple-color)",
              }}
            >
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "var( --white-color)", fontSize: "11px" }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{ color: "var( --white-color)", fontSize: "11px" }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{ color: "var( --white-color)", fontSize: "11px" }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Customer Invoice
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">01</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Agent Invoice
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">5400</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  bgcolor: "var(--grey-color)",
                  color: "var(--white-color)",
                  fontSize: "11px",
                }}
              >
                Profit Amount
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FareComission;
