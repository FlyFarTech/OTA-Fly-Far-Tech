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
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LuggageIcon from "@mui/icons-material/Luggage";
import FareDetails from "../FareDetails/FareDetails";
import FareComission from "../FareComission/FareComission";
import FarePolicy from "../FarePolicy/FarePolicy";
import Baggage from "../Baggage/Baggage";
import dayjs from "dayjs";
const OnewayflightBox = ({ flight }) => {
  console.log(flight);
  const [expand, setExpand] = useState(false);
  let OnewayflightBox = styled(Box)({
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

  let FlgihtDetails = styled(Box)({});
  const [activeTab, setActiveTab] = useState("flightDetails");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "var(--white-color)",
          borderRadius: "5px",
          marginTop: "27px",
        }}
      >
        <OnewayflightBox>
          <Box sx={{ paddingBottom: "15px", borderRadius: "5px" }}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={2}>
                  <Box>
                    <Box sx={{ width: "50px", height: "50px" }}>
                      <img
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flight?.career}.png`}
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                      {flight?.careerName}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "11px", color: "var(--grey-color)" }}
                    >
                      {flight?.segments?.map((segment, index) => (
                        <span key={index}>
                          {`${segment?.marketingcareer}-${segment?.marketingflight}`}{" "}
                        </span>
                      ))}{" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={1.5}
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
                <Grid item xs={12} lg={4.6}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: "25px" }}>
                        {flight?.departure}
                      </Typography>
                      <Typography sx={{ fontSize: "25px" }}>
                        {" "}
                        {flight?.arrival}
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
                        >
                          {flight?.segments.length === 3 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.slice(0, -1)[0].arrival}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.slice(0, -1)[1].arrival}
                              </Typography>
                            </React.Fragment>
                          )}
                          {flight?.segments.length === 2 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {flight?.segments.slice(0, -1)[0].arrival}
                              </Typography>
                            </React.Fragment>
                          )}
                        </Box>
                      </Container>
                      {(flight?.segments.length === 1 && (
                        <Lines style={{ width: "100%" }} />
                      )) ||
                        (flight?.segments.length === 2 && (
                          <OnStop style={{ width: "100%" }} />
                        )) ||
                        (flight?.segments.length === 3 && (
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
                          {flight?.segments.length === 2 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "10px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {dayjs(
                                  flight?.segments.slice(0, -1)[0].arrivalTime
                                ).format("hh:mm A")}
                              </Typography>
                            </React.Fragment>
                          )}
                          {flight?.segments.length === 3 && (
                            <React.Fragment>
                              <Typography
                                sx={{
                                  fontSize: "11px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {dayjs(
                                  flight?.segments.slice(0, -1)[0].arrivalTime
                                ).format("hh:mm A")}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "11px",
                                  color: "var(--grey-color)",
                                }}
                              >
                                {dayjs(
                                  flight?.segments.slice(0, -1)[1].arrivalTime
                                ).format("hh:mm A")}
                              </Typography>
                            </React.Fragment>
                          )}
                        </Box>
                      </Container>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "18px",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "11px", color: "var(--grey-color)" }}
                      >
                        {dayjs(flight.departureTime, "HH:mm").format("hh:mm A")}{" "}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "11px", color: "var(--grey-color)" }}
                      >
                        {dayjs(flight.arrivalTime, "HH:mm").format("hh:mm A")}{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={1.9}
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
                        sx={{ fontSize: "17px", color: "var(--grey-color)" }}
                      ></AccessTimeFilledIcon>
                      <Typography
                        sx={{ fontSize: "10px", color: "var(--grey-color)" }}
                      >
                        {" "}
                        {flight?.flightduration}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={2}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: "28px" }}>
                      ৳{flight?.customerPrice}
                    </Typography>
                    <Box>
                      <Button
                        endIcon={<EastIcon />}
                        variant="contained"
                        sx={{
                          marginTop: "17px",
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

              <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "var(--grey-color)",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <ErrorIcon sx={{ fontSize: "13.58px" }} />{" "}
                    <span>{flight?.refundable}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
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
                <Grid item xs={12} lg={4}></Grid>
              </Grid>
            </Container>
          </Box>
        </OnewayflightBox>
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
              <TabBoxes>
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
              <FlgihtDetails sx={{ marginTop: "55px" }}>
                {flight?.segments.map((segment, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "99%",
                      margin: "0 auto",
                      marginTop: "10px !important",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={2}>
                        <Box>
                          <Box sx={{ width: "50px", height: "50px" }}>
                            <img
                              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${segment?.marketingcareer}.png`}
                              style={{
                                width: "50px",
                                height: "50px",
                              }}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "500" }}
                          >
                            {segment?.marketingcareerName}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "11px",
                              color: "var(--grey-color)",
                            }}
                          >
                            <span key={index}>
                              {`${segment?.marketingcareer}-${segment?.marketingflight}`}{" "}
                            </span>
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={1.5}
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
                      <Grid item xs={12} lg={4.6}>
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
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
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginTop: "18px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {dayjs(segment.departureTime).format("hh:mm A")}{" "}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {dayjs(segment.arrivalTime).format("hh:mm A")}{" "}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={1.9}
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
                              {segment?.flightduration}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={2}>
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
                              {flight?.class} | {segment?.bookingcode}
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
                            <span>Baggage {flight?.bags} KG </span>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    {index < flight.segments?.length - 1 && (
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
                            {flight.segments[index + 1]?.departureAirport}|{" "}
                            {index === 1 &&
                              flight.segments[index + 1]?.arrivalAirport}
                            | Connecting time at{" "}
                            {index === 0
                              ? flight.transit.transit1
                              : index === 1
                              ? flight.transit.transit2
                              : ""}
                          </Typography>
                        </Box>
                      </Container>
                    )}
                  </Box>
                ))}
              </FlgihtDetails>
            )}
            {/* fare details */}
            {activeTab === "fareDetails" && <FareDetails />}

            {/* fare Commission*/}
            {activeTab === "fareCommission" && <FareComission />}
            {/* fare Policiy*/}
            {activeTab === "farePolicy" && <FarePolicy />}

            {/*Baggage*/}
            {activeTab === "baggage" && <Baggage />}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default OnewayflightBox;
