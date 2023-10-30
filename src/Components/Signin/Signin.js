import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

const Signin = () => {
  const SignInBox = styled(Box)({
    background: "var(--white-color)",
    height: "429px",
    width: "100%",
    textAlign: "center",
    borderRadius: "11px",
    padding: "34px",
  });

  return (
    <Box
      sx={{
        paddingTop: "132px",
        paddingBottom: "278px",
      }}
    >
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
    </Box>
  );
};

export default Signin;
