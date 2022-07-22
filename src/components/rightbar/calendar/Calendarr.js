import React from "react";
import "./Calendar.css";
import Calendar from "react-calendar";
import { Box, styled } from "@mui/material";

const InnerCalendarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "328px",
  [theme.breakpoints.only("xs")]: {
    padding: "20px",
  },
}));

const Calendarr = () => {
  return (
    <InnerCalendarBox>
      <Calendar sx={{ width: "328px", height: "257px" }} />
    </InnerCalendarBox>
  );
};

export default Calendarr;
