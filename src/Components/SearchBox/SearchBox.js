import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import BookFlight from "./BookFlight/BookFlight";
import GroupFare from "./GroupFare/GroupFare";
import TourPackage from "./TourPackage/TourPackage";
import Umrah from "./Umrah/Umrah";
import Visa from "./Visa/Visa";
const SearchBox = () => {
  let SearchDiv = styled(Box)({});
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
      <SearchDiv sx={{ bgcolor: "var(--white-color)" }}>
        <TabContext value={value}>
          <TabPanel value="1">
            <BookFlight />
          </TabPanel>
          <TabPanel value="2">
            <GroupFare />
          </TabPanel>
          <TabPanel value="3">
            <TourPackage />
          </TabPanel>
          <TabPanel value="4">
            <Umrah />
          </TabPanel>
          <TabPanel value="5">
            <Visa />
          </TabPanel>
        </TabContext>
      </SearchDiv>
    </>
  );
};

export default SearchBox;
