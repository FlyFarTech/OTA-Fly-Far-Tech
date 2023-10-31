import styled from "@emotion/styled";
import Swal from "sweetalert2";

// CommonJS

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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Signup = () => {
  const navigate = useNavigate();
  const SignUpBox = styled(Box)({
    background: "var(--white-color)",
    width: "100%",
    textAlign: "center",
    borderRadius: "11px",
    padding: "34px",
  });

  const capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let companyName = e.target.companyName.value;
    let mobile = e.target.mobile.value;
    let email = e.target.email.value;
    let companyAddress = e.target.companyAddress.value;
    let tinImage = e.target.tinImage.files[0];
    let password = e.target.password.value;
    if (
      firstName === "" ||
      lastName === "" ||
      companyName === "" ||
      mobile === "" ||
      email === "" ||
      companyAddress === "" ||
      password === "" ||
      !tinImage
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all the required fields.",
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password must be at least 8 characters long.",
      });
      return;
    }

    if (/[/@*]/.test(firstName) || /[/@*]/.test(lastName)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "First Name and Last Name cannot contain /, @, or *.",
      });
      return;
    }
    firstName = capitalize(firstName);
    lastName = capitalize(lastName);
    // Create an object with the user data
    let userInfo = {
      firstName,
      lastName,
      companyName,
      mobile,
      email,
      companyAddress,
      password,
    };

    // Create a FormData object to handle the file upload
    let formData = new FormData();
    formData.append("firstName", userInfo.firstName);
    formData.append("lastName", userInfo.lastName);
    formData.append("company", userInfo.companyName);
    formData.append("phone", userInfo.mobile);
    formData.append("email", userInfo.email);
    formData.append("companyAdd", userInfo.companyAddress);
    formData.append("password", userInfo.password);
    formData.append("confirmPassword", userInfo.password);
    formData.append("picture", tinImage);

    // Define the API endpoint URL
    const apiUrl =
      "https://quickticketsb2b-nodejs.de.r.appspot.com/api/v1/agent/create_agent";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire("Registration successful! Please Wait for approval");

        // Clear the form fields
        e.target.firstName.value = "";
        e.target.lastName.value = "";
        e.target.companyName.value = "";
        e.target.mobile.value = "";
        e.target.email.value = "";
        e.target.companyAddress.value = "";
        e.target.tinImage.value = ""; // Clear file input
        e.target.password.value = "";

        navigate("/");
      } else {
        // Handle the error, check if it's a duplicate email error
        const data = await response.json();
        if (data && data.error.includes("Duplicate entry")) {
          // Display a specific error message for duplicate email
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "This email is already registered. Please use a different email.",
          });
        } else {
          // Display a generic error message
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Registration failed. Please try again.",
          });
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      // Handle any network errors here
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Registration failed due to a network issue. Please try again later.",
      });
    }
  };
  return (
    <Box
      sx={{
        paddingTop: "132px",
        paddingBottom: "278px",
      }}
    >
      <form onSubmit={handleRegister}>
        <Container maxWidth="md">
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
                            autoComplete="given-name"
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
                            autoComplete="organization"
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
                            autoComplete="tel-mobile"
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
                            autoComplete="email"
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
                            autoComplete="family-name"
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
                            autoComplete="street-address"
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
                          marginTop: "20px",
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
                            height: "50px",
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
                            accept=".png, .jpg, .jpeg, .pdf"
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
                            autoComplete="new-password"
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
                    control={<Checkbox size="small" name="agreeToTerms" />}
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
