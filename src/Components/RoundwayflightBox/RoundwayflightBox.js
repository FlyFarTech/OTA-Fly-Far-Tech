import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { format } from "date-fns";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { ReactComponent as Lines } from "./line.svg";
import { ReactComponent as OnStop } from "./onstop.svg";
import { ReactComponent as TwoStop } from "./twostop.svg";
import EastIcon from "@mui/icons-material/East";
import ErrorIcon from "@mui/icons-material/Error";
import dayjs from "dayjs";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LuggageIcon from "@mui/icons-material/Luggage";
import moment from "moment";
import FareDetails from "../OnewayAfterSearch/FareDetails/FareDetails";
import FareComission from "../OnewayAfterSearch/FareComission/FareComission";
import FarePolicy from "../OnewayAfterSearch/FarePolicy/FarePolicy";
import Baggage from "../OnewayAfterSearch/Baggage/Baggage";
const RoundwayflightBox = ({ flight }) => {
  console.log(flight);
  const [expand, setExpand] = useState(false);
  let RoundwayflightBox = styled(Box)({
    backgroundColor: "var(--white-color)",
    borderRadius: "5px",
  });
  let TabBoxes = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "13px",
    paddingTop: "15.5px",

    borderTop: "3px solid var(--deep-purple-color) ",
    overflowY: "auto",
  });

  let FlightDetails = styled(Box)({});
  const [activeTab, setActiveTab] = useState("flightDetails");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const formatPrice = (price) => price.toLocaleString();
  const formatTimeWithAMPM = (time) => dayjs(time, "HH:mm").format("h:mm A");

  return (
    <>
      <Box
        sx={{
          bgcolor: "var(--white-color)",
          borderRadius: "5px",
          marginTop: "27px",
        }}
      >
        <RoundwayflightBox>
          <Box sx={{ paddingBottom: "15px", borderRadius: "5px" }}>
            <Container>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={2}
                  lg={2.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Box sx={{ width: "50px", height: "50px" }}>
                      <img
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flight?.carrier}.png`}
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                      {flight?.carrierName}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "11px", color: "var(--grey-color)" }}
                    >
                      {flight?.segments.go?.map((segment, index) => (
                        <span key={index}>
                          {`${segment?.marketingCareer}-${segment?.marketingFlight}`}{" "}
                        </span>
                      ))}{" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={1.5}
                  lg={1.1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <AirplanemodeActiveIcon
                      sx={{
                        transform: "rotate(90deg)",
                        fontSize: "34px",
                        color: "var(--purple-color)",
                      }}
                    />
                  </Box>
                  <Box sx={{ marginTop: { xs: "20px", sm: "95px" } }}>
                    <AirplanemodeActiveIcon
                      sx={{
                        transform: "rotate(-90deg)",
                        fontSize: "34px",
                        color: "var(--purple-color)",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4.6} lg={4.8}>
                  {/* go */}
                  <Box sx={{ textAlign: "center", marginTop: "34px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "260px",
                      }}
                    >
                      <Typography sx={{ fontSize: "25px" }}>
                        {flight?.godeparture}
                      </Typography>
                      <Typography sx={{ fontSize: "25px" }}>
                        {" "}
                        {flight?.goarrival}
                      </Typography>
                    </Box>

                    <Box>
                      <Container>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "80px",
                          }}
                        >
                          {flight?.segments.go.length === 3 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.go.slice(0, -1)[0].arrival}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.go.slice(0, -1)[1].arrival}
                              </Typography>
                            </React.Fragment>
                          )}
                          {flight?.segments.go.length === 2 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.go.slice(0, -1)[0].arrival}
                              </Typography>
                            </React.Fragment>
                          )}
                        </Box>
                      </Container>
                      {(flight?.segments.go.length === 1 && (
                        <Lines style={{ width: "100%" }} />
                      )) ||
                        (flight?.segments.go.length === 2 && (
                          <OnStop style={{ width: "100%" }} />
                        )) ||
                        (flight?.segments.go.length === 3 && (
                          <TwoStop style={{ width: "100%" }} />
                        ))}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "60px",
                        }}
                      >
                        {flight?.segments.go.length === 2 && (
                          <React.Fragment>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {formatTimeWithAMPM(
                                flight?.segments.go.slice(0, -1)[0].arrivalTime
                              )}
                            </Typography>
                          </React.Fragment>
                        )}
                        {flight?.segments.go.length === 3 && (
                          <React.Fragment>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {formatTimeWithAMPM(
                                flight?.segments.go.slice(0, -1)[0].arrivalTime
                              )}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {formatTimeWithAMPM(
                                flight?.segments.go.slice(0, -1)[1].arrivalTime
                              )}
                            </Typography>
                          </React.Fragment>
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "18px",
                        gap: "242px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "var(--grey-color)",
                          whiteSpace: "nowrap", // Prevent line breaks
                          display: "inline-block", // Make sure they are inline
                          marginRight: "10px", // Add some spacing between the two elements
                        }}
                      >
                        {dayjs(flight.godepartureTime, "HH:mm").format(
                          "hh:mm A"
                        )}{" "}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "var(--grey-color)",
                          whiteSpace: "nowrap", // Prevent line breaks
                          display: "inline-block", // Make sure they are inline
                          marginRight: "10px", // Add some spacing between the two elements
                        }}
                      >
                        {dayjs(flight.goarrivalTime, "HH:mm").format("hh:mm A")}{" "}
                      </Typography>
                    </Box>
                  </Box>
                  {/* back */}
                  <Box sx={{ textAlign: "center", marginTop: "34px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "260px",
                      }}
                    >
                      <Typography sx={{ fontSize: "25px" }}>
                        {flight?.backdeparture}
                      </Typography>
                      <Typography sx={{ fontSize: "25px" }}>
                        {" "}
                        {flight?.backarrival}
                      </Typography>
                    </Box>

                    <Box>
                      <Container>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "80px",
                          }}
                        >
                          {flight?.segments.back.length === 3 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.back.slice(0, -1)[0].arrival}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.back.slice(0, -1)[1].arrival}
                              </Typography>
                            </React.Fragment>
                          )}
                          {flight?.segments.back.length === 2 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.back.slice(0, -1)[0].arrival}
                              </Typography>
                            </React.Fragment>
                          )}
                        </Box>
                      </Container>
                      {(flight?.segments.back.length === 1 && (
                        <Lines style={{ width: "100%" }} />
                      )) ||
                        (flight?.segments.back.length === 2 && (
                          <OnStop style={{ width: "100%" }} />
                        )) ||
                        (flight?.segments.back.length === 3 && (
                          <TwoStop style={{ width: "100%" }} />
                        ))}
                      <Container>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "60px",
                          }}
                        >
                          {flight?.segments.back.length === 2 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {formatTimeWithAMPM(
                                  flight?.segments.back.slice(0, -1)[0]
                                    .arrivalTime
                                )}
                              </Typography>
                            </React.Fragment>
                          )}
                          {flight?.segments.back.length === 3 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "11px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {formatTimeWithAMPM(
                                  flight?.segments.back.slice(0, -1)[0]
                                    .arrivalTime
                                )}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "11px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {formatTimeWithAMPM(
                                  flight?.segments.back.slice(0, -1)[1]
                                    .arrivalTime
                                )}
                              </Typography>
                            </React.Fragment>
                          )}
                        </Box>
                      </Container>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "18px",
                        gap: "261px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "var(--grey-color)",
                          whiteSpace: "nowrap", // Prevent line breaks
                          display: "inline-block", // Make sure they are inline
                        }}
                      >
                        {dayjs(flight.backdepartureTime, "HH:mm").format(
                          "hh:mm A"
                        )}{" "}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "var(--grey-color)",
                          whiteSpace: "nowrap", // Prevent line breaks
                          display: "inline-block", // Make sure they are inline
                        }}
                      >
                        {dayjs(flight.backarrivalTime, "HH:mm").format(
                          "hh:mm A"
                        )}{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={1.9}
                  lg={1.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      border: "1px solid var(--grey-color)",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "5px",
                      borderRadius: "10px",
                      padding: "2px 3px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AccessTimeFilledIcon
                        sx={{ fontSize: "17px", color: "var(--grey-color)" }}
                      ></AccessTimeFilledIcon>
                      <Typography
                        sx={{ fontSize: "10px", color: "var(--grey-color)" }}
                      >
                        {" "}
                        {flight?.totalGoFlightDuration}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: { xs: "20px", sm: "95px" },
                      display: "flex",
                      border: "1px solid var(--grey-color)",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "5px",
                      borderRadius: "10px",
                      padding: "2px 3px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AccessTimeFilledIcon
                        sx={{ fontSize: "17px", color: "var(--grey-color)" }}
                      ></AccessTimeFilledIcon>
                      <Typography
                        sx={{ fontSize: "10px", color: "var(--grey-color)" }}
                      >
                        {" "}
                        {flight?.totalBackFlightDuration}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={2}
                  xs={12}
                  lg={2.1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "right",
                      width: "100%",
                      marginTop: { xs: "10px", sm: "0" },
                    }}
                  >
                    <Typography sx={{ fontSize: "28px" }}>
                      ৳
                      {(flight?.clientPrice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                    <Box>
                      <Button
                        endIcon={<EastIcon />}
                        variant="contained"
                        sx={{
                          marginTop: { xs: "8px", sm: "17px" },
                          bgcolor: "var(--purple-color)",
                          width: "100%",
                          fontSize: "15px",
                          textTransform: "capitalize",
                          boxShadow: "none",
                          borderRadius: "30px",
                        }}
                      >
                        Select
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {/* more details area */}
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} sm={4} lg={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "var(--grey-color)",
                      display: "flex",

                      marginTop: { xs: "10px", sm: "0px" },
                      justifyContent: { xs: "center", sm: "start" },
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <ErrorIcon sx={{ fontSize: "13.58px" }} />{" "}
                    <span>{flight?.refundable}</span>
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={12} lg={4}>
                  <Typography
                    onClick={() => setExpand(!expand)}
                    sx={{
                      textAlign: "center",
                      fontSize: "12px",
                      textDecoration: "underline",
                      color: "var(--purple-color)",
                      cursor: "pointer",
                    }}
                  >
                    {expand ? "Hide Details" : "More Details"}
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={12} lg={4}></Grid>
              </Grid>
            </Container>
          </Box>
        </RoundwayflightBox>
        <Accordion
          expanded={expand}
          sx={{ boxShadow: "none", borderRadius: "5px" }}
        >
          <AccordionSummary
            sx={{ display: "none" }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>

          <AccordionDetails>
            <Container maxWidth="md">
              <TabBoxes sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "9px 16px",
                    borderRadius: "21px",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    fontWeight: "700",
                    border: "1px solid var(--purple-color)",
                    backgroundColor:
                      activeTab === "flightDetails"
                        ? "var(--purple-color)"
                        : "transparent",
                    color:
                      activeTab === "flightDetails"
                        ? "white"
                        : "var(--purple-color)",
                  }}
                  onClick={() => handleTabClick("flightDetails")}
                >
                  Flight Details
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "9px 16px",
                    borderRadius: "21px",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    fontWeight: "700",
                    border: "1px solid var(--purple-color)",
                    backgroundColor:
                      activeTab === "fareDetails"
                        ? "var(--purple-color)"
                        : "transparent",
                    color:
                      activeTab === "fareDetails"
                        ? "white"
                        : "var(--purple-color)",
                  }}
                  onClick={() => handleTabClick("fareDetails")}
                >
                  Fare Details
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "9px 16px",
                    borderRadius: "21px",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    fontWeight: "700",
                    border: "1px solid var(--purple-color)",
                    backgroundColor:
                      activeTab === "fareCommission"
                        ? "var(--purple-color)"
                        : "transparent",
                    color:
                      activeTab === "fareCommission"
                        ? "white"
                        : "var(--purple-color)",
                  }}
                  onClick={() => handleTabClick("fareCommission")}
                >
                  Fare Commission
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "9px 16px",
                    borderRadius: "21px",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    fontWeight: "700",
                    border: "1px solid var(--purple-color)",
                    backgroundColor:
                      activeTab === "farePolicy"
                        ? "var(--purple-color)"
                        : "transparent",
                    color:
                      activeTab === "farePolicy"
                        ? "white"
                        : "var(--purple-color)",
                  }}
                  onClick={() => handleTabClick("farePolicy")}
                >
                  Fare Policy
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "9px 16px",
                    borderRadius: "21px",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    fontWeight: "700",
                    border: "1px solid var(--purple-color)",
                    backgroundColor:
                      activeTab === "baggage"
                        ? "var(--purple-color)"
                        : "transparent",
                    color:
                      activeTab === "baggage" ? "white" : "var(--purple-color)",
                  }}
                  onClick={() => handleTabClick("baggage")}
                >
                  Baggage
                </Button>
              </TabBoxes>
            </Container>

            {/* flight details */}
            {activeTab === "flightDetails" && (
              <FlightDetails sx={{ marginTop: "55px" }}>
                {/* go area */}
                {flight?.segments.go.map((segment, index) => (
                  <Box
                    key={index}
                    sx={{
                      margin: "0 auto",
                      marginTop: "10px !important",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={2} lg={2.5}>
                        <Box>
                          <Box sx={{ width: "50px", height: "50px" }}>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segment?.marketingCareer}.png`}
                              style={{
                                width: "50px",
                                height: "50px",
                              }}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "500" }}
                          >
                            {segment?.marketingCareerName}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "11px",
                              color: "var(--grey-color)",
                            }}
                          >
                            <span key={index}>
                              {`${segment?.marketingCareer}-${segment?.marketingFlight}`}{" "}
                            </span>
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={1.5}
                        md={1.2}
                        lg={1.1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <AirplanemodeActiveIcon
                            sx={{
                              transform: "rotate(90deg)",
                              fontSize: "34px",
                              color: "var(--purple-color)",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item md={5.9} xs={12} sm={12} lg={4.8}>
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "260px",
                            }}
                          >
                            <Typography sx={{ fontSize: "25px" }}>
                              {segment?.departure}
                            </Typography>
                            <Typography sx={{ fontSize: "25px" }}>
                              {" "}
                              {segment?.arrival}
                            </Typography>
                          </Box>
                          <Box>
                            <Container>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "96px",
                                }}
                              ></Box>
                            </Container>

                            <Lines style={{ width: "100%" }} />

                            <Container>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "60px",
                                }}
                              ></Box>
                            </Container>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "18px",
                              gap: "255px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                                whiteSpace: "nowrap", // Prevent line breaks
                                display: "inline-block", // Make sure they are inline
                                marginRight: "10px", // Add some spacing between the two elements
                              }}
                            >
                              {formatTimeWithAMPM(segment?.departureTime)}{" "}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                                whiteSpace: "nowrap", // Prevent line breaks
                                display: "inline-block", // Make sure they are inline
                                marginRight: "10px", // Add some spacing between the two elements
                              }}
                            >
                              {formatTimeWithAMPM(segment?.arrivalTime)}{" "}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={1.9}
                        lg={1.5}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            border: "1px solid var(--grey-color)",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "5px",
                            borderRadius: "10px",
                            padding: "2px 3px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <AccessTimeFilledIcon
                              sx={{
                                fontSize: "17px",
                                color: "var(--grey-color)",
                              }}
                            ></AccessTimeFilledIcon>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {" "}
                              {segment?.flightDuration}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item sm={12} xs={12} lg={2.1}>
                        <Box
                          sx={{
                            textAlign: "left",
                            color: "var(--grey-color)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "9px",
                            }}
                          >
                            <AccessTimeFilledIcon sx={{ fontSize: "15px" }} />
                            <span>{flight?.refundable}</span>
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "9px",
                              fontSize: "12.64px",
                              marginTop: "11px",
                            }}
                          >
                            <EventSeatIcon sx={{ fontSize: "15px" }} />
                            <span>
                              {flight?.class || "Economy"} |{" "}
                              {segment?.cabinCode}
                            </span>
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "9px",
                              fontSize: "12.64px",
                              marginTop: "11px",
                            }}
                          >
                            <LuggageIcon sx={{ fontSize: "15px" }} />
                            <span>Baggage {segment?.bags} </span>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    {index < flight.segments.go?.length - 1 && (
                      <Container maxWidth="sm">
                        <Box
                          sx={{
                            bgcolor: "var(--light-purple)",
                            margin: "19px auto",
                            borderRadius: "29px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "var(--purple-color)",
                              textAlign: "center",
                              padding: "7px",
                              borderRadius: "29px",
                              fontWeight: "600",
                              bgcolor: "var(--deep-purple-color)",
                            }}
                          >
                            Change Plane{" "}
                            {flight.segments.go[index + 1]?.departureAirport}|{" "}
                            {index === 1 &&
                              flight.segments.go[index + 1]?.arrivalAirport}
                            | Connecting time at{" "}
                            {flight.transit.go[index].split(":")[1] || "N/A"}
                          </Typography>
                        </Box>
                      </Container>
                    )}
                  </Box>
                ))}

                <Container maxWidth="sm">
                  <Box
                    sx={{
                      bgcolor: "var(--light-purple)",
                      margin: "19px auto",
                      borderRadius: "29px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "var(--purple-color)",
                        textAlign: "center",
                        padding: "7px",
                        borderRadius: "29px",
                        fontWeight: "600",
                        bgcolor: "var(--deep-purple-color)",
                      }}
                    >
                      Return
                    </Typography>
                  </Box>
                </Container>

                {/* return area */}

                {flight?.segments.back.map((segment, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "99%",
                      margin: "0 auto",
                      marginTop: "10px !important",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={2} lg={2.5}>
                        <Box>
                          <Box sx={{ width: "50px", height: "50px" }}>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segment?.marketingCareer}.png`}
                              style={{
                                width: "50px",
                                height: "50px",
                              }}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "500" }}
                          >
                            {segment?.marketingCareerName}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "11px",
                              color: "var(--grey-color)",
                            }}
                          >
                            <span key={index}>
                              {`${segment?.marketingCareer}-${segment?.marketingFlight}`}{" "}
                            </span>
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={1.5}
                        md={1.2}
                        lg={1.1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <AirplanemodeActiveIcon
                            sx={{
                              transform: "rotate(90deg)",
                              fontSize: "34px",
                              color: "var(--purple-color)",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item md={5.9} xs={12} sm={12} lg={4.8}>
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "260px",
                            }}
                          >
                            <Typography sx={{ fontSize: "25px" }}>
                              {segment?.departure}
                            </Typography>
                            <Typography sx={{ fontSize: "25px" }}>
                              {" "}
                              {segment?.arrival}
                            </Typography>
                          </Box>
                          <Box>
                            <Container>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "96px",
                                }}
                              ></Box>
                            </Container>

                            <Lines style={{ width: "100%" }} />

                            <Container>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "60px",
                                }}
                              ></Box>
                            </Container>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "18px",
                              gap: "255px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                                whiteSpace: "nowrap", // Prevent line breaks
                                display: "inline-block", // Make sure they are inline
                                marginRight: "10px", // Add some spacing between the two elements
                              }}
                            >
                              {formatTimeWithAMPM(segment?.departureTime)}{" "}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                                whiteSpace: "nowrap", // Prevent line breaks
                                display: "inline-block", // Make sure they are inline
                                marginRight: "10px", // Add some spacing between the two elements
                              }}
                            >
                              {formatTimeWithAMPM(segment?.arrivalTime)}{" "}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={1.9}
                        lg={1.5}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            border: "1px solid var(--grey-color)",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: "5px",
                            borderRadius: "10px",
                            padding: "2px 3px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <AccessTimeFilledIcon
                              sx={{
                                fontSize: "17px",
                                color: "var(--grey-color)",
                              }}
                            ></AccessTimeFilledIcon>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {" "}
                              {segment?.flightDuration}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item sm={12} xs={12} lg={2.1}>
                        <Box
                          sx={{
                            textAlign: "left",
                            color: "var(--grey-color)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "9px",
                            }}
                          >
                            <AccessTimeFilledIcon sx={{ fontSize: "15px" }} />
                            <span>{flight?.refundable}</span>
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "9px",
                              fontSize: "12.64px",
                              marginTop: "11px",
                            }}
                          >
                            <EventSeatIcon sx={{ fontSize: "15px" }} />
                            <span>
                              {flight?.class || "Economy"} |{" "}
                              {segment?.cabinCode}
                            </span>
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "9px",
                              fontSize: "12.64px",
                              marginTop: "11px",
                            }}
                          >
                            <LuggageIcon sx={{ fontSize: "15px" }} />
                            <span>Baggage {segment?.bags} </span>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    {index < flight.segments.back?.length - 1 && (
                      <Container maxWidth="sm">
                        <Box
                          sx={{
                            bgcolor: "var(--light-purple)",
                            margin: "19px auto",
                            borderRadius: "29px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "var(--purple-color)",
                              textAlign: "center",
                              padding: "7px",
                              borderRadius: "29px",
                              fontWeight: "600",
                              bgcolor: "var(--deep-purple-color)",
                            }}
                          >
                            Change Plane{" "}
                            {flight.segments.back[index + 1]?.departureAirport}|{" "}
                            {index === 1 &&
                              flight.segments.back[index + 1]?.arrivalAirport}
                            | Connecting time at{" "}
                            {flight.transit.back[index].split(":")[1] || "N/A"}
                          </Typography>
                        </Box>
                      </Container>
                    )}
                  </Box>
                ))}
              </FlightDetails>
            )}
            {/* fare details */}
            {activeTab === "fareDetails" && <FareDetails flight={flight} />}

            {/* fare Commission*/}
            {activeTab === "fareCommission" && (
              <FareComission flight={flight} />
            )}
            {/* fare Policiy*/}
            {activeTab === "farePolicy" && <FarePolicy />}

            {/*Baggage*/}
            {activeTab === "baggage" && <Baggage flight={flight} />}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default RoundwayflightBox;
