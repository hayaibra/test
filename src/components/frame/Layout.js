import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";
import { FrameBox } from "./Style";

export const Layout = () => {
  return (
    <FrameBox direction="row" spacing={2}>
      <Sidebar />
      <Feed />
      <Rightbar />
    </FrameBox>
  );
};
