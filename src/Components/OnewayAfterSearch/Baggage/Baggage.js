import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const Baggage = () => {
  return (
    <>
      <Box sx={{ marginTop: "34px" }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: "0px" }}
        >
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
                  Passenger Type
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "var( --white-color)", fontSize: "11px" }}
                >
                  Adult
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "var( --white-color)", fontSize: "11px" }}
                >
                  Child
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "var( --white-color)", fontSize: "11px" }}
                >
                  Infant
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
                  Baggage
                </TableCell>
                <TableCell align="center">02</TableCell>
                <TableCell align="center">02</TableCell>
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
                  Check In
                </TableCell>
                <TableCell align="center">02</TableCell>
                <TableCell align="center">02</TableCell>
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
                  Cabin
                </TableCell>
                <TableCell align="center">02</TableCell>
                <TableCell align="center">02</TableCell>
                <TableCell align="center">01</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Baggage;
