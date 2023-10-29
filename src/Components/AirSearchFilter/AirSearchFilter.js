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
function valuetext(value) {
  return `${value}°C`;
}
const AirSearchFilter = () => {
  let AirSearchFilter = styled(Box)({
    marginTop: "11px",
  });

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              22:30
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
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
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
              Starts from ৳ 4,171 - ৳ 7,182 against your search. Price is a
              subject to change.
            </Typography>
            <Box>
              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
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
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
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
                variant="contained"
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
                variant="contained"
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
                  border: "2px solid var(---border-color)",
                  padding: "3px",
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "60px",
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
                </Box>
                <Box
                  sx={{
                    width: "60px",
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
                </Box>
                <Box
                  variant="contained"
                  sx={{
                    width: "60px",
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
                </Box>
                <Box
                  variant="contained"
                  sx={{
                    width: "60px",
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
                </Box>
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
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "14px" }}>
                    Biman Bangladesh Airlines
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    <span> US-Bangla Airlines</span>
                  </Typography>
                }
              />
              <FormControlLabel
                disabled
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "14px" }}>Air Astra</Typography>
                }
              />
            </FormGroup>
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
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
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
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "14px" }}>
                    Non Refundable
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    Partially Refundable
                  </Typography>
                }
              />
              <FormControlLabel
                disabled
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "14px" }}>Rules Wise</Typography>
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
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
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
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontSize: "14px" }}>
                    Direct Flight
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
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={<Typography sx={{ fontSize: "14px" }}>Bags</Typography>}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/*  */}
    </AirSearchFilter>
  );
};

export default AirSearchFilter;
