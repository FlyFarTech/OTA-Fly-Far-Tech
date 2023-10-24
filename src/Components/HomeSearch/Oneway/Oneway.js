import React, { useState } from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import flightData from "../flightData.js";
import SendIcon from "@mui/icons-material/Send";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
const Oneway = ({ setSelectedRadioValue }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the flight data as the user types
  const searchResults = flightData.filter((flight) =>
    flight.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [checkInDate, setCheckInDate] = useState(dayjs(new Date()));

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} sx={{ position: "relative" }}>
          <Box
            sx={{
              bgcolor: "var( --light-purple-color)",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "40px",
              minHeight: "70px",
              paddingLeft: "17px",
              paddingTop: "7px",
              borderRadius: "5px",
              border: "1px solid var(--purple-color)",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "var(--purple-color)",
                }}
              >
                Departure At
              </Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
                DAC
              </Typography>
            </Box>
            <Box>
              <ConnectingAirportsIcon
                sx={{ fontSize: "45px", bgcolor: "none" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "var(--purple-color)",
                }}
              >
                Arrival At
              </Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
                DAC
              </Typography>
            </Box>
          </Box>
          {/* departure search items */}
          <Box
            sx={{
              bgcolor: "var(--white-color)",
              width: "96%",
              position: "absolute",
              zIndex: "50",
              boxShadow: 2,
            }}
          >
            <Box>
              <input
                type="text"
                placeholder="Search an airport.."
                value={searchQuery}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid var(--grey-color)",
                  paddingLeft: "10px",
                  paddingTop: "13px",
                  paddingBottom: "13px",
                }}
              />
            </Box>

            {searchResults.slice(0, 5).map((result, index) => (
              <Box
                key={index}
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
                  <Typography sx={{ fontSize: "13px" }}>
                    {" "}
                    {result.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    {" "}
                    {result.Address}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    bgcolor: "var(--purple-color)",
                    color: "var(--white-color)",
                    padding: "3px 7px",
                    borderRadius: "3px",
                  }}
                >
                  {result.code}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={2.5} sx={{ position: "relative" }}>
          {" "}
          {/* check in data */}
          <Box
            sx={{
              bgcolor: "var( --light-purple-color)",
              paddingTop: "8px",
              paddingLeft: "18px",
              minHeight: "70px",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "var(--purple-color)",
                fontWeight: "600",
              }}
            >
              Travel Date
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              Wed, 06 Oct 23
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bgcolor: "var(--white-color)",
              boxShadow: 2,
              zIndex: "50",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={checkInDate}
                onChange={(date) => {
                  setCheckInDate(date);
                }}
              />
            </LocalizationProvider>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={2.5}>
          {" "}
          <Box
            onClick={() => setSelectedRadioValue("Round Way")}
            sx={{
              bgcolor: "var( --light-purple-color)",
              paddingTop: "8px",
              paddingLeft: "18px",
              minHeight: "70px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "var(--purple-color)",
                fontWeight: "600",
              }}
            >
              Add Return
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              [+]
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sx={{ position: "relative" }}>
          {" "}
          <Box
            sx={{
              bgcolor: "var( --light-purple-color)",
              minHeight: "70px",
              paddingLeft: "18px",
              paddingTop: "7px",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "var(--purple-color)",
                fontWeight: "600",
              }}
            >
              Passenger & Class
            </Typography>

            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              1 Passenger & Economy
            </Typography>
          </Box>
          {/* passenger count */}
          <Box
            sx={{
              boxShadow: 2,
              bgcolor: "var(--white-color)",
              padding: "10px",
              position: "absolute",
              zIndex: "50",
              marginTop: "5px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "var(--passenger-color)",
                }}
              >
                Passenger
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  marginTop: "9px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { md: "row", xs: "column" },
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "bold" }}>0 Adult </span>
                    <br></br>
                    <span
                      style={{
                        color: "var( --passenger-color)",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      12+ yrs
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "20px",
                      minHeight: "20px",
                      bgcolor: "var( --purple-color)",
                    }}
                  >
                    +
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "20px",
                      minHeight: "20px",
                      marginLeft: "8px",
                      bgcolor: "var( --purple-color)",
                    }}
                  >
                    -
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { md: "row", xs: "column" },
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "bold" }}>0 Children</span>{" "}
                    <br></br>
                    <span
                      style={{
                        color: "var( --passenger-color)",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      2- less than 12 yrs
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "20px",
                      minHeight: "20px",
                      bgcolor: "var( --purple-color)",
                    }}
                  >
                    +
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "20px",
                      minHeight: "20px",
                      marginLeft: "8px",
                      bgcolor: "var( --purple-color)",
                    }}
                  >
                    -
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { md: "row", xs: "column" },
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "bold" }}>Infant</span> <br></br>
                    <span
                      style={{
                        color: "var( --passenger-color)",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      0 - 23 month
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "20px",
                      minHeight: "20px",
                      bgcolor: "var( --purple-color)",
                    }}
                  >
                    +
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "20px",
                      minHeight: "20px",
                      marginLeft: "8px",
                      bgcolor: "var( --purple-color)",
                    }}
                  >
                    -
                  </Button>
                </Box>
              </Box>
            </Box>
            <hr style={{ marginTop: "20px" }}></hr>
            <Box sx={{ marginTop: "6px" }}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Economy"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "18px",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>Economy</Typography>
                    }
                  />
                  <FormControlLabel
                    value="Business"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "18px",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        Business
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="First Class"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "18px",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        First Class
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="Premium Economy"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "18px",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        Premium Economy
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                sx={{
                  background: "var(--purple-color)",
                  color: "var(--white-color)",
                  textTransform: "capitalize",
                  padding: "5px 30px",
                }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: "var(--purple-color)", fontSize: "50px" }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "var(--grey-color)",
                    fontWeight: "500",
                  }}
                >
                  Check Round way Split Search{" "}
                </Typography>
              }
            />
          </FormGroup>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              bgcolor: "var(--purple-color)",
              padding: "11px 34px",
              textTransform: "capitalize",
              fontWeight: "700",
              fontSize: "15px",
            }}
            startIcon={<SendIcon sx={{ transform: "rotate(-50deg)" }} />}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Oneway;
