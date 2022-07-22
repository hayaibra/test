import { Avatar, Box, Stack, styled, Typography } from "@mui/material";

export const RightbarBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FEFEFE",
  paddingTop: "4.84px",
  filter: "drop-shadow(0px 4.74877px 17.8079px rgba(211, 182, 107, 0.2))",
  borderRadius: "0 12px 12px 0",
  flex: 1,
  [theme.breakpoints.only("sm")]: {
    borderRadius: "12px",
    width: "507px",
    marginTop: "28px",
  },
  [theme.breakpoints.only("xs")]: {
    width: "87%",
    borderRadius: "12px",
    marginBottom: "30px",
    // bottom: 0;
    top: "1000px",
    position: "relative",
  },
}));

// export const RightbarContent = styled(Box)(({ theme }) => ({

//   [theme.breakpoints.only("xs")]: {
//     width: "87%",
//     borderRadius: "12px",
//     marginBottom: "30px"
//   },
// }));

export const AlertBox = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 23px  4px 33px",
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));

export const Alert = styled(Box)({
  width: "31px",
  height: "29.53px",
});

export const UserBox = styled(Avatar)({
  bgcolor: "#D9D9D9",
  width: "40px",
  height: "40px",
});

export const CalendarBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Rating = styled(Box)(({ theme }) => ({
  marginTop: "3px",
  paddingRight: "40px",
  display: "flex",
  position: "relative",
  width: "311px",
  height: "566px",
  margin: "auto",
  [theme.breakpoints.only("xs")]: {
    padding: "20px",
    width: "85vw",
  },
  [theme.breakpoints.only("sm")]: {
    marginLeft: "81px",
  },
}));

export const TimeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.8px",
  marginRight: "20px",
  alignItems: "flex-start",
  paddingLeft: "10px",
  [theme.breakpoints.only("xs")]: {
    paddingLeft: "0",
  },
}));

export const Time = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "7px",
  lineHeight: "22px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  letterSpacing: "0.22px",
  color: "#000000",
  width: "31px",
}));

export const LineBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "90%",
  [theme.breakpoints.up("xs")]: {
    width: "85%",
  },
}));

export const Line = styled(Box)(({ theme }) => ({
  height: "22.79px",
  width: "249px",
  borderTop: "1px solid #D9D9D9",
  // [theme.breakpoints.up("sm")]: {
  //   width: "317px",
  // },
}));

export const OrderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: "50px",
  height: "500px",
  // width: "317px",
  width: "256px",
  [theme.breakpoints.only("sm")]: {
    left: "61px",
  },
  [theme.breakpoints.only("xs")]: {
    left: "70px",
    width: "73%",
  },
}));

export const OrderOne = styled(Box)(({ theme }) => ({
  width: "260px",
  height: "113.41px",
  backgroundColor: "#f5efe2b5",
  marginBottom: "24px",
  [theme.breakpoints.only("xs")]: {
    height: "107.41px",
    marginBottom: "19px",
  },
}));

export const ColorBox = styled(Box)({
  width: "28.78px",
  height: "100%",
});

export const DeliveryText = styled(Box)({
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "10px",
  lineHeight: "16px",
  position: "absolute",

  left: "34px",
});
