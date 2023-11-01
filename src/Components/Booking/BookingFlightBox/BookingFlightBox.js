import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import ErrorIcon from "@mui/icons-material/Error";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LuggageIcon from "@mui/icons-material/Luggage";
import { ReactComponent as Lines } from "./line.svg";
import { ReactComponent as OnStop } from "./onstop.svg";
import { ReactComponent as TwoStop } from "./twostop.svg";
import dayjs from "dayjs";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
const BookingFlightBox = ({ flightData }) => {
  const BookingFlightBox = styled(Box)({
    background: "var(--white-color)",
    paddingBottom: "18px",
  });

  const formatPrice = (price) => price.toLocaleString();
  const formatTimeWithAMPM = (time) => dayjs(time, "HH:mm").format("h:mm A");
  const [isExpand, setIsExpand] = useState(false);
  return (
    <>
      <Typography
        sx={{
          bgcolor: "var(--purple-color)",
          height: "35px",
          borderRadius: "5px",
          fontSize: "16px",
          color: "var(--white-color)",
          fontWeight: "500",
          padding: "2px 27px ",
        }}
      >
        Flight Details
      </Typography>
      <Box sx={{ bgcolor: "var(--white-color)", borderRadius: "5px" }}>
        <BookingFlightBox>
          <Container>
            <Box
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
                        src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flightData?.carrier}.png`}
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                      {flightData?.carrierName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "var(--grey-color)",
                      }}
                    >
                      {flightData?.segments?.map((segment, index) => (
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
                        {flightData?.departure}
                      </Typography>
                      <Typography sx={{ fontSize: "25px" }}>
                        {" "}
                        {flightData?.arrival}
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "80px",
                        }}
                      >
                        {flightData?.segments.length === 3 && (
                          <React.Fragment>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {flightData?.segments.slice(0, -1)[0].arrival}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {flightData?.segments.slice(0, -1)[1].arrival}
                            </Typography>
                          </React.Fragment>
                        )}
                        {flightData?.segments.length === 2 && (
                          <React.Fragment>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {flightData?.segments.slice(0, -1)[0].arrival}
                            </Typography>
                          </React.Fragment>
                        )}
                      </Box>

                      {(flightData?.segments.length === 1 && (
                        <Lines style={{ width: "100%" }} />
                      )) ||
                        (flightData?.segments.length === 2 && (
                          <OnStop style={{ width: "100%" }} />
                        )) ||
                        (flightData?.segments.length === 3 && (
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
                        {flightData?.segments.length === 2 && (
                          <React.Fragment>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {formatTimeWithAMPM(
                                flightData?.segments.slice(0, -1)[0].arrivalTime
                              )}
                            </Typography>
                          </React.Fragment>
                        )}
                        {flightData?.segments.length === 3 && (
                          <React.Fragment>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {formatTimeWithAMPM(
                                flightData?.segments.slice(0, -1)[0].arrivalTime
                              )}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                              }}
                            >
                              {formatTimeWithAMPM(
                                flightData?.segments.slice(0, -1)[1].arrivalTime
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
                        gap: "250px",
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
                        {formatTimeWithAMPM(
                          flightData?.segments?.slice(0, 1)[0].departureTime
                        )}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "var(--grey-color)",
                          whiteSpace: "nowrap", // Prevent line breaks
                          display: "inline-block", // Make sure they are inline
                        }}
                      >
                        {" "}
                        {formatTimeWithAMPM(
                          flightData.segments.slice(-1)[0].arrivalTime
                        )}
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
                        {flightData?.totalFlightDuration}
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
                      <span>{flightData?.refundable}</span>
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
                        {flightData?.class || "Economy"} | W
                        {/* {flight?.class || "Economy"} | {segment?.cabinCode} */}
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
                      <span>
                        Baggage {flightData?.segments.slice(0, 1)[0].bags}{" "}
                      </span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Typography
              onClick={() => setIsExpand(!isExpand)}
              sx={{
                textAlign: "center",
                fontSize: "12px",
                color: "var(--purple-color)",
                cursor: "pointer",
              }}
            >
              {isExpand ? "Hide Details" : "More Details"}
            </Typography>
          </Container>
        </BookingFlightBox>
        <Accordion expanded={isExpand} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            sx={{ display: "none" }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0" }}>
            <Container maxWidth="sm">
              <Box
                sx={{
                  borderTop: "1px solid var(--deep-purple-color)",
                  paddingTop: "36px",
                }}
              ></Box>
            </Container>
            {flightData?.segments.map((segment, index) => (
              <BookingFlightBox>
                <Container>
                  <Box
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
                            <span>
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
                            <Lines style={{ width: "100%" }} />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "18px",
                              gap: "250px",
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
                              {formatTimeWithAMPM(segment?.departureTime)}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "var(--grey-color)",
                                whiteSpace: "nowrap", // Prevent line breaks
                                display: "inline-block", // Make sure they are inline
                              }}
                            >
                              {" "}
                              {formatTimeWithAMPM(segment?.arrivalTime)}
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
                            <span>{flightData?.refundable}</span>
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
                              Economy | {segment?.cabinCode}
                              {/* {flight?.class || "Economy"} | {segment?.cabinCode} */}
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
                  </Box>
                </Container>
                {index < flightData.segments?.length - 1 && (
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
                        {flightData.segments[index + 1]?.departureAirport}|{" "}
                        {index === 1 &&
                          flightData.segments[index + 1]?.arrivalAirport}
                        | Connecting time at{" "}
                        {index < flightData.transit.length
                          ? flightData.transit[index].split(":")[1]
                          : ""}
                      </Typography>
                    </Box>
                  </Container>
                )}
              </BookingFlightBox>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default BookingFlightBox;
