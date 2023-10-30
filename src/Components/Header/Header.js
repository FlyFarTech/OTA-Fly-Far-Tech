import styled from "@emotion/styled";
import { Box, Button, Container } from "@mui/material";
import React from "react";
import Logopic from "../../logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  let Navbar = styled(Box)({
    background: "var(--white-color)",

    padding: " 25px 0",
  });

  let Logo = styled(Box)({});
  let HeaderButtons = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "7px",
  });
  return (
    <>
      <Navbar>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",

            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Logo>
              <img src={Logopic} alt="Logo" />
            </Logo>
          </Link>

          <HeaderButtons sx={{ marginTop: { xs: "12px", sm: "" } }}>
            <Link to="/signin">
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  textTransform: "capitalize",
                  bgcolor: "var(--purple-color)",
                  fontWeight: "700",
                  "&:hover": {
                    background: "var(--hover-purple-color)",
                  },
                }}
              >
                Agent Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  textTransform: "capitalize",
                  bgcolor: "var(--purple-color)",
                  fontWeight: "700",
                  "&:hover": {
                    background: "var(--hover-purple-color)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Link>
          </HeaderButtons>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
