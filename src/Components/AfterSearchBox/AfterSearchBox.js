import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import flightData from "./flightData.js";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const AfterSearchBox = () => {
  const [selectedRadioValue, setSelectedRadioValue] = useState("One Way");
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const handleRadioChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the flight data as the user types
  const searchResults = flightData.filter((flight) =>
    flight.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [isToggle, setIsToggle] = useState(false);
  return (
    <Box
      sx={{
        bgcolor: "var(--white-color)",
        borderTop: "1px solid var(--grey-color)",
        paddingTop: "14px",
        paddingBottom: "21px",
      }}
    >
      <Container>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={selectedRadioValue}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="One Way"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--purple-color)",
                    },
                  }}
                />
              }
              sx={{ color: "var( --grey-color)" }}
              label={
                <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
                  One Way
                </Typography>
              }
            />
            <FormControlLabel
              value="Round Way"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--purple-color)",
                    },
                  }}
                />
              }
              sx={{ color: "var( --grey-color)" }}
              label={
                <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
                  Round Way
                </Typography>
              }
            />
            <FormControlLabel
              value="Multi City"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--purple-color)",
                    },
                  }}
                />
              }
              sx={{ color: "var( --grey-color)" }}
              label={
                <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
                  Multi City
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ marginTop: "17px", position: "relative" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={2.4} sx={{ position: "relative" }}>
              <Box
                sx={{
                  border: "1px solid var(--grey-color)",
                  paddingLeft: "10px",
                  paddingTop: "8px",
                  paddingBottom: "15px",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "var(--grey-color)",
                    fontWeight: "500",
                  }}
                >
                  From
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12.5px",
                    fontWeight: "700",
                    color: "var(--purple-color)",
                  }}
                >
                  Dhaka, Hazrat Shajalal Intl Airport
                </Typography>
              </Box>

              <Box
                sx={{
                  bgcolor: "var(--white-color)",
                  position: "absolute",
                  width: "100%",
                  paddingBottom: "5px",
                }}
              >
                <input
                  type="text"
                  placeholder="Search airport"
                  value={searchQuery}
                  style={{
                    width: "100%",
                    border: "none",
                    paddingLeft: "10px",
                    background: "transparent",
                    borderBottom: "1px solid var(--grey-color)",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    outline: "none",
                  }}
                  onChange={handleInputChange}
                />
                {searchResults.slice(0, 5).map((result) => (
                  <Box
                    key={result.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid var(--grey-color)",
                      padding: "0 10px",
                      marginTop: "5px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: "13px", color: "var(--purple-color)" }}
                      >
                        {result.Address}
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        {result.name}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "11.5px" }}>
                      {result?.code}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Box
              onClick={() => setIsToggle(!isToggle)}
              sx={{
                height: "30.8px",
                width: "30.8px",
                borderRadius: "50%",
                bgcolor: "var(--purple-color)",
                position: "absolute",
                left: "18.5%",
                top: "30%",
                cursor: "pointer",
              }}
            ></Box>
            <Grid item xs={12} md={6} lg={2.4}>
              <Box
                sx={{
                  border: "1px solid var(--grey-color)",
                  paddingLeft: "14px",
                  paddingTop: "8px",
                  paddingBottom: "15px",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "var(--grey-color)",
                    fontWeight: "500",
                  }}
                >
                  To
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12.5px",
                    fontWeight: "700",
                    color: "var(--purple-color)",
                  }}
                >
                  Dhaka, Hazrat Shajalal Intl Airport
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={2.1}>
              <Box
                sx={{
                  border: "1px solid var(--grey-color)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "8px",
                  paddingBottom: "15px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "var(--grey-color)",
                      fontWeight: "500",
                    }}
                  >
                    Journey Date
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12.5px",
                      fontWeight: "700",
                      color: "var(--purple-color)",
                    }}
                  >
                    Wed, 16 Aug 2022
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: "17.36px", color: "var(--purple-color)" }}
                  />
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "17.36px", color: "var(--purple-color)" }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={2.1}>
              <Box
                sx={{
                  border: "1px solid var(--grey-color)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "8px",
                  paddingBottom: "15px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "var(--grey-color)",
                      fontWeight: "500",
                    }}
                  >
                    Arrival Date
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12.5px",
                      fontWeight: "700",
                      color: "var(--purple-color)",
                    }}
                  >
                    Wed, 16 Aug 2022
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: "17.36px", color: "var(--purple-color)" }}
                  />
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "17.36px", color: "var(--purple-color)" }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={2.2}>
              <Box
                sx={{
                  border: "1px solid var(--grey-color)",
                  paddingLeft: "10px",
                  paddingTop: "8px",
                  paddingBottom: "15px",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "var(--grey-color)",
                    fontWeight: "500",
                  }}
                >
                  Traveler & Class
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12.5px",
                    fontWeight: "700",
                    color: "var(--purple-color)",
                  }}
                >
                  1 Traveler & Economy
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={0.8}>
              <Box sx={{ height: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "var(--dark-color)",
                    height: "100%",
                    boxShadow: "none",
                  }}
                >
                  <SearchIcon sx={{ color: "var(--white-color)" }} />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AfterSearchBox;
