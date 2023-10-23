import styled from "@emotion/styled";
import { Box, Button, Collapse, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import SendIcon from "@mui/icons-material/Send";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import flightData from "./flightData";
const Oneway = () => {
  const OnewayBox = styled(Box)({
    marginTop: "23px",
  });
  const data = flightData; // json data from flight Data
  const initialData = [
    {
      code: "DAC",
      name: "Hazrat Shahjalal Intl Airport",
      Address: "Dhaka,BANGLADESH",
    },
    {
      code: "DXB",
      name: "Dubai Intl Airport",
      Address: "Dubai,UNITED ARAB EMIRATES",
    },
    {
      code: "CXB",
      name: "Cox's Bazar Airport",
      Address: "Cox's Bazar,Bangladesh",
    },
    {
      code: "JSR",
      name: "Jashore Airport",
      Address: "Jashore,Bangladesh",
    },
    {
      code: "BZL",
      name: "Barishal Airport",
      Address: "Barishal,Bangladesh",
    },
    {
      code: "RJH",
      name: "Shah Makhdum Airport",
      Address: "Rajshahi,Bangladesh",
    },
    {
      code: "SPD",
      name: "Saidpur Airport",
      Address: "Saidpur,Bangladesh",
    },
  ];

  const [fromSuggest, setFromSuggest] = useState(initialData);

  // const [open, setOpen] = useState(false);

  const formOnChange = (e) => {
    const searchvalue = e.target.value;
    console.log(searchvalue);
    if (e.target.value.length > 2) {
      const suggestion = data.filter((item) =>
        item.code.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFromSuggest(suggestion);
      if (e.target.value.length === 0) {
        const suggestion = data.filter(
          (item) =>
            item.code.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.Address.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFromSuggest(initialData);
      }
    } else {
      setFromSuggest(initialData);
    }
  };

  const fromSuggestedText = (name, code, address) => {
    console.log(name, code, address);
    // setFromSendData(code);
    // setFromSearchText(`${name} (${code})`);
    // setFromSuggest([]);
    // setfaddress(address);
  };

  const fromGetSuggetion = () => {
    return (
      <Box
        style={{
          height: "fit-content",
          position: "relative",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Box
          sx={{
            maxHeight: "230px",
            overflowY: "auto",

            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            "&::-webkit-scrollbar": { width: "5px" },
          }}
        >
          {fromSuggest.length !== 0 ? (
            fromSuggest.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    paddingLeft: "10px",
                    backgroundColor: "var(--secondary-bgcolor)",
                    transition: "all .5s ease-in-out",
                    "&:hover": {
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white)",
                    },
                    "&:hover .address": { color: "var(--white)" },
                  }}
                >
                  <Box
                    sx={{
                      margin: "0px 0px",
                      padding: "5px 0px",
                      cursor: "pointer",
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                    onClick={() => {
                      fromSuggestedText(
                        ` ${item.name}`,
                        ` ${item.code} `,
                        `${item.Address}`
                      );
                    }} //suggest to display name select with multiple data pass parameter
                  >
                    <Box>
                      <Typography
                        className="address"
                        sx={{
                          fontSize: "12px",
                          color: "var(--input-bgcolor)",
                          display: "block",
                          textAlign: "left",
                          fontWeight: 400,
                        }}
                      >
                        {item.Address}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "11px",
                          display: "block",
                          textAlign: "left",
                          color: "var(--white)",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: "13px",
                          display: "block",
                          textAlign: "left",
                          paddingRight: "5px",
                          color: "#999",
                          fontWeight: 400,
                        }}
                      >
                        {item.code}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Box>
              <Typography
                variant="subtitle-2"
                style={{
                  color: "var(--primary-color)",
                  fontWidth: "bold",
                  paddingLeft: "10px",
                }}
              >
                Not found
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <OnewayBox>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                position: "relative",
                bgcolor: "var(--light-purple-color)",
                display: "flex",
                justifyContent: "start",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: "0px", md: "40px" },
                paddingLeft: { xs: "0px", md: "22px" },
                minHeight: "70px",
                borderRadius: "5px",
              }}
            >
              {/* depsearchbox */}

              <Collapse in={true} timeout="auto" unmountOnExit>
                <Box
                  sx={{
                    position: "absolute",
                    top: "80%",
                    left: "0",
                    right: "0",
                    width: "96%",
                    backgroundColor: "var(--light-purple-color)",
                    height: "fit-content",
                    borderBottom: "1px solid var(  --input-bgcolor)",
                    borderLeft: "1px solid var(  --input-bgcolor)",
                    borderRight: "2px solid var(  --input-bgcolor)",
                    borderRadius: "0px 0px 5px 5px",
                    zIndex: "999",
                    padding: "3px 5px 0px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--secondary-color)",
                      zIndex: 10,
                    }}
                    backgroundColor="#fff"
                  >
                    <input
                      autoComplete="off"
                      autoFocus
                      onChange={formOnChange}
                      placeholder="Search a airport..."
                      className="customPlaceholder"
                      style={{
                        color: "var(--secondary-color)",
                        fontWeight: 400,
                        paddingLeft: "10px",
                        width: "100%",
                        height: "40px",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </Box>
                  <Box>{fromGetSuggetion()}</Box>
                </Box>
              </Collapse>

              <Box>
                {/* departure */}
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
                    Departure At
                  </Typography>
                  <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
                    DAC
                  </Typography>
                </Box>
              </Box>
              {/* icons */}
              <Box>
                <ConnectingAirportsIcon sx={{ fontSize: "50px" }} />
              </Box>
              {/* arrival */}
              <Box>
                {/* Arrival */}
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
                    Arrival At
                  </Typography>
                  <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
                    JFK
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={2.5}>
            <Box
              sx={{
                bgcolor: "var(--light-purple-color)",
                minHeight: "70px",
                gap: "40px",
                paddingLeft: "18px",
                paddingTop: "7px",

                borderRadius: "5px",
              }}
            >
              <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
                Travel Date
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                Wed, 06 Oct 23
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={2.5}>
            <Box
              sx={{
                bgcolor: "var(--light-purple-color)",
                minHeight: "70px",
                gap: "40px",
                paddingLeft: "18px",
                paddingTop: "7px",

                borderRadius: "5px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                Return
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                bgcolor: "var(--light-purple-color)",
                minHeight: "70px",
                gap: "40px",
                paddingLeft: "18px",
                paddingTop: "7px",
                borderRadius: "5px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>
                Passenger & Class
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                1 Passenger & Economy
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: "var(--purple-color)", fontSize: "50px" }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "var(--grey-color)",
                    fontWeight: "500",
                  }}
                >
                  Check Round way Split Search{" "}
                </Typography>
              }
            />
          </FormGroup>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              bgcolor: "var(--purple-color)",
              padding: "11px 34px",
              textTransform: "capitalize",
              fontWeight: "700",
              fontSize: "15px",
            }}
            startIcon={<SendIcon sx={{ transform: "rotate(-50deg)" }} />}
          >
            Search
          </Button>
        </Box>
      </Box>
    </OnewayBox>
  );
};

export default Oneway;
