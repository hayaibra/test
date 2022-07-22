import { Box } from "@mui/material";
import React from "react";
import Appbar from "../appbar/Appbar";
import Feed from "../feed/Feed";
import Frame from "../frame/Frame";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import { LayoutBox } from "./Style";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexdirection: { xs: "column", sm: "row" },
        // justifyContent: "space-between",
        backgroundColor: "#f5efe2",
      }}
    >
      <Appbar />
      <Sidebar />
      <Feed />
      {/*<Rightbar/>*/}
    </Box>
  );
};

export default Layout;
