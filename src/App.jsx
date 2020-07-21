import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Scrollbars from "@components/Scrollbar";
import Login from "@components/Login";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.less";

import routers from "./pages";

let theme = createMuiTheme({
  overrides: {
    MuiList: {
      root: {
        backgroundColor: "transparent !important",
      },
    },
    MuiPaper: {
      // 规则的名字
      root: {
        // 一些 CSS
        backgroundColor: "rgba(255,255,255,0.1)",
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#071021",
    },
    secondary: {
      main: "#19324a",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

theme = responsiveFontSizes(theme);
theme.typography.subtitle1 = {
  fontSize: "1.4rem",
  fontWeight: 500,
  "@media (min-width:600px)": { fontSize: "1.5rem" },
  "@media (min-width:960px)": { fontSize: "1.6rem" },
  "@media (min-width:1280px)": { fontSize: "1.6rem" },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Scrollbars>
        <Switch>
          {routers.map(({ path, component: Com }) => (
            <Route key={path} exact path={path}>
              <Com />
            </Route>
          ))}
          <Route exact path="/404">
            404
          </Route>
          <Route>
            <Redirect to="404" />
          </Route>
        </Switch>
      </Scrollbars>
      <Login />
    </ThemeProvider>
  );
};

export default App;
