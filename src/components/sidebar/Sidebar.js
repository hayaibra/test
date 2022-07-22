import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import NavbarGroup from "./navbargroup/NavbarGroup";
import {
  SidebarBox,
  SidebarContent,
  SignBox,
  SignImageBox,
  SignTitle,
} from "./Style";

const Sidebar = () => {
  return (
    <SidebarBox>
      <SidebarContent>
        <NavbarGroup />
        <SignBox>
          <SignImageBox>
            <img src={require("../../images/Vector.png")} />
          </SignImageBox>
          <SignTitle>Sign out</SignTitle>
        </SignBox>
      </SidebarContent>
    </SidebarBox>
  );
};

export default Sidebar;
