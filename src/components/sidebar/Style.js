import { Box, styled } from "@mui/material";

export const SidebarBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  width: "208px",
  height: "768px",
  left: "0px",
  top: "0px",
  borderRadius: "0 16px 16px 0",
  borderWidth: "0 1px 1px 0 ",
  borderRightColor: theme.palette.secondary.main,
  borderBottomColor: theme.palette.secondary.main,
  borderStyle: "solid",
}));

export const SignBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  width: "88px",
  height: "21px",
  top: "702px",
  left: "46px",
  right: "74px",
  bottom: "45px",
  backgroundClip: "red",
}));

export const SignImageBox = styled(Box)(({ theme }) => ({
  width: "21px",
  height: "21px",
  position: "absolute",
  marginRight:'8px',
  left: "8px",
}));

export const SignTitle = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "19px",
  position: "absolute",
  right: "0",
  color: theme.palette.thirdcolor.main,
  fontSize: "14px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  lineHeight: "19px",
}));
