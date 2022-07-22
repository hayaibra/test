import { styled, Box } from "@mui/material";

export const LayoutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexdirection: "row",
  backgroundColor: "#f5efe2",
  [theme.breakpoints.only("xs")]: {
    flexdirection: "column",
  },
}));
