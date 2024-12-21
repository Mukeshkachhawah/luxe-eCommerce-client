import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types"; // Prop validation for better type safety
import "./Section.css";

const Section = ({ title, pagePath }) => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Title and description */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Very us move be blessed multiply night
        </Typography>
      </Box>
      {/* Page Path */}
      <Box sx={{ paddingLeft: 1 }}>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {pagePath}
        </Typography>
      </Box>

      {/* Decorative Box */}
      <Box
        sx={{
          marginTop: 4,
          height: "2px",
          backgroundColor: "primary.main", // You can customize this color in the theme
          width: "100%",
        }}
      />
    </Box>
  );
};

// Prop validation for type safety
Section.propTypes = {
  title: PropTypes.string.isRequired,
  pagePath: PropTypes.string.isRequired,
};

export default Section;
