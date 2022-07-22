import { AppBar, Avatar, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import NavbarGroup from "../sidebar/navbargroup/NavbarGroup";
import Sidebar from "../sidebar/Sidebar";
import {
  SidebarContent,
  SignBox,
  SignImageBox,
  SignTitle,
} from "../sidebar/Style";
import { ImageBox, ToolbarBox } from "./Style";

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      color="othercolor"
      elevation={0}
      sx={{ display: { xs: "block", sm: "none" } }}
      position="fixed"
    >
      <ToolbarBox>
        <ImageBox onClick={handleClick}>
          <img
            src={require("../../images/Category.png")}
            width="40px"
            height="40px"
            alt="logo"
          />
        </ImageBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../../images/notification-alert-svgrepo-com.png")}
            width="30px"
            height="30px"
            style={{ marginRight: "10px" }}
          />
          <Avatar sx={{ bgcolor: "#D9D9D9", width: "40px", height: "40px" }} />
        </Box>
        {open && (
          <SidebarContent
            sx={{
              position: "absolute",
              left: "0",
              top: "80px",
            }}
          >
            <NavbarGroup sx={{ marginBottom: "200px" }} />
            <SignBox sx={{ marginBottom: "30px" }}>
              <SignImageBox>
                <img src={require("../../images/Vector.png")} />
              </SignImageBox>
              <SignTitle>Sign out</SignTitle>
            </SignBox>
          </SidebarContent>
        )}
      </ToolbarBox>
    </AppBar>
  );
};

export default Appbar;
