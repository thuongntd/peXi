import { Box } from "@mui/system";
import * as React from "react";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(170, 229, 236, 0.5)",
        color: "rgb(51 51 51)",
        fontWeight: "bold",
        textTransform: "uppercase",
        lineHeight: 1.2,
      }}
    >
      Footer ne
    </Box>
  );
};
