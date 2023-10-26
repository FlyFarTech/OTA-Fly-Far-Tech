import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
const FareDetails = () => {
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
                  Pax Type
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
                  Pax Count
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
                  Base Fare
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
                  TAX
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
                  Service Fee
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
                  Subtotal
                </TableCell>
                <TableCell align="center">02</TableCell>
                <TableCell align="center">02</TableCell>
                <TableCell align="center">01</TableCell>
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
              BDT 54,000
            </Typography>
            <Typography
              sx={{
                marginTop: "6px",
                color: "var(--grey-color)",
                fontSize: "12px",
              }}
            >
              BDT 4,000{" "}
            </Typography>
            <Typography
              sx={{
                marginTop: "6px",
                color: "var(--grey-color)",
                fontSize: "12px",
              }}
            >
              BDT 50,000
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FareDetails;
