import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import flightData from "./flightData.js";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Oneway from "./Oneway/Oneway.js";
import Roundway from "./Roundway/Roundway.js";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CreditCardIcon from "@mui/icons-material/CreditCard";
const HomeSearch = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedRadioValue, setSelectedRadioValue] = useState("One Way");

  const handleRadioChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };
  return (
    <Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TabList
              variant="scrollable"
              indicatorColor="none"
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ minHeight: "20px" }}
              orientation="horizontal"
              textColor="none"
            >
              <Tab
                icon={<AirplanemodeActiveIcon />}
                sx={{
                  bgcolor:
                    value === "1" ? "var(--white-color)" : "var(---tabcolor)",
                  color:
                    value === "1"
                      ? "var(--purple-color)"
                      : "var(--white-color)",
                  marginRight: "11px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  fontSize: "15px",
                  minHeight: "45px",
                }} // Center the Tab items
                label="Book Flight"
                value="1"
                iconPosition="start"
              />
              <Tab
                icon={<AirplaneTicketIcon />}
                iconPosition="start"
                sx={{
                  bgcolor:
                    value === "2" ? "var(--white-color)" : "var(---tabcolor)",
                  color:
                    value === "2"
                      ? "var(--purple-color)"
                      : "var(--white-color)",
                  marginRight: "11px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  fontSize: "15px",
                  minHeight: "45px",
                }} // Center the Tab items
                label="Group Fare"
                value="2"
              />
              <Tab
                icon={<TravelExploreIcon />}
                iconPosition="start"
                sx={{
                  bgcolor:
                    value === "3" ? "var(--white-color)" : "var(---tabcolor)",
                  color:
                    value === "3"
                      ? "var(--purple-color)"
                      : "var(--white-color)",
                  marginRight: "11px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  fontSize: "15px",
                  minHeight: "45px",
                }} // Center the Tab items
                label="Tour Package"
                value="3"
              />
              <Tab
                icon={<DarkModeIcon />}
                iconPosition="start"
                sx={{
                  bgcolor:
                    value === "4" ? "var(--white-color)" : "var(---tabcolor)",
                  color:
                    value === "4"
                      ? "var(--purple-color)"
                      : "var(--white-color)",
                  marginRight: "11px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  fontSize: "15px",
                  minHeight: "45px",
                }} // Center the Tab items
                label="Umrah"
                value="4"
              />
              <Tab
                icon={<CreditCardIcon />}
                iconPosition="start"
                sx={{
                  bgcolor:
                    value === "5" ? "var(--white-color)" : "var(---tabcolor)",
                  color:
                    value === "5"
                      ? "var(--purple-color)"
                      : "var(--white-color)",
                  marginRight: "11px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  fontSize: "15px",
                  minHeight: "45px",
                }} // Center the Tab items
                label="Visa"
                value="5"
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>

      <Box sx={{ bgcolor: "var(--white-color)", borderRadius: "10px" }}>
        <TabContext value={value}>
          <TabPanel value="1">
            <FormControl sx={{ marginBottom: "23px" }}>
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
            {selectedRadioValue === "One Way" && (
              <Oneway setSelectedRadioValue={setSelectedRadioValue} />
            )}
            {selectedRadioValue === "Round Way" && <Roundway />}
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item four</TabPanel>
          <TabPanel value="5">Item Five</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default HomeSearch;
