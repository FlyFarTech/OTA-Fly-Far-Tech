import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { parseInt } from "lodash";
import React from "react";

const BookingPrice = ({ flightData }) => {
  const BookingPrice = styled(Box)({
    background: "var(--white-color)",

    paddingTop: "17px",
    paddingBottom: "36px",
    borderRadius: "5px",
  });

  const totalTaxAndBaseFare = flightData?.priceBreakdown?.reduce(
    (total, price) => {
      return total + (parseInt(price.Tax) + parseInt(price.baseFare));
    },
    0
  );

  return (
    <BookingPrice>
      <Container>
        <Box>
          <Typography sx={{ fontSize: "10.59px" }}>Total Payable</Typography>
          <Typography sx={{ fontSize: "20.36px", fontWeight: "600" }}>
            BDT 1{flightData?.clientPrice}
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: "var(--explore-more-color)",
          padding: "6px 13px",
          marginTop: "19px",
        }}
      >
        <Typography
          sx={{
            fontSize: "10.59px",
            color: "var(--purple-color)",
            fontWeight: "600",
          }}
        >
          {" "}
          Price Breakdown
        </Typography>
      </Box>

      <Container>
        {flightData?.priceBreakdown?.map((price) => (
          <Box sx={{ marginTop: "16px" }}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Typography sx={{ fontSize: "13.03px", fontWeight: "600" }}>
                  {price?.paxType} x{price?.paxCount}
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "13px", color: "var(--grey-color)" }}
                >
                  Base Fare x1
                </Typography>
                <Typography
                  sx={{ fontSize: "13px", color: "var(--purple-color)" }}
                >
                  {price?.baseFare}
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "13px", color: "var(--grey-color)" }}
                >
                  Tax x1
                </Typography>
                <Typography
                  sx={{ fontSize: "13px", color: "var(--purple-color)" }}
                >
                  {price?.Tax}
                </Typography>
              </li>
            </ul>
          </Box>
        ))}

        <Box sx={{ marginTop: "16px" }}>
          <ul style={{ listStyleType: "none" }}>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "var(--grey-color)" }}>
                Total Base & Tax
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "var(--purple-color)" }}
              >
                {totalTaxAndBaseFare}
              </Typography>
            </li>
          </ul>
        </Box>

        <Box sx={{ marginTop: "16px" }}>
          <ul style={{ listStyleType: "none" }}>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "var(--grey-color)" }}>
                Customer Invoice Total
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "var(--purple-color)" }}
              >
                {flightData?.clientPrice}
              </Typography>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "var(--grey-color)" }}>
                Discount
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "var(--purple-color)" }}
              >
                {flightData?.commission}
              </Typography>
            </li>

            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "var(--grey-color)" }}>
                Agent Invoice Total
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "var(--purple-color)" }}
              >
                {flightData?.price}
              </Typography>
            </li>

            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "23px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "var(--grey-color)",
                  fontWeight: "600",
                }}
              >
                Agent Saving
              </Typography>
              <Typography
                sx={{ fontSize: "17px", color: "var(--purple-color)" }}
              >
                BDT {flightData?.commission}
              </Typography>
            </li>
          </ul>
        </Box>
      </Container>
    </BookingPrice>
  );
};

export default BookingPrice;
