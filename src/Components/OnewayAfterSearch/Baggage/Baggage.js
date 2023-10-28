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

const Baggage = ({ flight }) => {
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
                {flight?.priceBreakdown?.map((data, index) => (
                  <TableCell
                    index={index}
                    align="center"
                    sx={{ color: "var( --white-color)", fontSize: "11px" }}
                  >
                    {data?.paxType}
                  </TableCell>
                ))}
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
                {flight?.priceBreakdown.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--grey-color)", fontSize: "11px" }}
                  >
                    {flight.segments.slice(0, 1)[0].bags}
                  </TableCell>
                ))}
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
                {flight?.priceBreakdown?.map((data, index) => (
                  <TableCell
                    index={index}
                    align="center"
                    sx={{ color: "var( --grey-color)", fontSize: "11px" }}
                  >
                    7 KG
                  </TableCell>
                ))}
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
                {flight?.priceBreakdown.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--grey-color)", fontSize: "11px" }}
                  >
                    {flight.segments.slice(0, 1)[0].cabinCode}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Baggage;
