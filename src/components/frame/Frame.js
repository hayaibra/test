import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/Feed";
import { Box, Stack } from "@mui/material";
import { FrameBox } from "./Style";
import Rightbar from "../rightbar/Rightbar";

const Frame = () => {
  return (
    <Stack direction="row" sx={{flexWrap:"wrap"}}>
      <Rightbar />
      <Feed />
    </Stack>
  );
};

export default Frame;
