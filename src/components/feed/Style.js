import { Box, styled, Typography } from "@mui/material";

export const FeedBox = styled("div")(({ theme }) => ({
  backgroundColor: "#f5efe2",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  flex: 6,
  // width: { xs: "100%" },
  // backgroundColor: "#f5efe2",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f5efe2",
  },
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 2,
}));

export const FirstBoxContent = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5efe2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "507px",
  [theme.breakpoints.only("sm")]: {
    width: "507px",
    padding: "34px 23px",
  },
  // [theme.breakpoints.only("lg")]: {
  //   width: "507px",

  // },
}));

export const Boxy = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    width: "86%",
    position: "absolute",
    top: "80px",
  },
}));
export const AnalisticContent = styled(Box)(({ theme }) => ({
  marginTop: "26px",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    position: "absolute",
    top: "43%",
  },
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  padding: "3px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",
  [theme.breakpoints.only("xs")]: {
    paddingLeft: "10px",
  },
}));

export const UpComingBox = styled(Box)(({ theme }) => ({
  width: "145px",
  height: "94px",
  padding: "10px 0 0 16px",
  background:
    "linear-gradient(0deg, #FFFFFF, #FFFFFF), radial-gradient(143.86% 887.35% at -10.97% -22.81%, #F9F4ED 0%, #FFFFFF 100%)",
  boxShadow: "0px 4.74877px 17.8079px rgba(211, 182, 107, 0.2)",
  backdropFilter: "blur(124.655px)",
  borderRadius: "12px",
  overflow: "hidden",
  marginRight: "16px",
  position: "relative",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    marginBottom: "16px",
  },
}));

export const TitleUpComing = styled(Box)({
  width: "90.17px",
  height: "34px",
  // position: "absolute",
  // top: "10px",
  // left: "15.84px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  marginBottom: "6px",
});

export const NumberBox = styled(Box)({
  width: "56.05px",
  height: "24px",
  // position: "absolute",
  // left: "18.93px",
  // bottom: "20px",
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "36px",
  textAlign: "center",
});

export const SecurityImageBox = styled(Box)({
  width: "64.07px",
  height: "76.84px",
  position: "absolute",
  bottom: "-10px",
  right: "0",
});

export const EllipseImageBox = styled(Box)({
  width: "21.82px",
  height: "17.91px",
  position: "absolute",
  top: "25px",
  right: "25px",
});

export const EarningBox = styled(Box)(({ theme }) => ({
  width: "299px",
  height: "94px",
  // position: "absolute",
  // top: "122px",
  // right: "18px",
  background:
    "linear-gradient(0deg, #FFFFFF, #FFFFFF), radial-gradient(143.86% 887.35% at -10.97% -22.81%, #F9F4ED 0%, #FFFFFF 100%)",
  boxShadow: "0px 4.74877px 17.8079px rgba(211, 182, 107, 0.2)",
  backdropFilter: "blur(124.655px)",
  borderRadius: "12px",
  overflow: "hidden",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
  },
}));

export const TitleEaring = styled(Box)({
  // width: "115px",
  // height: "21px",
  // position: "absolute",
  // top: "11px",
  // left: "20px",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "21px",
  fontStyle: "normal",
  padding: "5px 0 0 20px",
  marginBottom: "13px",
});

export const PercentageBox = styled(Box)({
  // width: "29px",
  // height: "10px",
  // position: "absolute",
  // top: "13px",
  // right: "16.02px",
  display: "flex",
  paddingRight: "14px",
});

export const PercenteNumber = styled(Box)({
  width: "23px",
  height: "100%",
  color: "#54CC8B",
  fontFamily: "Montserrat",
  fontWeight: 600,
  fontSize: "8px",
  lineHeight: "10px",
});

export const UpIcon = styled(Box)({
  width: "5.8px",
  height: "5.15px",
  // position: "absolute",
  // right: "0",
  // top: "-10px",
});

export const MoneyBox = styled(Box)({
  // width: "119px",
  // height: "36px",
  // position: "absolute",
  // top: "45px",
  // left: "19px",
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "36px",
  paddingLeft: "20px",
});

