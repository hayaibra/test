import React from "react";
import Appbar from "../appbar/Appbar";
import Feed from "../feed/Feed";
import Sidebar from "../sidebar/Sidebar";
import { LayoutBox } from "./Style";

const Layout = () => {
  return (
    <LayoutBox>
      <Appbar />
      <Sidebar />
      <Feed />
    </LayoutBox>
  );
};

export default Layout;
