import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";
import Logopic from "../../logo.png";
const Header = () => {
  let Navbar = styled(Box)({
    background: "var(--white-color)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
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
        <Logo>
          <img src={Logopic} alt="Logo" />
        </Logo>

        <HeaderButtons>
          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              textTransform: "capitalize",
              bgcolor: "var(--purple-color)",
              fontWeight: "700",
            }}
          >
            Agent Sign In
          </Button>
          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              textTransform: "capitalize",
              bgcolor: "var(--purple-color)",
              fontWeight: "700",
            }}
          >
            Sign In
          </Button>
        </HeaderButtons>
      </Navbar>
    </>
  );
};

export default Header;
