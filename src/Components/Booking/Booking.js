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
import { parseInt } from "lodash";
import dayjs from "dayjs";
import Swal from "sweetalert2";
const Booking = () => {
  const location = useLocation();
  let flightData = location?.state?.flight;
  console.log(flightData);

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
  console.log(adultCount.length);
  console.log(childCount.length);
  console.log(infantCount.length);
  const [AdultpassengerInfo, setAdultPassengerInfo] = useState([]);
  const [ChildpassengerInfo, setChildPassengerInfo] = useState([]);
  const [InfantpassengerInfo, setInfantpassengerInfo] = useState([]);
  console.log(AdultpassengerInfo);
  console.log(ChildpassengerInfo);
  console.log(InfantpassengerInfo);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const extractedSegments = flightData?.segments.map((segment) => {
    return {
      // Specify the properties you want to pass
      departure: segment?.departure,
      arrival: segment?.arrival,
      dpTime: segment?.departureDateTime,
      arrTime: segment?.arrivalDateTime,
      bCode: segment?.bookingCode,
      mCarrier: segment?.marketingCareer,
      mCarrierFN: segment?.marketingFlight,
      oCarrier: segment?.operatingCareer,
      oCarrierFN: segment?.operatingFlight,
      // Add more properties as needed
    };
  });

  const passengerConstBase = flightData?.priceBreakdown.map((price) => {
    return {
      // Specify the properties you want to pass
      adultcostbase: price?.paxType === "ADT" ? price.baseFare : 0,
      childcostbase: price?.paxType === "CNN" ? price.baseFare : 0,
      infantcostbase: price?.paxType === "INF" ? price.baseFare : 0,
      // Add more properties as needed
    };
  });

  const passengerTaxes = flightData?.priceBreakdown.map((price) => {
    return {
      // Specify the properties you want to pass
      adultTax: price?.paxType === "ADT" ? price.Tax : 0,
      childTax: price?.paxType === "CNN" ? price.Tax : 0,
      infantTax: price?.paxType === "INF" ? price.Tax : 0,
      // Add more properties as needed
    };
  });
  console.log(passengerTaxes);

  console.log(passengerConstBase);
  const paxCount = flightData.priceBreakdown.reduce(
    (total, pax) => total + pax.paxCount,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let bookingData = {
      flightPassengerData: {
        adult: AdultpassengerInfo,
        child: ChildpassengerInfo,
        infant: InfantpassengerInfo,
        adultCount: adultCount.length,
        childCount: childCount.length,
        infantCount: infantCount.length,
        email: user?.email,
        phone: user?.phone,
        tripType: "1",
        SearchID: null,
        ResultID: null,
        resultToken: null,
        segment: (flightData?.segment).toString(),
        segments: extractedSegments,
        tDate: flightData?.departureDate,
        eDate: flightData?.arrivalDate,
        fbcode: "",
        airPriceKey: "",
      },
      bookingInfo: {
        agentId: user?.agentId,
        staffId: null,
        system: flightData?.system,
        from: flightData?.departure,
        to: flightData?.arrival,
        airlines: flightData?.carrierName,
        tripType: flightData?.tripType,
        travelDate: dayjs(flightData?.departureDate).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        name: user?.firstName,
        phone: user?.phone,
        email: user?.email,
        pax: parseInt(paxCount),
        adultcount: adultCount?.length,
        childcount: childCount?.length,
        infantcount: infantCount?.length,
        netcost: parseInt(flightData?.clientPrice),
        adultcostbase: parseInt(passengerConstBase[0]?.adultcostbase),
        childcostbase: parseInt(passengerConstBase[0]?.childcostbase),
        infantcostbase: parseInt(passengerConstBase[0]?.infantcostbase),
        adultcosttax: parseInt(passengerTaxes[0]?.adultTax),
        childcosttax: parseInt(passengerTaxes[0]?.childTax),
        infantcosttax: parseInt(passengerTaxes[0]?.infantTax),
        grosscost: parseInt(flightData?.price),
        basefare: parseInt(flightData?.basePrice),
        tax: parseInt(flightData?.taxes),
        SearchID: null,
        ResultID: null,
        journeyType: flightData?.tripType,
        coupon: "",
        adultbag: flightData?.bag || "",
        childbag: flightData?.bag || "",
        infantbag: flightData?.bag || "",
        refundable: flightData?.refundable ? "yes" : "no",
        platform: "B2B",
      },
      airAirSegment: null,
      fares: null,
      saveBooking: {
        flightData,
        adultCount: adultCount.length,
        childCount: childCount.length,
        infant: infantCount.length,
        to: flightData?.arrival,
        from: flightData?.departure,
        tripType: flightData?.tripType,
        fromAddress: flightData?.segments.slice(0, 1)[0].departureLocation,
        toAddress: flightData?.segments.slice(-1)[0].arrivalLocation,
        dDate: flightData?.departureDate,
        clientFare: parseInt(flightData?.clientPrice),
        agentFare: parseInt(flightData?.price),
        commission: parseInt(flightData?.commission),
      },
      system: flightData?.system,
      agentId: user?.agentId,
    };

    // const apiUrl =
    //   "https://quickticketsb2b-nodejs.de.r.appspot.com/api/v1/agent/booking/booking";

    // try {
    //   const response = await fetch(apiUrl, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(bookingData),
    //   });
    //   console.log(response);
    //   if (response.ok) {
    //     const responseData = await response.json();
    //     if (responseData.success === true) {
    //       Swal.fire("Success", "Booking Successful!", "success");
    //     }
    //   } else {
    //     const errorText = "Booking failed. Please try again.";
    //     Swal.fire({
    //       icon: "error",
    //       title: "Error",
    //       text: errorText,
    //     });
    //   }
    // } catch (error) {
    //   console.error("API request error:", error);
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     text: "An error occurred. Please try again later.",
    //   });
    // }

    console.log(bookingData);
  };

  // Event handler to update passenger information
  const handleAdultPassengerInfoChange = (index, field, value) => {
    setAdultPassengerInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = {
        type: "ADT",
        openDate: false,
        openPassExDate: false,
        AirFareInfo: null,
        FareInfoRef: null,
        ...updatedInfo[index],
        [field]: value,
      };
      return updatedInfo;
    });
  };

  // const debouncedHandleAdultPassengerInfoChange = debounce(
  //   handleAdultPassengerInfoChange,
  //   350
  // ); // Adjust the delay as needed

  const handleChildPassengerInfoChange = (index, field, value) => {
    setChildPassengerInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = {
        type: "CNN",
        openDate: false,
        openPassExDate: false,
        AirFareInfo: null,
        FareInfoRef: null,
        ...updatedInfo[index],
        [field]: value,
      };
      return updatedInfo;
    });
  };

  // Adjust the delay as needed

  const handleInfantPassengerInfoChange = (index, field, value) => {
    setInfantpassengerInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = {
        type: "INF",
        openDate: false,
        openPassExDate: false,
        AirFareInfo: null,
        FareInfoRef: null,
        ...updatedInfo[index],
        [field]: value,
      };
      return updatedInfo;
    });
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Container sx={{ marginTop: "32px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={9}>
                <BookingFlightBox flightData={flightData} />

                {adultCount.map((adult, index) => (
                  <Box
                    key={index}
                    sx={{
                      background: "var(--white-color)",
                      paddingTop: "19px",
                      paddingBottom: "26px",
                      borderRadius: "5px",
                      marginTop: "31px",
                    }}
                  >
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
                                handleAdultPassengerInfoChange(
                                  index,
                                  "afName",
                                  e.target.value
                                )
                              }
                              d
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
                                handleAdultPassengerInfoChange(
                                  index,
                                  "adob",
                                  dayjs(e.target.value).format("YYYY-MM-DD")
                                )
                              }
                              placeholder="Date Of Birth"
                              type="date"
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
                              type="date"
                              onChange={(e) =>
                                handleAdultPassengerInfoChange(
                                  index,
                                  "apassEx",

                                  dayjs(e.target.value).format("YYYY-MM-DD")
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
                                handleAdultPassengerInfoChange(
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
                                handleAdultPassengerInfoChange(
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
                                handleAdultPassengerInfoChange(
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
                                handleAdultPassengerInfoChange(
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
                  </Box>
                ))}

                {childCount.map((child, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: "var(--white-color)",
                      marginTop: "31px",
                      paddingTop: "19px",
                      paddingBottom: "26px",
                    }}
                  >
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
                                handleChildPassengerInfoChange(
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
                              type="date"
                              onChange={(e) =>
                                handleChildPassengerInfoChange(
                                  index,
                                  "adob",
                                  dayjs(e.target.value).format("YYYY-MM-DD")
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
                                handleChildPassengerInfoChange(
                                  index,
                                  "apassEx",
                                  dayjs(e.target.value).format("YYYY-MM-DD")
                                )
                              }
                              placeholder="Passport Expiry Date"
                              type="date"
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
                                handleChildPassengerInfoChange(
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
                                handleChildPassengerInfoChange(
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
                                handleChildPassengerInfoChange(
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
                                handleChildPassengerInfoChange(
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
                  </Box>
                ))}

                {infantCount.map((infant, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: "var(--white-color)",
                      marginTop: "31px",
                      paddingTop: "19px",
                      paddingBottom: "26px",
                    }}
                  >
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
                                handleInfantPassengerInfoChange(
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
                                handleInfantPassengerInfoChange(
                                  index,
                                  "adob",
                                  dayjs(e.target.value).format("YYYY-MM-DD")
                                )
                              }
                              placeholder="Date Of Birth"
                              type="date"
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
                                handleInfantPassengerInfoChange(
                                  index,
                                  "apassEx",
                                  dayjs(e.target.value).format("YYYY-MM-DD")
                                )
                              }
                              placeholder="Passport Expiry Date"
                              type="date"
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
                                handleInfantPassengerInfoChange(
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
                                handleInfantPassengerInfoChange(
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
                                handleInfantPassengerInfoChange(
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
                                handleInfantPassengerInfoChange(
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
                  </Box>
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
