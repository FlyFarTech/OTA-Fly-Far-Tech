import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {
  const SignInBox = styled(Box)({
    background: "var(--white-color)",
    height: "429px",
    width: "100%",
    textAlign: "center",
    borderRadius: "11px",
    padding: "34px",
  });
  const navigate = useNavigate("/");

  const handleSignIn = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required. Please fill in all the fields.",
      });
      return;
    }

    let userInfo = { email, password };

    const apiUrl =
      "https://quickticketsb2b-nodejs.de.r.appspot.com/api/v1/agent/agent_login";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success === true) {
          Swal.fire("Success", "Login Successful!", "success");
          localStorage.setItem("user", JSON.stringify(responseData.data));
          navigate("/");
        } else {
          if (responseData && responseData.error.includes("Invalid password")) {
            // Display a specific error message for duplicate email
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "This Password is already registered. Please use a different email.",
            });
          }
          const errorText =
            responseData.error || "Login failed. Please try again.";
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: errorText,
          });
        }
      } else {
        const errorText = "Login failed. Please try again.";

        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorText,
        });
      }
    } catch (error) {
      console.error("API request error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
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
      <form onSubmit={handleSignIn}>
        <Container maxWidth="sm">
          <SignInBox>
            <Container>
              <Typography
                sx={{
                  fontSize: "23px",
                  color: "var(--purple-color)",
                  fontWeight: "600",
                }}
              >
                Agent Sign In
              </Typography>
              <Box sx={{ marginTop: "23px" }}>
                {/* Email Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "19px",
                    borderBottom: "1px solid var(--grey-color)",
                    textAlign: "left",
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

                {/* Password Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    marginTop: "31px",
                    gap: "19px",
                    borderBottom: "1px solid var(--grey-color)",
                    textAlign: "left",
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
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "var(--purple-color)",
                  textAlign: "left",
                  marginTop: "31px",
                  fontWeight: "600",
                }}
              >
                Forgot Password?
              </Typography>
              <Box sx={{ marginTop: "53px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    bgcolor: "var(--purple-color)",
                    color: "var(--white-color)",
                    boxShadow: "none",
                    "&:hover": {
                      background: "var(--hover-purple-color)",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: "21px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                <span style={{ color: "var(--purple-color)" }}>
                  {" "}
                  Don’t have an Account?
                </span>{" "}
                <span style={{ color: "var(--grey-color)" }}>
                  {" "}
                  <Link to="/signup">Sign Up</Link>
                </span>
              </Typography>
            </Container>
          </SignInBox>
        </Container>
      </form>
    </Box>
  );
};

export default Signin;
