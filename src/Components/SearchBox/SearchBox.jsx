import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
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
              indicatorColor="none"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                sx={{
                  bgcolor: "var(--white-color)",
                  marginRight: "11px",
                  textAlign: "center",
                }} // Center the Tab items
                label="Book Flight"
                value="1"
              />
              <Tab
                sx={{
                  bgcolor: "var(--white-color)",
                  marginRight: "11px",
                  textAlign: "center",
                }} // Center the Tab items
                label="Group Fare"
                value="2"
              />
              <Tab
                sx={{
                  bgcolor: "var(--white-color)",
                  marginRight: "11px",
                  textAlign: "center",
                }} // Center the Tab items
                label="Tour Package"
                value="3"
              />
              <Tab
                sx={{
                  bgcolor: "var(--white-color)",
                  marginRight: "11px",
                  textAlign: "center",
                }} // Center the Tab items
                label="Umrah"
                value="4"
              />
              <Tab
                sx={{
                  bgcolor: "var(--white-color)",
                  marginRight: "11px",

                  textAlign: "center",
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
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item One</TabPanel>
          <TabPanel value="5">Item Two</TabPanel>
        </TabContext>
      </SearchDiv>
      ;
    </>
  );
};

export default SearchBox;
