import React from "react";

import UserNavigation from "./UserNavigation";
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
        <Typography variant="h6" color="textSecondary">
          {"nudge."}
        </Typography>
      </Box>
      <UserNavigation />
    </Box>
  );
};

export default Header;
