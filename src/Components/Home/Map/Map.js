import { Box } from "@mui/material";
import React from "react";

const Map = () => {
  return (
    <Box sx={{ marginTop: "294px" }}>
      <iframe
        style={{ width: "100%" }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.676940441628!2d90.42276374999999!3d23.82147085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696413802087!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
