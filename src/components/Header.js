import React from "react";

import AccessAlarmIconRounded from "@material-ui/icons/AccessAlarm";
import { Box } from "@material-ui/core";
import AuthenticationButton from "./authentication-button";

const Header = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <div>nudge.</div>
      <div>
        <AuthenticationButton />
        <AccessAlarmIconRounded color="primary" />
      </div>
    </Box>
  );
};

export default Header;
