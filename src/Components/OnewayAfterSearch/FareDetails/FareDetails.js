import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const FareDetails = ({ flight }) => {
  const calculateSubtotal = (price) => {
    return (
      parseInt(price.paxCount) *
        (parseInt(price.baseFare) +
          parseInt(price.Tax) +
          parseInt(price.ServiceFee)) || 0
    );
  };

  const grandTotal = flight?.priceBreakdown.reduce((total, price) => {
    return total + calculateSubtotal(price);
  }, 0);

  const totalDiscount = flight?.priceBreakdown.reduce((total, price) => {
    return total + parseInt(price.Discount) || 0;
  }, 0);

  const agentPayable = grandTotal - totalDiscount;
  return (
    <>
      <Box sx={{ marginTop: "34px" }}>
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
                  Pax Type
                </TableCell>
                {flight?.priceBreakdown?.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--white-color)", fontSize: "11px" }}
                  >
                    {price?.paxType}
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
                  Pax Count
                </TableCell>
                {flight?.priceBreakdown?.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--grey-color)", fontSize: "11px" }}
                  >
                    {parseInt(price?.paxCount).toLocaleString()}
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
                  Base Fare
                </TableCell>
                {flight?.priceBreakdown?.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--grey-color)", fontSize: "11px" }}
                  >
                    {parseInt(price?.baseFare).toLocaleString()}
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
                  TAX
                </TableCell>
                {flight?.priceBreakdown?.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--grey-color)", fontSize: "11px" }}
                  >
                    {parseInt(price?.Tax).toLocaleString()}
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
                  Service Fee
                </TableCell>
                {flight?.priceBreakdown?.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--grey-color)", fontSize: "11px" }}
                  >
                    {parseInt(price?.ServiceFee).toLocaleString()}
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
                  Subtotal
                </TableCell>
                {flight?.priceBreakdown?.map((price, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{ color: "var(--grey-color)", fontSize: "11px" }}
                  >
                    {calculateSubtotal(price).toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "14px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "12px", color: "var(--grey-color)" }}>
              <i> Grand Total or Customer Total</i>
            </Typography>
            <Typography
              sx={{
                marginTop: "6px",
                fontSize: "12px",
                color: "var(--grey-color)",
              }}
            >
              <i>Discount</i>{" "}
            </Typography>
            <Typography
              sx={{
                marginTop: "6px",
                fontSize: "12px",
                color: "var(--grey-color)",
              }}
            >
              <i>Agent Payable</i>
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "12px", color: "var(--grey-color)" }}>
              BDT {grandTotal.toLocaleString()}
            </Typography>
            <Typography
              sx={{
                marginTop: "6px",
                color: "var(--grey-color)",
                fontSize: "12px",
              }}
            >
              BDT {totalDiscount.toLocaleString()}
            </Typography>
            <Typography
              sx={{
                marginTop: "6px",
                color: "var(--grey-color)",
                fontSize: "12px",
              }}
            >
              BDT {agentPayable.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FareDetails;
