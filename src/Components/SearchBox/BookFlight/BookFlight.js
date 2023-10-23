import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Oneway from "../Oneway/Oneway";
import Roundway from "../Roundway/Roundway";
import Multicity from "../Multicity/Multicity";

const BookFlight = () => {
  const BookFlightBox = styled(Box)({});
  const FlightCategories = styled(Box)({});
  const [selectedRadioValue, setSelectedRadioValue] = useState("One Way");

  const handleRadioChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };

  return (
    <>
      <BookFlightBox>
        <Box>
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
                label={
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "var(--grey-color)",
                    }}
                  >
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
                label={
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "var(--grey-color)",
                    }}
                  >
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
                label={
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "var(--grey-color)",
                    }}
                  >
                    Multi City
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <FlightCategories>
          {selectedRadioValue === "One Way" && <Oneway />}
          {selectedRadioValue === "Round Way" && <Roundway />}
          {selectedRadioValue === "Multi City" && <Multicity />}
        </FlightCategories>
      </BookFlightBox>
    </>
  );
};

export default BookFlight;
