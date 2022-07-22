import { Box, styled } from "@mui/material";

export const SidebarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));

export const SidebarContent = styled(Box)({
  height: "100vh",
  borderRadius: "0 16px 16px 0",
  borderWidth: "0 1px 1px 0 ",
  borderRightColor: "#BF953F",
  borderBottomColor: "#BF953F",
  borderStyle: "solid",
  backgroundColor: "#FEFEFE",
  borderLeft: "1px solid rgba(191, 149, 63, 0.51)",
  width: "208px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 11,
});

export const SignBox = styled(Box)(({ theme }) => ({
  // position: "absolute",
  display: "flex",
  // width: "88px",
  height: "21px",
  justifyContent: "center",

  // top: "702px",
  // left: "46px",
  // right: "74px",
  // bottom: "45px",
  margin: "auto",
  backgroundClip: "red",
}));

export const SignImageBox = styled(Box)(({ theme }) => ({
  width: "21px",
  height: "21px",
  // position: "absolute",
  marginRight: "8px",
  // left: "8px",
}));

export const SignTitle = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "19px",
  // position: "absolute",
  // right: "0",
  color: theme.palette.thirdcolor.main,
  fontSize: "14px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  lineHeight: "19px",
}));
