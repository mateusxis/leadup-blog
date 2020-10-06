import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33e3c5",
      main: "#00dcb7",
      dark: "#009a80",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#33437f",
      main: "#00145f",
      dark: "#000e42",
      contrastText: "#ffffff",
    },
    error: {
      light: "#e33333",
      main: "#dc0000",
      dark: "#9a0000",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Calibri",
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

export default theme;

// {
//   colors: {
//     alert: "#DC0000",
//     background: "#FFFFFF",
//     primary: "#00DCB7",
//     secondary: "#00145F",
//     shadow: "#00000029",
//     support: "#707070",
//   },
//   typography: {
//     h1: {
//       fontFamily: "Calibri",
//       fontSize: "28px",
//       fontStretch: "normal",
//       fontStyle: "normal",
//       fontWeight: "bold",
//       letterSpacing: "normal",
//       lineHeight: 1,
//     },
//     h2: {
//       fontFamily: "Calibri",
//       fontSize: "25px",
//       fontStretch: "normal",
//       fontStyle: "normal",
//       fontWeight: "bold",
//       letterSpacing: "normal",
//       lineHeight: 1,
//     },
//     h3: {
//       fontFamily: "Calibri",
//       fontSize: "14px",
//       fontStretch: "normal",
//       fontStyle: "normal",
//       fontWeight: "bold",
//       letterSpacing: "normal",
//       lineHeight: 1,
//     },
//     hero: {
//       fontFamily: "Calibri",
//       fontSize: "50px",
//       fontStretch: "normal",
//       fontStyle: "normal",
//       fontWeight: "bold",
//       letterSpacing: "normal",
//       lineHeight: 1,
//     },
//     p1: {
//       fontFamily: "Calibri",
//       fontSize: "20px",
//       fontStretch: "normal",
//       fontStyle: "normal",
//       fontWeight: "normal",
//       letterSpacing: "normal",
//       lineHeight: 1.43,
//     },
//     p2: {
//       fontFamily: "Calibri",
//       fontSize: "14px",
//       fontStretch: "normal",
//       fontStyle: "normal",
//       fontWeight: "normal",
//       letterSpacing: "normal",
//       lineHeight: 1,
//     },
//     label: {
//       fontFamily: "Calibri",
//       fontSize: "11px",
//       fontStretch: "normal",
//       fontStyle: "normal",
//       fontWeight: "normal",
//       letterSpacing: "normal",
//       lineHeight: 1,
//     },
//   },
// };
