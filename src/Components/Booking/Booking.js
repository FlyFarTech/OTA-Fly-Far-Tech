import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";

import Grid from "@mui/material/Grid";

import BookingPrice from "./BookingPrice/BookingPrice";
import PassengerContactInfo from "./PassengerContactInfo/PassengerContactInfo";
import { useLocation } from "react-router-dom";
import BookingFlightBox from "./BookingFlightBox/BookingFlightBox";
import AdultPassengerInfo from "./AdultPassengerInfo/AdultPassengerInfo";
import ChildPassengerInfo from "./ChildPassengerInfo/ChildPassengerInfo";
import InfantPassengerInfo from "./AdultPassengerInfo/InfantPassengerInfo/InfantPassengerInfo";
import styled from "@emotion/styled";
import debounce from "lodash/debounce";
const Booking = () => {
  const location = useLocation();
  let flightData = location?.state?.flight;
  const PassengerInfo = styled(Box)({
    background: "var(--white-color)",
    paddingTop: "19px",
    paddingBottom: "26px",
    borderRadius: "5px",
    marginTop: "31px",
  });
  let adult = flightData?.priceBreakdown.find(
    (adult) => adult.paxType === "ADT"
  );

  let child = flightData?.priceBreakdown.find(
    (child) => child.paxType === "CNN"
  );
  let infant = flightData?.priceBreakdown.find(
    (infant) => infant.paxType === "INF"
  );

  const adultCount = [...Array(adult?.paxCount || 0).keys()];
  const childCount = [...Array(child?.paxCount || 0).keys()];
  const infantCount = [...Array(infant?.paxCount || 0).keys()];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.afName);
  };

  let [type, setType] = useState("ADT");
  let [afName, setAfName] = useState("");
  let [alName, setALName] = useState("");
  let [adob, setAdob] = useState("");
  let [apassNo, setApassNo] = useState("");
  let [apassNation, setApassNation] = useState("");
  let [agender, setGender] = useState("");
  let [apassEx, setApassEx] = useState("");
  const [AdultpassengerInfo, setAdultPassengerInfo] = useState([]);
  const [ChildpassengerInfo, setChildPassengerInfo] = useState([]);
  const [InfantpassengerInfo, setInfantpassengerInfo] = useState([]);
  console.log(AdultpassengerInfo);
  console.log(ChildpassengerInfo);
  console.log(InfantpassengerInfo);
  // Event handler to update passenger information
  const handleAdultPassengerInfoChange = (index, field, value) => {
    setAdultPassengerInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = {
        type: "ADT",
        ...updatedInfo[index],
        [field]: value,
      };
      return updatedInfo;
    });
  };

  const debouncedHandleAdultPassengerInfoChange = debounce(
    handleAdultPassengerInfoChange,
    350
  ); // Adjust the delay as needed

  const handleChildPassengerInfoChange = (index, field, value) => {
    setChildPassengerInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = {
        type: "CNN",
        ...updatedInfo[index],
        [field]: value,
      };
      return updatedInfo;
    });
  };

  const debouncedHandleChildPassengerInfoChange = debounce(
    handleChildPassengerInfoChange,
    350
  ); // Adjust the delay as needed

  const handleInfantPassengerInfoChange = (index, field, value) => {
    setInfantpassengerInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = {
        type: "INF",
        ...updatedInfo[index],
        [field]: value,
      };
      return updatedInfo;
    });
  };

  const debouncedHandleInfantPassengerInfoChange = debounce(
    handleInfantPassengerInfoChange,
    350
  ); // Adjust the delay as needed

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Container sx={{ marginTop: "32px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={9}>
                <BookingFlightBox flightData={flightData} />

                {adultCount.map((adult, index) => (
                  <PassengerInfo key={index}>
                    <Container>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "var(--black-color)",
                          marginBottom: "15px",
                        }}
                      >
                        Passenger #{index + 1}, Adult
                      </Typography>

                      <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Mr
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Mrs
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Miss
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}></Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              placeholder="Search By"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="afName"
                              onChange={(e) =>
                                debouncedHandleAdultPassengerInfoChange(
                                  index,
                                  "afName",
                                  e.target.value
                                )
                              }
                              placeholder="FirstName"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              name="adob"
                              onChange={(e) =>
                                debouncedHandleAdultPassengerInfoChange(
                                  index,
                                  "adob",
                                  e.target.value
                                )
                              }
                              placeholder="Date Of Birth"
                              type="text"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              name="apassEx"
                              placeholder="Passport Expiry Date"
                              type="text"
                              onChange={(e) =>
                                debouncedHandleAdultPassengerInfoChange(
                                  index,
                                  "apassEx",
                                  e.target.value
                                )
                              }
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="alName"
                              placeholder="LastName"
                              onChange={(e) =>
                                debouncedHandleAdultPassengerInfoChange(
                                  index,
                                  "alName",
                                  e.target.value
                                )
                              }
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              type="text"
                              name="apassNation"
                              placeholder="Nationality"
                              onChange={(e) =>
                                debouncedHandleAdultPassengerInfoChange(
                                  index,
                                  "apassNation",
                                  e.target.value
                                )
                              }
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="agender"
                              onChange={(e) =>
                                debouncedHandleAdultPassengerInfoChange(
                                  index,
                                  "agender",
                                  e.target.value
                                )
                              }
                              placeholder="Gender"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              type="text"
                              name="apassNo"
                              onChange={(e) =>
                                debouncedHandleAdultPassengerInfoChange(
                                  index,
                                  "apassNo",
                                  e.target.value
                                )
                              }
                              placeholder="Passport Number"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Container>
                  </PassengerInfo>
                ))}

                {childCount.map((child, index) => (
                  <PassengerInfo key={index}>
                    <Container>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "var(--black-color)",
                          marginBottom: "15px",
                        }}
                      >
                        Passenger #{index + 1},Child
                      </Typography>

                      <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Mr
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Mrs
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Miss
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}></Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              placeholder="Search By"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="afName"
                              onChange={(e) =>
                                debouncedHandleChildPassengerInfoChange(
                                  index,
                                  "afName",
                                  e.target.value
                                )
                              }
                              placeholder="FirstName"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              name="adob"
                              placeholder="Date Of Birth"
                              type="text"
                              onChange={(e) =>
                                debouncedHandleChildPassengerInfoChange(
                                  index,
                                  "adob",
                                  e.target.value
                                )
                              }
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              name="apassEx"
                              onChange={(e) =>
                                debouncedHandleChildPassengerInfoChange(
                                  index,
                                  "apassEx",
                                  e.target.value
                                )
                              }
                              placeholder="Passport Expiry Date"
                              type="text"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="alName"
                              onChange={(e) =>
                                debouncedHandleChildPassengerInfoChange(
                                  index,
                                  "alName",
                                  e.target.value
                                )
                              }
                              placeholder="LastName"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              type="text"
                              onChange={(e) =>
                                debouncedHandleChildPassengerInfoChange(
                                  index,
                                  "apassNation",
                                  e.target.value
                                )
                              }
                              name="apassNation"
                              placeholder="Nationality"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="agender"
                              placeholder="Gender"
                              onChange={(e) =>
                                debouncedHandleChildPassengerInfoChange(
                                  index,
                                  "agender",
                                  e.target.value
                                )
                              }
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              type="number"
                              name="apassNo"
                              onChange={(e) =>
                                debouncedHandleChildPassengerInfoChange(
                                  index,
                                  "apassNo",
                                  e.target.value
                                )
                              }
                              placeholder="Passport Number"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Container>
                  </PassengerInfo>
                ))}

                {infantCount.map((infant, index) => (
                  <PassengerInfo key={index}>
                    <Container>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "var(--black-color)",
                          marginBottom: "15px",
                        }}
                      >
                        Passenger #{index + 1},Infant
                      </Typography>

                      <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Mr
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Mrs
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "var(--purple-color)",
                              }}
                            >
                              Miss
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}></Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="afName"
                              placeholder="Search By"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="afName"
                              onChange={(e) =>
                                debouncedHandleInfantPassengerInfoChange(
                                  index,
                                  "afName",
                                  e.target.value
                                )
                              }
                              placeholder="FirstName"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              name="adob"
                              onChange={(e) =>
                                debouncedHandleInfantPassengerInfoChange(
                                  index,
                                  "adob",
                                  e.target.value
                                )
                              }
                              placeholder="Date Of Birth"
                              type="text"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              name="apassEx"
                              onChange={(e) =>
                                debouncedHandleInfantPassengerInfoChange(
                                  index,
                                  "apassEx",
                                  e.target.value
                                )
                              }
                              placeholder="Passport Expiry Date"
                              type="text"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                border: "1px solid var(--grey-color)",
                                paddingLeft: "14px",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="alName"
                              onChange={(e) =>
                                debouncedHandleInfantPassengerInfoChange(
                                  index,
                                  "alName",
                                  e.target.value
                                )
                              }
                              placeholder="LastName"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              type="text"
                              name="apassNation"
                              onChange={(e) =>
                                debouncedHandleInfantPassengerInfoChange(
                                  index,
                                  "apassNation",
                                  e.target.value
                                )
                              }
                              placeholder="Nationality"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Box sx={{ marginBottom: "16px" }}>
                            <input
                              type="text"
                              name="agender"
                              onChange={(e) =>
                                debouncedHandleInfantPassengerInfoChange(
                                  index,
                                  "agender",
                                  e.target.value
                                )
                              }
                              placeholder="Gender"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                          <Box>
                            <input
                              type="text"
                              name="apassNo"
                              onChange={(e) =>
                                debouncedHandleInfantPassengerInfoChange(
                                  index,
                                  "apassNo",
                                  e.target.value
                                )
                              }
                              placeholder="Passport Number"
                              style={{
                                width: "100%",
                                height: "37px",
                                outline: "none",
                                paddingLeft: "14px",
                                border: "1px solid var(--grey-color)",
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Container>
                  </PassengerInfo>
                ))}

                <PassengerContactInfo />
                <Box sx={{ marginBottom: "203px" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      bgcolor: "var(--dark-color)",
                      width: "100%",
                      marginTop: "44px",
                      fontWeight: "600",
                      padding: "10px 0",
                    }}
                  >
                    Book This Flight
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} lg={3}>
                <BookingPrice flightData={flightData} />
              </Grid>
            </Grid>
          </Container>
        </form>
      </Box>
    </>
  );
};

export default Booking;
