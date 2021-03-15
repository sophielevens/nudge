import React from "react";

import Navigation from "./Navigation";
import { Box, Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box>
        <Typography>{"nudge"}</Typography>
      </Box>

      <Navigation />
    </Box>
  );
};

export default Header;
