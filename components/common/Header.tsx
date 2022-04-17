import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "rgba(170, 229, 236, 0.5)",
        color: "rgb(51 51 51)",
        fontWeight: "bold",
        textTransform: "uppercase",
        lineHeight: 1.2,
      }}
    >
      <Box
        className="container"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box></Box>
        <Box
          display="flex"
          alignItems="center"
          fontSize="13px"
          sx={{
            "& a": {
              display: "inline-block",
              p: 1,
              mx: 1.5,
            },
          }}
        >
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/about">
            <a>About Me</a>
          </Link>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
