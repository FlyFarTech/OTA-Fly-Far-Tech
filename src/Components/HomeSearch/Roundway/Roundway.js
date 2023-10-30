import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  ClickAwayListener,
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
import { ReactComponent as Front } from "./../front.svg";
import { ReactComponent as Back } from "./../back.svg";

import { useNavigate } from "react-router-dom";
const Roundway = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the flight data as the user types
  const searchResults = flightData.filter((flight) =>
    flight.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // value area

  const [departureCode, setDepartureCode] = useState("DAC");
  const [departureAddress, setDepartureAddress] = useState("Dhaka,BANGLADESH");
  const [arrivalAddress, setArrivalAddress] = useState(
    "Cox's Bazar,Bangladesh"
  );
  const [arrivalCode, setArrivalCode] = useState("CXB");
  const [depCode, setDepCode] = useState("");
  const [arrCode, setArrCode] = useState("");
  const [checkInDate, setCheckInDate] = useState(dayjs(new Date()));
  const [checkOutDate, setCheckOutDate] = useState(dayjs(new Date()));
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [flightClass, setFlightClass] = useState("Economy");

  let totalPassenger =
    parseInt(adultCount) + parseInt(childCount) + parseInt(infantCount);
  // on off area
  const [isDeparture, setIsDeparture] = useState(false);
  const [isArrival, setIsArrival] = useState(false);
  const [isTravelDate, setIsTravelDate] = useState(false);
  const [isReturnDate, setIsReturnDate] = useState(false);
  const [isPassenger, setIsPassenger] = useState(false);

  // toggle change flight
  const [isToggle, setisToggle] = useState(true);

  let handleOutsideClick = () => {
    setIsDeparture(false);
    setIsArrival(false);
    setIsTravelDate(false);
    setIsPassenger(false);
    setIsReturnDate(false);
  };

  let handleRoundWaySearch = () => {
    navigate("/roundwayaftersearch", {
      state: {
        departureCode,
        departureAddress,
        arrivalAddress,
        arrivalCode,
        checkInDate: checkInDate.format("YYYY-MM-DD"),
        checkOutDate: checkOutDate.format("YYYY-MM-DD"),
        adultCount,
        childCount,
        infantCount,
        flightClass,
        totalPassenger,
      },
    });
  };
  return (
    <ClickAwayListener onClickAway={handleOutsideClick}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4} sx={{ position: "relative" }}>
            <Box
              sx={{
                bgcolor: "var( --light-purple-color)",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "18px", sm: "40px" },
                minHeight: "70px",
                paddingLeft: "17px",
                paddingTop: "7px",
                borderRadius: "5px",
                border: "2px solid var(--purple-color)",
              }}
            >
              <Box
                onClick={() => {
                  setIsDeparture(!isDeparture);
                  setIsArrival(false);
                  setIsTravelDate(false);
                  setIsPassenger(false);
                  setIsReturnDate(false);
                }}
                sx={{ cursor: "pointer" }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "var(--purple-color)",
                  }}
                >
                  Departure At
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    marginTop: "-5px",
                    color: depCode
                      ? "var(--purple-color)"
                      : "var(--dark-color)",
                  }}
                >
                  {isToggle ? depCode || departureCode : arrCode || arrivalCode}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {isToggle ? (
                  <Front
                    style={{ height: "20px" }}
                    onClick={() => setisToggle(true)}
                  />
                ) : (
                  <Back
                    onClick={() => setisToggle(true)}
                    style={{ transform: "rotate(180deg)", height: "20px" }}
                  />
                )}

                {isToggle ? (
                  <Back
                    style={{ height: "20px" }}
                    onClick={() => setisToggle(false)}
                  />
                ) : (
                  <Front
                    onClick={() => setisToggle(true)}
                    style={{ transform: "rotate(180deg)", height: "20px" }}
                  />
                )}
              </Box>
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setIsArrival(!isArrival);
                  setIsDeparture(false);
                  setIsReturnDate(false);
                  setIsTravelDate(false);
                  setIsPassenger(false);
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "var(--purple-color)",
                  }}
                >
                  Arrival At
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    marginTop: "-5px",
                    color: arrCode
                      ? "var(--purple-color)"
                      : "var(--dark-color)",
                  }}
                >
                  {isToggle ? arrCode || arrivalCode : depCode || departureCode}
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
                display: isDeparture === true ? "block" : "none",
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

              {searchResults.length === 0 ? (
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginLeft: "12px",
                    fontWeight: "600",
                  }}
                >
                  No search found
                </Typography>
              ) : (
                searchResults.slice(0, 5).map((result, index) => (
                  <Box
                    onClick={() => {
                      setDepartureCode(result?.code);
                      setDepCode(result?.code);
                      setIsDeparture(false);
                      setIsArrival(true);
                    }}
                    key={index}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid var(--grey-color)",
                      padding: "0 10px",

                      transition: "all 0.3s", // Add a smooth transition effect
                      "&:hover": {
                        color: "white",
                        bgcolor: "var(--purple-color)",
                      },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
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
                ))
              )}
            </Box>

            {/* arrival search items */}
            <Box
              sx={{
                bgcolor: "var(--white-color)",
                width: "96%",
                position: "absolute",
                zIndex: "50",
                boxShadow: 2,
                display: isArrival === true ? "block" : "none",
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

              {searchResults.length === 0 ? (
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginLeft: "12px",
                    fontWeight: "600",
                  }}
                >
                  No search found
                </Typography>
              ) : (
                searchResults.slice(0, 5).map((result, index) => (
                  <Box
                    onClick={() => {
                      setArrivalCode(result?.code);
                      setArrCode(result?.code);
                      setIsArrival(false);
                      setArrivalAddress(result?.Address);
                    }}
                    key={index}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid var(--grey-color)",
                      padding: "0 10px",
                      transition: "all 0.3s", // Add a smooth transition effect
                      "&:hover": {
                        color: "white",
                        bgcolor: "var(--purple-color)",
                      },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
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
                ))
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={2.5}
            sx={{ position: "relative" }}
          >
            {" "}
            {/* check in data */}
            <Box
              onClick={() => {
                setIsTravelDate(!isTravelDate);
                setIsArrival(false);
                setIsDeparture(false);
                setIsReturnDate(false);
                setIsPassenger(false);
              }}
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
                Travel Date
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                {checkInDate.format("ddd, DD MMM YY")}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bgcolor: "var(--white-color)",
                boxShadow: 2,
                zIndex: "50",
                display: isTravelDate === true ? "block" : "none",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={checkInDate}
                  onChange={(date) => {
                    setCheckInDate(date);
                    setIsTravelDate(false);
                    setIsReturnDate(true);
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={2.5}>
            {" "}
            {/* Return Date */}
            <Box
              onClick={() => {
                setIsReturnDate(!isReturnDate);
                setIsTravelDate(false);
                setIsArrival(false);
                setIsDeparture(false);

                setIsPassenger(false);
              }}
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
                Return Date
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                {checkOutDate.format("ddd, DD MMM YY")}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bgcolor: "var(--white-color)",
                boxShadow: 2,
                zIndex: "50",
                display: isReturnDate === true ? "block" : "none",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={checkOutDate}
                  onChange={(date) => {
                    setCheckOutDate(date);
                    setIsReturnDate(false);
                    setIsPassenger(true);
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{ position: "relative" }}>
            {" "}
            <Box
              onClick={() => {
                setIsPassenger(!isPassenger);
                setIsTravelDate(false);
                setIsArrival(false);
                setIsDeparture(false);
                setIsReturnDate(false);
              }}
              sx={{
                bgcolor: "var( --light-purple-color)",
                minHeight: "70px",
                paddingLeft: "18px",
                paddingTop: "7px",
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
                Passenger & Class
              </Typography>

              <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                {totalPassenger} Passenger & {flightClass}
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
                display: isPassenger === true ? "block" : "none",
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
                      <span style={{ fontWeight: "bold" }}>
                        {adultCount} Adult{" "}
                      </span>
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
                      onClick={() => {
                        if (adultCount < 9 - (childCount + infantCount)) {
                          setAdultCount(adultCount + 1);
                        }
                      }}
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
                      onClick={() => {
                        if (adultCount > 1) {
                          setAdultCount(adultCount - 1);
                          if (infantCount === adultCount) {
                            if (infantCount > 1) {
                              setInfantCount(infantCount - 1);
                            }
                          }
                        }
                      }}
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
                      <span style={{ fontWeight: "bold" }}>
                        {childCount} Children
                      </span>{" "}
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
                      onClick={() => {
                        if (childCount < 9 - (adultCount + infantCount)) {
                          setChildCount(childCount + 1);
                        }
                      }}
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
                      onClick={() => {
                        if (childCount > 0) {
                          setChildCount(childCount - 1);
                        }
                      }}
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
                      <span style={{ fontWeight: "bold" }}>
                        {infantCount} Infant
                      </span>{" "}
                      <br></br>
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
                      onClick={() => {
                        if (infantCount < 9 - (adultCount + childCount)) {
                          if (infantCount < adultCount) {
                            setInfantCount(infantCount + 1);
                          }
                        }
                      }}
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
                      onClick={() => {
                        if (infantCount > 0) {
                          setInfantCount(infantCount - 1);
                        }
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
                    onChange={(event) => setFlightClass(event.target.value)}
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
                        <Typography sx={{ fontSize: "12px" }}>
                          Economy
                        </Typography>
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
                  onClick={() => setIsPassenger(false)}
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
              onClick={handleRoundWaySearch}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default Roundway;
