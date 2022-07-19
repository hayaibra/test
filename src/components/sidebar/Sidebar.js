import React from "react";
import NavbarGroup from "./navbargroup/NavbarGroup";
import { SidebarBox, SignBox, SignImageBox, SignTitle } from "./Style";

const Sidebar = () => {
  return (
    <SidebarBox>
      <NavbarGroup />
      <SignBox>
        <SignImageBox>
          <img src={require("../../images/Vector.png")} />
        </SignImageBox>
        <SignTitle>Sign out</SignTitle>
      </SignBox>
    </SidebarBox>
  );
};

export default Sidebar;
