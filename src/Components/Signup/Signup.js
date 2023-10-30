import styled from "@emotion/styled";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Signup = () => {
  const SignUpBox = styled(Box)({
    background: "var(--white-color)",
    width: "100%",
    textAlign: "center",
    borderRadius: "11px",
    padding: "34px",
  });

  let handleRegister = (e) => {
    e.preventDefault();

    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let companyName = e.target.companyName.value;
    let mobile = e.target.mobile.value;
    let email = e.target.email.value;
    let companyAddress = e.target.companyAddress.value;
    let tinImage = e.target.tinImage.value;
    let password = e.target.password.value;
    console.log(
      firstName,
      lastName,
      companyName,
      mobile,
      email,
      companyAddress,
      tinImage,
      password
    );
  };
  return (
    <Box
      sx={{
        paddingTop: "132px",
        paddingBottom: "278px",
      }}
    >
      <form onSubmit={handleRegister}>
        <Container maxWidth="lg">
          <SignUpBox>
            <Container>
              <Typography
                sx={{
                  fontSize: "23px",
                  color: "var(--purple-color)",
                  fontWeight: "600",
                }}
              >
                Agent Sign Up
              </Typography>
              <Box sx={{ marginTop: "34px" }}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={6}>
                    <Box>
                      {/* First Name */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "19px",
                          borderBottom: "1px solid var(--grey-color)",
                          textAlign: "start",
                        }}
                      >
                        <EmailIcon sx={{ color: "var(--grey-color)" }} />
                        <Box>
                          <label
                            htmlFor="firstName"
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "var(--grey-color)",
                            }}
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            style={{
                              width: "100%",
                              border: "none",
                              background: "none",
                              outline: "none",
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Company Name */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          marginTop: "31px",
                          gap: "19px",
                          borderBottom: "1px solid var(--grey-color)",
                          textAlign: "start",
                        }}
                      >
                        <LockIcon sx={{ color: "var(--grey-color)" }} />
                        <Box>
                          <label
                            htmlFor="companyName"
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "var(--grey-color)",
                            }}
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            style={{
                              width: "100%",
                              border: "none",
                              background: "none",
                              outline: "none",
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Mobile */}
                      <Box
                        sx={{
                          marginTop: "31px",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "19px",
                          borderBottom: "1px solid var(--grey-color)",
                          textAlign: "start",
                        }}
                      >
                        <LocalPhoneIcon sx={{ color: "var(--grey-color)" }} />
                        <Box>
                          <label
                            htmlFor="mobile"
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "var(--grey-color)",
                            }}
                          >
                            Mobile
                          </label>
                          <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            style={{
                              width: "100%",
                              border: "none",
                              background: "none",
                              outline: "none",
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Email */}
                      <Box
                        sx={{
                          marginTop: "31px",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "19px",
                          borderBottom: "1px solid var(--grey-color)",
                          textAlign: "start",
                        }}
                      >
                        <EmailIcon sx={{ color: "var(--grey-color)" }} />
                        <Box>
                          <label
                            htmlFor="email"
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "var(--grey-color)",
                            }}
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            style={{
                              width: "100%",
                              border: "none",
                              background: "none",
                              outline: "none",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box>
                      {/* Last Name */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "19px",
                          borderBottom: "1px solid var(--grey-color)",
                          textAlign: "start",
                        }}
                      >
                        <EmailIcon sx={{ color: "var(--grey-color)" }} />
                        <Box>
                          <label
                            htmlFor="lastName"
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "var(--grey-color)",
                            }}
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            style={{
                              width: "100%",
                              border: "none",
                              background: "none",
                              outline: "none",
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Company Address */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          marginTop: "31px",
                          gap: "19px",
                          borderBottom: "1px solid var(--grey-color)",
                          textAlign: "start",
                        }}
                      >
                        <LockIcon sx={{ color: "var(--grey-color)" }} />
                        <Box>
                          <label
                            htmlFor="companyAddress"
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "var(--grey-color)",
                            }}
                          >
                            Company Address
                          </label>
                          <input
                            type="text"
                            id="companyAddress"
                            name="companyAddress"
                            style={{
                              width: "100%",
                              border: "none",
                              background: "none",
                              outline: "none",
                            }}
                          />
                        </Box>
                      </Box>

                      {/* TIN Copy */}
                      <Box
                        sx={{
                          marginTop: "31px",
                        }}
                      >
                        <Box
                          sx={{
                            background: "#3D3D3D",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "center",
                            height: "43px",
                          }}
                        >
                          <input
                            type="file"
                            className="customFileType"
                            style={{
                              background: "none",
                              color: "#ffff",
                              textAlign: "center",
                            }}
                            name="tinImage"
                          />
                        </Box>
                      </Box>

                      {/* Password */}
                      <Box
                        sx={{
                          marginTop: "31px",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "19px",
                          borderBottom: "1px solid var(--grey-color)",
                          textAlign: "start",
                        }}
                      >
                        <LockIcon sx={{ color: "var(--grey-color)" }} />
                        <Box>
                          <label
                            htmlFor="password"
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "var(--grey-color)",
                            }}
                          >
                            Password
                          </label>
                          <input
                            name="password"
                            type="password"
                            id="password"
                            style={{
                              width: "100%",
                              border: "none",
                              background: "none",
                              outline: "none",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ marginTop: "35px" }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "var(--purple-color)",
                        }}
                      >
                        By creating an account you agree to our Terms &
                        Conditions
                      </Typography>
                    }
                  />
                </FormGroup>
              </Box>
              <Box sx={{ marginTop: "32px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    bgcolor: "var(--purple-color)",
                    padding: "11px 0px",
                    fontWeight: "600",
                    "&:hover": {
                      background: "var(--hover-purple-color)",
                    },
                    boxShadow: "none",
                  }}
                >
                  Register as an Agent
                </Button>
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "var(--purple-color)",
                  fontWeight: "600",
                  fontSize: "13px",
                  marginTop: "21px",
                }}
              >
                Already have an Account?
                <Link to="/signin">
                  <span style={{ color: "var(--grey-color)" }}>Sign In</span>
                </Link>
              </Typography>
            </Container>
          </SignUpBox>
        </Container>
      </form>
    </Box>
  );
};

export default Signup;
