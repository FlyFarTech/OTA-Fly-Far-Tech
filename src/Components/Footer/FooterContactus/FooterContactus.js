import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const FooterContactus = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "10px",
        paddingBottom: "66px",
        paddingTop: "35px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Box>
              <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
                Make Your Travel OTA Portal Today{" "}
              </Typography>
              <Typography sx={{ color: "var(--grey-color)" }}>
                More than 750+ airlines including GDS carriers and low cost
                carriers (LCCs) connecting various destinations in 170+
                countries.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "9px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "12px 23px",
                    bgcolor: "var(--purple-color)",
                    textTransform: "capitalize",
                    fontWeight: "700",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    padding: "12px 23px",
                    bgcolor: "var( --explore-more-color)",
                    color: "var(--dark-color)",
                    textTransform: "capitalize",
                    fontWeight: "700",
                  }}
                >
                  Explore More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterContactus;
