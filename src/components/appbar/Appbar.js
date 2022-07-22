import { AppBar, Avatar, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import NavbarGroup from "../sidebar/navbargroup/NavbarGroup";
import Sidebar from "../sidebar/Sidebar";
import { SignBox, SignImageBox, SignTitle } from "../sidebar/Style";
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
          <Box
            sx={{
              // position: "fixed",
              height: "100vh",
              // flexBasis: "209px",
              borderRadius: "0 16px 16px 0",
              borderWidth: "0 1px 1px 0 ",
              borderRightColor: "#BF953F",
              borderBottomColor: "#BF953F",
              borderStyle: "solid",
              // zIndex: 2,
              backgroundColor: "#FEFEFE",
              // display: "flex",
              borderLeft: "1px solid rgba(191, 149, 63, 0.51)",
              width: "208px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
          </Box>
        )}
      </ToolbarBox>
    </AppBar>
  );
};

export default Appbar;
