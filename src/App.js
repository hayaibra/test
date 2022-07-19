import React from "react";
import { Layout } from "./components/frame/Layout";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const outertheme = createTheme({
  palette: {
    primary: {
      main: "#FEFEFE",
      contrastText: "#39354E",
    },
    secondary: {
      main: "#BF953F",
      contrastText: "#BAC0C7",
    },
    thirdcolor: {
      main: "#BF953F",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={outertheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
