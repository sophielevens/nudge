import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./lib/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.NUDGE_AUTH_DOMAIN
const clientId = process.env.NUDGE_APP_AUTH_CLIENT_ID

ReactDOM.render(
  <Router>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </Auth0Provider>
  </Router>,
  document.getElementById("root")
);
