import React from "react";
import PropTypes from "prop-types";

import AccessAlarmIconRounded from "@material-ui/icons/AccessAlarm";
import { Box } from "@material-ui/core";

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
        <AccessAlarmIconRounded color="primary" />
      </div>
    </Box>
  );
};

Header.propTypes = {};

export default Header;
