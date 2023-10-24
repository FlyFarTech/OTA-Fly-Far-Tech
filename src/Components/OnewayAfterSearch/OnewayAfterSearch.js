import React from "react";

import { Box, Container, Grid } from "@mui/material";
import AfterSearchBox from "../AfterSearchBox/AfterSearchBox";
import AirSearchFilter from "../AirSearchFilter/AirSearchFilter";

const OnewayAfterSearch = () => {
  return (
    <>
      <Box>
        <AfterSearchBox />
        <Container sx={{ marginTop: "34px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={3}>
              {/* filter search area */}
              <AirSearchFilter />
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              {/*All flights area */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OnewayAfterSearch;
