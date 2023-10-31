import { Box, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
function valuetext(value) {
  return `${value}°C`;
}
const SliderRange = ({
  newMinPrice,
  newMaxPrice,
  priceRange,
  setPriceRange,
}) => {
  const [value, setValue] = React.useState([newMinPrice, newMaxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPriceRange(newValue);
  };

  return (
    <Box>
      <Slider
        sx={{ color: "var(--purple-color)" }}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={newMinPrice}
        max={newMaxPrice}
      />
    </Box>
  );
};

export default SliderRange;
