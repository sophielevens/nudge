import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./lib/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH_DOMAIN
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
          <App />
        </Auth0Provider>
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
