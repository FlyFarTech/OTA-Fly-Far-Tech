import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PiSunHorizonLight, PiSunLight, PiMoonThin } from "react-icons/pi";
import SliderRange from "../HomeSearch/Oneway/SliderRange";
import Countdown from "react-countdown";
const AirSearchFilter = ({
  flights,
  handleAirlineFilter,
  handleRefundability,
  handleStops,
  airlineFilter,
  setAirlineFilter,
  refundability,
  stops,
  handleBags,
  bag,
  priceRange,
  setPriceRange,
}) => {
  let AirSearchFilter = styled(Box)({
    marginTop: "11px",
  });

  const uniqueCarrierNames = [
    ...new Set(flights.map((flight) => flight.carrierName)),
  ];

  const uniqueBaggageOptions = Array.from(
    new Set(
      flights.flatMap((flight) =>
        flight.segments.map((segment) => segment.bags)
      )
    )
  ).filter(Boolean);

  const [visibleAirlines, setVisibleAirlines] = useState(5);
  const [showAllAirlines, setShowAllAirlines] = useState(false);
  const toggleShowMoreAirlines = (e) => {
    e.stopPropagation(); // Prevent the Accordion from automatically closing.
    setShowAllAirlines(!showAllAirlines);
  };

  const newPrices = flights.map((flight) => flight.clientPrice);
  const newMinPrice = Math.min(...newPrices);
  const newMaxPrice = Math.max(...newPrices);
  console.log(newMinPrice);
  console.log(newMaxPrice);
  const [airlineExapand, setAirlineExpand] = useState(false);
  const [refundableExapand, setRefundableExapand] = useState(false);
  const [stopExapand, setStopExpand] = useState(false);
  const [bagExapand, setBagExpand] = useState(false);
  const [priceExpand, setPriceExpand] = useState(false);
  const [flightScheduleExpand, setFlightScheduleExpand] = useState(false);

  const targetTime = new Date();
  targetTime.setHours(targetTime.getHours() + 22);
  targetTime.setMinutes(targetTime.getMinutes() + 30);

  // Calculate the initial time difference
  const initialTimeDiff = targetTime - new Date();
  const initialHours = Math.floor((initialTimeDiff / (1000 * 60 * 60)) % 24);
  const initialMinutes = Math.floor((initialTimeDiff / (1000 * 60)) % 60);
  const initialSeconds = Math.floor((initialTimeDiff / 1000) % 60);
  return (
    <AirSearchFilter>
      {/* Time Remaining */}
      <Box sx={{ bgcolor: "var(--white-color)" }}>
        <Box
          sx={{
            bgcolor: "var(--white-color)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 16px",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <AccessAlarmIcon
              sx={{ color: "var(--purple-color)", fontSize: "24px" }}
            />
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Time Remaining
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--purple-color)",
              }}
            >
              <Countdown
                date={targetTime}
                renderer={({ hours, minutes, seconds, completed }) => {
                  if (completed) {
                    // Countdown completed
                    return (
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "var(--purple-color)",
                        }}
                      >
                        00:00:00
                      </Typography>
                    );
                  } else {
                    return (
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "var(--purple-color)",
                        }}
                      >
                        {`${hours + initialHours}:${minutes + initialMinutes}:${
                          seconds + initialSeconds
                        }`}
                      </Typography>
                    );
                  }
                }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* price Range */}
      <Box
        sx={{
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Accordion expanded={priceExpand} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            onClick={() => setPriceExpand(!priceExpand)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "5px",
                }}
              >
                Price Range
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Any
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "12px" }}>
              Starts from ৳ {newMinPrice} sadfsdaf- ৳ {newMaxPrice} against your
              search. Price is a subject to change.
            </Typography>
            <Box>
              <SliderRange
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                newMinPrice={newMinPrice}
                newMaxPrice={newMaxPrice}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Fligh Sechdule */}
      <Box
        sx={{
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Accordion expanded={flightScheduleExpand} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            onClick={() => setFlightScheduleExpand(!flightScheduleExpand)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "5px",
                }}
              >
                Flight Sehedules
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Any
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "4px",
                border: "1px solid var(---border-color)",
                borderRadius: "5px",
                padding: "1px",
              }}
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  width: "100%",
                  color: "var(--purple-color)",
                  bgcolor: "var(--light-purple-color)",
                  boxShadow: "none",
                }}
              >
                Departure
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  width: "100%",
                  color: "var(--purple-color)",
                  bgcolor: "var(--light-purple-color)",
                  boxShadow: "none",
                }}
              >
                Arrival
              </Button>
            </Box>

            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginTop: "10px" }}
            >
              Departure Dhaka: 00-06 AM
            </Typography>

            <Box>
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "2px",
                  margin: " 17px auto",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    height: "54px",
                    bgcolor: "#EBF0F5",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <PiSunHorizonLight style={{ fontSize: "25px" }} />
                    <Typography sx={{ fontSize: "10px", marginTop: "-5px" }}>
                      00.06AM
                    </Typography>
                  </Box>
                </Button>
                <Button
                  sx={{
                    height: "54px",
                    bgcolor: "#EBF0F5",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <PiSunLight style={{ fontSize: "25px" }} />
                    <Typography sx={{ fontSize: "10px", marginTop: "-5px" }}>
                      06.12PM
                    </Typography>
                  </Box>
                </Button>
                <Button
                  sx={{
                    height: "54px",
                    bgcolor: "#EBF0F5",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <PiSunHorizonLight style={{ fontSize: "25px" }} />
                    <Typography sx={{ fontSize: "10px", marginTop: "-5px" }}>
                      12.06PM
                    </Typography>
                  </Box>
                </Button>
                <Button
                  sx={{
                    height: "54px",
                    bgcolor: "#EBF0F5",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <PiMoonThin style={{ fontSize: "25px" }} />
                    <Typography sx={{ fontSize: "10px", marginTop: "-5px" }}>
                      06.12PM
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Airlines */}
      <Box
        sx={{
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Accordion expanded={airlineExapand} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            onClick={() => setAirlineExpand(!airlineExapand)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "5px",
                }}
              >
                Airlines
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Any
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {uniqueCarrierNames
              .slice(
                0,
                showAllAirlines ? uniqueCarrierNames.length : visibleAirlines
              )
              .map((carrierName) => (
                <FormControlLabel
                  key={carrierName}
                  control={
                    <Checkbox
                      size="small"
                      value={carrierName}
                      checked={airlineFilter === carrierName}
                      onChange={(event) =>
                        handleAirlineFilter(
                          event.target.checked && event.target.value
                        )
                      }
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--grey-color)",
                      }}
                    >
                      {carrierName}
                    </Typography>
                  }
                />
              ))}
            {/* Show More / Show Less buttons */}
            {uniqueCarrierNames.length > visibleAirlines && (
              <Button
                onClick={(e) => toggleShowMoreAirlines(e)}
                sx={{ color: "var(--purple-color)", fontSize: "12px" }}
              >
                {showAllAirlines ? "Show Less Airlines" : "Show More Airlines"}
              </Button>
            )}
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Refunfability */}
      <Box
        sx={{
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Accordion expanded={refundableExapand} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            onClick={() => setRefundableExapand(!refundableExapand)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "5px",
                }}
              >
                Refundability
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Any
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    value="NonRefundable"
                    checked={"NonRefundable" === refundability}
                    onChange={(event) =>
                      handleRefundability(
                        event.target.checked && event.target.value
                      )
                    }
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--grey-color)",
                    }}
                  >
                    Non Refundable
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Refundable"
                    checked={"Refundable" === refundability}
                    onChange={(event) =>
                      handleRefundability(
                        event.target.checked && event.target.value
                      )
                    }
                    size="small"
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--grey-color)",
                    }}
                  >
                    Refundable
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Number of Stops */}
      <Box
        sx={{
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Accordion expanded={stopExapand} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            onClick={() => setStopExpand(!stopExapand)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "5px",
                }}
              >
                Number of Stops
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Any
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value="1"
                    size="small"
                    checked={"1" === stops}
                    onChange={(e) =>
                      handleStops(e.target.checked && e.target.value)
                    }
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--grey-color)",
                    }}
                  >
                    Direct Flight
                  </Typography>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) =>
                      handleStops(e.target.checked && e.target.value)
                    }
                    value="2"
                    checked={"2" === stops}
                    size="small"
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--grey-color)",
                    }}
                  >
                    On Stop Flight
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) =>
                      handleStops(e.target.checked && e.target.value)
                    }
                    value="3"
                    checked={"3" === stops}
                    size="small"
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--grey-color)",
                    }}
                  >
                    2 Stop Flight
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Baggage Policy */}
      <Box
        sx={{
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Accordion expanded={bagExapand} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            onClick={() => setBagExpand(!bagExapand)}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "5px",
                }}
              >
                Baggage Policy
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "var(--grey-color)" }}>
                Any
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {uniqueBaggageOptions.map((baggageOption) => (
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    value={baggageOption}
                    checked={baggageOption === bag}
                    onChange={(event) =>
                      handleBags(event.target.checked && event.target.value)
                    }
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--grey-color)",
                    }}
                  >
                    {baggageOption}
                  </Typography>
                }
              />
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>

      {/*  */}
    </AirSearchFilter>
  );
};

export default AirSearchFilter;
