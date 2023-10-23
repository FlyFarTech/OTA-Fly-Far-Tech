import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FooterContactus from "./FooterContactus/FooterContactus";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          bgcolor: "var(--dark-color)",
          paddingTop: { xs: "500px", lg: "176px", md: "170px" },
          position: "relative",
          paddingBottom: "79px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-90px",
            width: "100%",
            zIndex: "50",
          }}
        >
          <Container>
            <FooterContactus />
          </Container>
        </Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={2.5}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "var(--white-color)",
                    fontWeight: "500",
                  }}
                >
                  Product
                </Typography>
                <Box
                  sx={{
                    color: "var(--white-color)",
                    marginTop: "15px",
                  }}
                >
                  <Typography sx={{ fontWeight: "400" }}>Flight API</Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Travel OTA Portal
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    White Label OTA Portal
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Travel API{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2.5}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "var(--white-color)",
                    fontWeight: "500",
                  }}
                >
                  Developers
                </Typography>
                <Box
                  sx={{
                    color: "var(--white-color)",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    Documentation
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    API
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Website
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2.5}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "var(--white-color)",
                    fontWeight: "500",
                  }}
                >
                  Company
                </Typography>
                <Box
                  sx={{
                    color: "var(--white-color)",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    About us
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Careers
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Contact us
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "var(--white-color)",
                    fontWeight: "500",
                    marginBottom: "15px",
                  }}
                >
                  Stay in the know with quarterly Duffel updates and industry
                  trends.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "6px",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 10,
                      bgcolor: "var(--white-color)",
                      display: "flex",
                      height: "46px",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Email"
                      style={{ width: "100%", paddingLeft: "15px" }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "var(--purple-color)",
                        textTransform: "capitalize",
                        padding: "0px 23px",
                        boxShadow: "none",
                        height: "46px",
                      }}
                    >
                      {" "}
                      Subscribe
                    </Button>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    marginTop: "15px",
                    color: "var(--deep-purple-color)",
                  }}
                >
                  By subscribing, I agree to receive communications by Fly far
                  Tech
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={2.5}>
              <Box sx={{ marginTop: { xs: "12px", md: "94px" } }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "var(--white-color)",
                    fontWeight: "500",
                  }}
                >
                  Sister Concern
                </Typography>
                <Box
                  sx={{
                    color: "var(--white-color)",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    Fly Far International
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Fly Far Ladies
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Fly Far Trips
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Fly Far Tech
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={2.5}>
              <Box sx={{ marginTop: { xs: "12px", md: "94px" } }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "var(--white-color)",
                    fontWeight: "500",
                  }}
                >
                  Developers
                </Typography>
                <Box
                  sx={{
                    color: "var(--white-color)",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    Documentation
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    API
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      marginTop: "15px",
                    }}
                  >
                    Website
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              borderTop: "2px solid var(--white-color)",
              marginTop: "100px",
              paddingTop: "27px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "var(--white-color)",
                }}
              >
                © Devloper Fly Far Tech 2023.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "var(--grey-color)",
                  fontWeight: "700",
                }}
              >
                Ka-9/A, Haji Abdul Latif Mansion (2nd Floor), Bashundhara R/A
                Road , Dhaka-1229
              </Typography>
            </Box>
            <Box sx={{ marginTop: { xs: "20px", md: "20px", lg: "0px" } }}>
              <FacebookIcon
                sx={{
                  color: "var(--white-color)",
                  fontSize: "30px",
                  marginRight: "15px",
                }}
              />
              <InstagramIcon
                sx={{
                  color: "var(--white-color)",
                  fontSize: "30px",
                  marginRight: "15px",
                }}
              />
              <LinkedInIcon
                sx={{
                  color: "var(--white-color)",
                  fontSize: "30px",
                  marginRight: "15px",
                }}
              />
              <TwitterIcon
                sx={{
                  color: "var(--white-color)",
                  fontSize: "30px",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