export const CFBox = styled(Box)({
  width: "496.72px",
  height: "140.4px",
  // position: "absolute",
  // top: "12.8px",
  // left: "-2px",
});

export const PointIcon = styled(Box)({
  width: "10px",
  height: "10px",
  // position: "absolute",
  // top: "29px",
  // left: "255.98px",
});

export const VectorOne = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: "-21px",
  left: "-5px",
  [theme.breakpoints.only("xs")]: {
    bottom: "-20px",
    left: "-1px",
    width: "100%",
  },
}));

export const VectorTwo = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: "-19px",
  left: "-4px",
  [theme.breakpoints.only("xs")]: {
    bottom: "-19px",
    left: "1px",
    width: "100%",
  },
}));

export const AnalisticBox = styled(Box)(({ theme }) => ({
  width: "458px",
  height: "279px",
  // position: "absolute",
  // top: "281px",
  // right: "22px",
  marginTop: "9px",
  background: "#FFFFFF",
  boxShadow: "0px 5px 13px rgba(191, 149, 63, 0.21)",
  borderRadius: "10px",
  padding: "16.12px 9.58px",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // flexDirection: "column",

  [theme.breakpoints.only("xs")]: {
    width: "84%",
    margin: "auto",
  },
}));

export const ChartOne = styled(Box)({
  paddingLeft: "3.29px",
});

export const MoneyFlow = styled(Box)({
  // position: "absolute",
  // left: "2.99%",
  // right: "79.11%",
  // top: "5.78%",
  // bottom: "86.7%",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "21px",
  color: "#141736",
  width: "88px",
  marginBottom: "12.24px",
});

export const NavBar = styled(Box)({
  // position: "absolute",
  // left: "2.99%",
  // right: "85.72%",
  // top: "17.69%",
  // bottom: "77.29%",
});

export const FilterButton = styled(Box)({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "8px",
  gap: "10px",
  width: "54.89px",
  height: "28.2px",
  // position: "absolute",
  visibility: "hidden",
  // left: "360.42px",
  // right: "13.69px",
  // top: "-9px",
  backgroundColor: "blue",
  borderRadius: "8px",
});

export const Porcent = styled(Box)({
  // position: "absolute",
  // left: "2.99%",
  // right: "85.72%",
  // top: "17.69%",
  // bottom: "77.29%",
  backgroundColor: "white",
  height: "14px",
  width: "51.7px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "0.83px",
});

export const PorcentValue = styled(Typography)({
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: "10.2375px",
  lineHeight: "14px",
  color: "#BF953F",
  marginLeft: "6.47px",
});

export const ChartTwo = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "5px",
  height: "156.57px",
  zIndex: 0,
  width: "404.11px",
  bottom: "0",
  marginBottom: "5.42px",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
  },
}));

export const VectorBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  overflow: "hidden",
  [theme.breakpoints.only("xs")]: {
    width: "92%",
    right: "0",
  },
}));

export const VectorTop = styled("img")(({ theme }) => ({
  width: "100%",
  bottom: "32px",
  position: "absolute",
  [theme.breakpoints.only("xs")]: {
    bottom: "22px",
  },
}));

export const VectorBottom = styled("img")({
  position: "relative",
  width: "100%",
  bottom: "-13px",
});

export const Money = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px",
  gap: "26px",
  position: "absolute",
  left: "0",
  // right: "94.67%",
  top: "18px",
  bottom: "5.8%",
  width: "11.53px",
});

export const MoneyValue = styled(Typography)({
  width: "11.53px",
  height: "9.85px",
  fontFamily: "Manrope",
  fontWeight: 600,
  fontSize: "7.3125px",
  lineHeight: "10px",
  color: "#AA771C",
});

export const Month = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "0px",
  gap: "19px",
  position: "absolute",
  left: "7.8%",
  bottom: "-9px",
  // right: "2.09%",
  // top: "103.34%",
  width: "394px",
  height: "8.6px",
  [theme.breakpoints.only("xs")]: {
    gap: "9px",
    left: "14.8px",
    width: "100%",
  },
}));

