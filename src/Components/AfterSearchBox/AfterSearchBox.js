import {
  Box,
  Button,
  ClickAwayListener,
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
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const AfterSearchBox = ({
  departureCode,
  arrivalCode,
  departureDate,
  adultCount,
  childCount,
  infantCount,
  returnDate,
  arrivalAddress,
  departureAddress,
  totalPassenger,
  flightClass,
  setDeparture,
  setArrival,
  setDeparDate,
  setAdult,
  setChild,
  setInfant,
}) => {
  const navigate = useNavigate();
  const [selectedRadioValue, setSelectedRadioValue] = useState("One Way");
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const [journeyDate, setJourneyDate] = useState(
    dayjs(departureDate).format("YYYY-MM-DD")
  );

  const [arrivalDate, setArrivalDate] = useState(
    dayjs(returnDate).format("YYYY-MM-DD")
  );
  const [adultNumberCount, setAdultNumberCount] = useState(adultCount || 1);
  const [childNumberCount, setChildNumberCount] = useState(childCount || 0);
  const [infantNumberCount, setInfantNumberCount] = useState(infantCount || 0);
  const [depCode, setDepCode] = useState(departureCode);
  const [arrCode, setArrCode] = useState(arrivalCode);
  const [depAddress, setDepAddress] = useState(departureAddress);
  const [arrAddress, setArrAddress] = useState(arrivalAddress);
  const [planeClass, setPlaneClass] = useState(flightClass);

  totalPassenger =
    parseInt(adultNumberCount) +
    parseInt(childNumberCount) +
    parseInt(infantNumberCount);
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
  const [isDeparture, setIsDeparture] = useState(false);
  const [isArrival, setIsArrival] = useState(false);
  const [isTravelDate, setIsTravelDate] = useState(false);
  const [isReturnDate, setIsReturnDate] = useState(false);
  const [isPassenger, setIsPassenger] = useState(false);
  let handleOutsideClick = () => {
    setIsDeparture(false);
    setIsArrival(false);
    setIsTravelDate(false);
    setIsReturnDate(false);
    setIsPassenger(false);
  };

  let handleOneway = () => {
    setDeparture(depCode);
    setArrival(arrCode);
    setDeparDate(journeyDate);
    setAdult(adultNumberCount);
    setChild(childNumberCount);
    setInfant(infantNumberCount);
  };

  return (
    <Box
      onClick={handleOutsideClick}
      sx={{
        bgcolor: "var(--white-color)",
        borderTop: "1px solid var(--grey-color)",
        paddingTop: "14px",
        paddingBottom: "21px",
      }}
    >
      <ClickAwayListener onClickAway={handleOutsideClick}>
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
              <Grid item xs={12} md={6} lg={2.5} sx={{ position: "relative" }}>
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDeparture(!isDeparture);
                    setIsArrival(false);
                    setIsTravelDate(false);
                    setIsReturnDate(false);
                    setIsPassenger(false);
                  }}
                  sx={{
                    border: "1px solid var(--grey-color)",
                    paddingLeft: "10px",
                    paddingTop: "8px",
                    paddingBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
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
                    {isToggle ? `${arrAddress}` : `${depAddress}`}
                  </Typography>
                </Box>
                {/* DEPARTURE ITEMS */}
                <Box
                  sx={{
                    bgcolor: "var(--white-color)",
                    position: "absolute",
                    width: "100%",
                    paddingBottom: "5px",
                    boxShadow: 2,
                    zIndex: 1300,
                    display: isDeparture ? "block" : "none",
                  }}
                >
                  <input
                    onClick={(e) => e.stopPropagation()}
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
                  {searchResults.slice(0, 5).map((result, index) => (
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        setDepCode(result?.code);
                        setDepAddress(result?.Address);
                        setIsDeparture(false);
                      }}
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid var(--grey-color)",
                        padding: "0 10px",
                        marginTop: "5px",
                        cursor: "pointer",

                        transition: "all 0.3s", // Add a smooth transition effect
                        "&:hover": {
                          color: "var(--white-color) !important",
                          bgcolor: "var(--purple-color)",
                        },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: "13px", fontWeight: "600" }}
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
                onClick={() => {
                  setIsToggle(!isToggle);
                  if (!isToggle) {
                    setDepCode(arrCode);
                    setArrCode(depCode);
                  } else {
                    setDepCode(departureCode);
                    setArrCode(arrivalCode);
                  }
                }}
                sx={{
                  height: "25px",
                  width: "25px",
                  zIndex: 20,
                  borderRadius: "50%",
                  bgcolor: "var(--purple-color)",
                  position: "absolute",
                  left: "19.5%",
                  top: "35%",
                  cursor: "pointer",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CompareArrowsIcon
                  sx={{ color: "var(--white-color)", fontSize: "20px" }}
                />
              </Box>
              <Grid item xs={12} md={6} lg={2.5} sx={{ position: "relative" }}>
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsArrival(!isArrival);
                    setIsDeparture(false);
                    setIsTravelDate(false);
                    setIsReturnDate(false);
                    setIsPassenger(false);
                  }}
                  sx={{
                    border: "1px solid var(--grey-color)",
                    paddingLeft: "10px",
                    paddingTop: "8px",
                    paddingBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
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
                    {isToggle ? `${depAddress}` : `${arrAddress}`}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    bgcolor: "var(--white-color)",
                    position: "absolute",
                    width: "100%",
                    paddingBottom: "5px",
                    boxShadow: 2,
                    zIndex: 1300,
                    display: isArrival ? "block" : "none",
                  }}
                >
                  <input
                    onClick={(e) => e.stopPropagation()}
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
                  {searchResults.slice(0, 5).map((result, index) => (
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        setArrCode(result?.code);
                        setArrAddress(result?.Address);
                        setIsArrival(false);
                      }}
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid var(--grey-color)",
                        padding: "0 10px",
                        marginTop: "5px",
                        cursor: "pointer",

                        transition: "all 0.3s", // Add a smooth transition effect
                        "&:hover": {
                          color: "var(--white-color) !important",
                          bgcolor: "var(--purple-color)",
                        },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: "13px", fontWeight: "600" }}
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
              <Grid item xs={12} md={6} lg={2} sx={{ position: "relaitve" }}>
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTravelDate(!isTravelDate);
                    setIsDeparture(false);
                    setIsArrival(false);
                    setIsReturnDate(false);
                    setIsPassenger(false);
                  }}
                  sx={{
                    cursor: "pointer",
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
                      {dayjs(journeyDate).format("ddd, DD MMM YYYY")}
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
                      onClick={(event) => {
                        event.stopPropagation();
                        const newJourneyDate = dayjs(journeyDate)
                          .subtract(1, "day")
                          .format("ddd, DD MMM YYYY");
                        setDeparDate(newJourneyDate);
                        setJourneyDate(newJourneyDate);
                        setIsTravelDate(false);
                      }}
                    />
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "17.36px", color: "var(--purple-color)" }}
                      onClick={(event) => {
                        event.stopPropagation();
                        const newJourneyDate = dayjs(journeyDate)
                          .add(1, "day")
                          .format("ddd, DD MMM YYYY");
                        setDeparDate(newJourneyDate);
                        setJourneyDate(newJourneyDate);
                      }}
                    />
                  </Box>
                </Box>

                {/* data journey */}

                <Box
                  sx={{
                    position: "absolute",
                    bgcolor: "var(--white-color)",
                    boxShadow: 2,
                    zIndex: "50",
                    display: isTravelDate ? "block" : "none",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      onClick={(e) => e.stopPropagation()}
                      date={journeyDate}
                      onChange={(date) => {
                        setJourneyDate(dayjs(date).format("YYYY-MM-DD"));
                        setIsTravelDate(false);
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={2} sx={{ position: "relative" }}>
                {selectedRadioValue === "One Way" ? (
                  <Box
                    onClick={() => setSelectedRadioValue("Round Way")}
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
                      cursor: "pointer",
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
                        Add
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12.5px",
                          fontWeight: "700",
                          color: "var(--purple-color)",
                        }}
                      >
                        Return
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      [+]
                    </Box>
                  </Box>
                ) : (
                  <Box
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsReturnDate(!isReturnDate);
                      setIsTravelDate(false);
                      setIsDeparture(false);
                      setIsArrival(false);
                      setIsPassenger(false);
                    }}
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
                      cursor: "pointer",
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
                        {dayjs(arrivalDate).format("ddd, DD MMM YYYY")}
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
                        sx={{
                          fontSize: "17.36px",
                          color: "var(--purple-color)",
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                          const newArrivalDate = dayjs(arrivalDate)
                            .subtract(1, "day")
                            .format("ddd, DD MMM YYYY");
                          setArrivalDate(newArrivalDate);
                        }}
                      />
                      <ArrowForwardIosIcon
                        sx={{
                          fontSize: "17.36px",
                          color: "var(--purple-color)",
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                          const newArrivalDate = dayjs(arrivalDate)
                            .add(1, "day")
                            .format("ddd, DD MMM YYYY");
                          setArrivalDate(newArrivalDate);
                        }}
                      />
                    </Box>
                  </Box>
                )}

                <Box
                  sx={{
                    position: "absolute",
                    bgcolor: "var(--white-color)",
                    boxShadow: 2,
                    zIndex: 1300,
                    display: isReturnDate ? "block" : "none",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      onClick={(e) => e.stopPropagation()}
                      date={arrivalDate}
                      onChange={(date) => {
                        setArrivalDate(dayjs(date).format("YYYY-MM-DD"));
                        setIsReturnDate(false);
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={2.2} sx={{ position: "relative" }}>
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPassenger(!isPassenger);
                    setIsDeparture(false);
                    setIsArrival(false);
                    setIsReturnDate(false);
                    setIsTravelDate(false);
                  }}
                  sx={{
                    border: "1px solid var(--grey-color)",
                    paddingLeft: "10px",
                    paddingTop: "8px",
                    paddingBottom: "15px",
                    borderRadius: "5px",
                    cursor: "pointer",
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
                    {totalPassenger} Traveler & {planeClass}
                  </Typography>
                </Box>

                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    boxShadow: 2,
                    bgcolor: "var(--white-color)",
                    padding: "10px",
                    position: "absolute",
                    zIndex: "50",
                    marginTop: "5px",
                    display: isPassenger ? "block" : "none",
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
                            {adultNumberCount} Adult{" "}
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
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              adultNumberCount <
                              9 - (childNumberCount + infantNumberCount)
                            ) {
                              setAdultNumberCount(adultNumberCount + 1);
                            }
                          }}
                          variant="contained"
                          sx={{
                            minWidth: "20px",
                            minHeight: "20px",
                            bgcolor: "var( --purple-color)",
                            "&:hover": {
                              background: "var(--hover-purple-color)",
                            },
                          }}
                        >
                          +
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (adultNumberCount > 1) {
                              setAdultNumberCount(adultNumberCount - 1);
                              if (infantNumberCount === adultNumberCount) {
                                if (infantNumberCount > 1) {
                                  setInfantNumberCount(infantNumberCount - 1);
                                }
                              }
                            }
                          }}
                          variant="contained"
                          sx={{
                            minWidth: "20px",
                            minHeight: "20px",
                            marginLeft: "2px",
                            bgcolor: "var( --purple-color)",
                            "&:hover": {
                              background: "var(--hover-purple-color)",
                            },
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
                            {" "}
                            {childNumberCount} Children
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
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              childNumberCount <
                              9 - (adultNumberCount + infantNumberCount)
                            ) {
                              setChildNumberCount(childNumberCount + 1);
                            }
                          }}
                          variant="contained"
                          sx={{
                            minWidth: "20px",
                            minHeight: "20px",
                            bgcolor: "var( --purple-color)",
                            "&:hover": {
                              background: "var(--hover-purple-color)",
                            },
                          }}
                        >
                          +
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (childNumberCount > 0) {
                              setChildNumberCount(childNumberCount - 1);
                            }
                          }}
                          variant="contained"
                          sx={{
                            minWidth: "20px",
                            minHeight: "20px",
                            marginLeft: "2px",
                            bgcolor: "var( --purple-color)",
                            "&:hover": {
                              background: "var(--hover-purple-color)",
                            },
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
                            {infantNumberCount} Infant
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
                      <Box
                        sx={{
                          display: "flex",
                          gap: "2px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              infantNumberCount <
                              9 - (adultNumberCount + childNumberCount)
                            ) {
                              if (infantNumberCount < adultNumberCount) {
                                setInfantNumberCount(infantNumberCount + 1);
                              }
                            }
                          }}
                          variant="contained"
                          sx={{
                            minWidth: "20px",
                            minHeight: "20px",
                            bgcolor: "var( --purple-color)",
                            "&:hover": {
                              background: "var(--hover-purple-color)",
                            },
                          }}
                        >
                          +
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (infantNumberCount > 0) {
                              setInfantNumberCount(infantNumberCount - 1);
                            }
                          }}
                          variant="contained"
                          sx={{
                            minWidth: "20px",
                            minHeight: "20px",
                            "&:hover": {
                              background: "var(--hover-purple-color)",
                            },
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
                        onChange={(event) => {
                          event.stopPropagation();
                          setPlaneClass(event.target.value);
                        }}
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
                        "&:hover": {
                          background: "var(--hover-purple-color)",
                        },
                      }}
                    >
                      Done
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={0.8}>
                <Box sx={{ height: "100%", width: "100%" }}>
                  <Button
                    onClick={() => {
                      if (selectedRadioValue === "One Way") {
                        handleOneway();
                      } else {
                      }
                    }}
                    variant="contained"
                    sx={{
                      background: "var(--dark-color)",
                      height: "100%",
                      width: "100%",
                      boxShadow: "none",
                      "&:hover": {
                        background: "var(--hover-purple-color)",
                      },
                    }}
                  >
                    <SearchIcon sx={{ color: "var(--white-color)" }} />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ClickAwayListener>
    </Box>
  );
};

export default AfterSearchBox;
