import React from "react";
import {
  NavbarContent,
  NavBox,
  IconBox,
  NavTitle,
  NavTitleDashboard,
} from "./Style";
import { Box, Typography } from "@mui/material";

const NavbarGroup = () => {
  return (
    <NavbarContent>
      <NavBox>
        <IconBox>
          <img src={require("../../../images/Category.png")} alt="category" />
        </IconBox>
        <NavTitleDashboard>Dashboard</NavTitleDashboard>
      </NavBox>
      <NavBox>
        <IconBox>
          <img src={require("../../../images/Activity.png")} alt="activity" />
        </IconBox>
        <NavTitle>Reports</NavTitle>
      </NavBox>
      <NavBox>
        <IconBox>
          <img src={require("../../../images/Bag 2.png")} alt="bag-2" />
        </IconBox>
        <NavTitle>Orders</NavTitle>
      </NavBox>
      <NavBox sx={{ top: "159px" }}>
        <IconBox sx={{ right: "98px" }}>
          <img src={require("../../../images/Calendar.png")} alt="calendar" />
        </IconBox>
        <NavTitle sx={{ right: "10px" }}>Calendar</NavTitle>
      </NavBox>
      <NavBox sx={{ top: "212px" }}>
        <IconBox>
          <img src={require("../../../images/3 User.png")} alt="3-user" />
        </IconBox>
        <NavTitle>Team</NavTitle>
      </NavBox>
      <NavBox sx={{ top: "265px" }}>
        <IconBox>
          <img src={require("../../../images/Setting.png")} alt="Setting" />
        </IconBox>
        <NavTitle>Settings</NavTitle>
      </NavBox>
    </NavbarContent>
  );
};

export default NavbarGroup;
