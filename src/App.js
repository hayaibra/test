import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/layout/Layout";
import "./App.css";

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
    othercolor: {
      main: "#f5efe2b5",
    },
    spacing: "0",
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
