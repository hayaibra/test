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
            <img src={require("../../images/Vector.png")} alt="vector" />
          </SignImageBox>
          <SignTitle>Sign out</SignTitle>
        </SignBox>
      </SidebarContent>
    </SidebarBox>
  );
};

export default Sidebar;