export const MonthValue = styled(Typography)(({ theme }) => ({
  height: "17.4px",
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: "7.3125px",
  lineHeight: "10px",
  color: "#AA771C",
  [theme.breakpoints.only("xs")]: {
    fontSize: "5.3125px",
  },
}));

export const Line = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "5px",
  bottom: "50.55px",
  width: "404.11px",
  height: "113.94px",
  [theme.breakpoints.only("xs")]: {
    width: "92%",
  },
}));

export const LineDot = styled("img")(({ theme }) => ({
  position: "absolute",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
  },
}));

export const ChartThree = styled(Box)(({ theme }) => ({
  width: "435.56px",
  height: "186.34px",
  position: "relative",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
  },
}));

export const Mark = styled(Box)({
  position: "absolute",
  left: "26.34%",
  right: "60.26%",
  top: "51.62%",
  bottom: "33.57%",
  zIndex: 10,
});

export const Ellipse = styled(Box)({
  position: "absolute",
  left: "42.01%",
  right: "64.49%",
  top: "51.54%",
  bottom: "33.57%",
});

export const MarkValue = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: "10px",
  lineHeight: "14px",
  color: "#AA771C",
  position: "absolute",
  top: "0px",
  left: "11px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "8px",
  },
}));

export const Union = styled("img")(({ theme }) => ({
  top: "-17px",
  position: "absolute",
  left: "-7px",
  [theme.breakpoints.only("xs")]: {
    left: "-13px",
  },
}));

export const GroupBox = styled(Box)(({ theme }) => ({
  marginTop: "24px",
  display: "flex",
  [theme.breakpoints.only("xs")]: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export const Total = styled(Box)(({ theme }) => ({
  // position: "absolute",
  width: "222px",
  height: "150px",
  // left: "233px",
  // top: "584px",
  filter: "drop-shadow(0px 5px 13px rgba(191, 149, 63, 0.21))",
  borderRadius: "12px",
  background:
    "linear-gradient(0deg, #FFFFFF, #FFFFFF), radial-gradient(143.86% 887.35% at -10.97% -22.81%, #F9F4ED 0%, #FFFFFF 100%)",
  boxShadow: "0px 4.74877px 17.8079px rgba(211, 182, 107, 0.2)",
  backdropFilter: "blur(124.655px)",
  padding: "6px 15.23px",
  [theme.breakpoints.only("xs")]: {
    marginRight: "0",
    width: "85%",
    marginBottom: "16px",
    height: "119px",
  },
}));

export const TotalTitle = styled(Box)({
  // position: "absolute",
  width: "107px",
  height: "21px",
  // left: "15.23px",
  // top: "17px",
  paddingTop: "11px",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#000000",
});

export const MonthlyBox = styled(Box)({
  position: "absolute",
  width: "118.01px",
  height: "72px",
  left: "14px",
  top: "34px",
  marginTop: "11px",
});

export const MonthlyValue = styled(Typography)({
  position: "absolute",
  width: "118.01px",
  height: "72px",
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "36px",
  textHlign: "center",
  color: "#D0B165",
});

export const AED = styled("span")({
  fontSize: "18px",
  color: "black",
  fontWeight: 500,
  position: "absolute",
  marginLeft: "2px",
});

export const Addition = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "30px",
  top: "37px",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "15px",
  textAlign: "center",
  color: "#33891E",
  [theme.breakpoints.up("sm")]: {
    width: "107.46px",
  },
}));

export const OrderNumber = styled(Typography)(({ theme }) => ({
  position: "absolute",
  width: "49px",
  height: "38px",
  right: "13px",
  top: "17px",
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#BF953F",
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));

export const MonthlyText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  width: "102px",
  height: "36px",
  right: "16.48px",
  bottom: "6px",
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "36px",
  textAlign: "center",
  color: "#D0B165",
  [theme.breakpoints.only("xs")]: {
    bottom: "13px",
  },
}));
