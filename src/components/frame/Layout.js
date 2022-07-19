import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";
import { FrameBox } from "./Style";

export const Layout = () => {
  return (
    <FrameBox direction="row" sx={{ width: "715px", height: "768px" }}>
      <Sidebar />
      <Feed />
    </FrameBox>
  );
};
