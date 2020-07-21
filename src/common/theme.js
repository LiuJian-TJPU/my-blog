import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
let theme = createMuiTheme({
  palette: {
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

export const Light = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
