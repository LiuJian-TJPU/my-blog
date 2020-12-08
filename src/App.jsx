import React, { Component } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { ConfigProvider } from "antd";
import zh_CN from "antd/es/locale/zh_CN";
import Layout from "@components/Layout";
import Login from "@components/Login";

import {
  actionToggleLogin,
  actionAsyncLoginCheck,
  actionAsyncGetUserInfo,
} from "@models/user";

// import auth from "@utils/authing";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.less";
import "@common/vue.css";

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

@connect(
  ({ user }) => ({
    user,
  }),
  {
    actionAsyncGetUserInfo,
  }
)
class App extends Component {
  componentDidMount() {
    this.props.actionAsyncGetUserInfo();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ConfigProvider locale={zh_CN}>
          <Layout>
            <Switch>
              {routers.map(({ path, component }) => (
                <Route key={path} exact path={path} component={component} />
              ))}
            </Switch>
          </Layout>
          <Login />
        </ConfigProvider>
      </ThemeProvider>
    );
  }
}

export default App;
