import { Box, styled } from "@mui/material";

export const NavbarContent = styled(Box)({
  position: "absolute",
  width: "169px",
  height: "333px",
  top: "132px",
  right: "40px",
  bottom: "303px",
});

export const NavBox = styled(Box)({
  backgroundColor: "#FFFFFF",
  width: "158px",
  height: "68px",
  position: "absolute",
  display: "flex",
  alignItems: "center",
});

export const IconBox = styled(Box)({
  width: "24px",
  height: "24px",
  position: "absolute",
  top: "18px",
  left: "46px",
  bottom: "26px",
  right: "88px",
});

export const NavTitleDashboard = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "17px",
  position: "absolute",
  left: "78px",
  top: "21.5px",
  bottom: "29.5px",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "21px",
  color: theme.palette.primary.contrastText,
}));

export const NavTitle = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "17px",
  position: "absolute",
  left: "78px",
  top: "21.5px",
  bottom: "29.5px",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "21px",
  color: theme.palette.secondary.contrastText,
}));
