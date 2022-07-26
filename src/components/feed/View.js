import { Box } from "@mui/system";
import React from "react";
import {
  Addition,
  AnalisticBox,
  AnalisticContent,
  AED,
  Boxy,
  CFBox,
  ChartOne,
  ChartThree,
  ChartTwo,
  EarningBox,
  EarningBoxContent,
  Ellipse,
  EllipseImageBox,
  FirstBox,
  FirstBoxContent,
  GroupBox,
  Line,
  LineDot,
  Mark,
  MarkValue,
  Money,
  MoneyBox,
  MoneyFlow,
  MoneyValue,
  Month,
  MonthlyBox,
  MonthlyText,
  MonthlyValue,
  MonthValue,
  NumberBox,
  OrderNumber,
  PercentageBox,
  PercenteNumber,
  Porcent,
  PorcentValue,
  SecurityImageBox,
  StatisticBox,
  TitleBox,
  TitleEaring,
  TitleUpComing,
  Total,
  TotalTitle,
  Union,
  UpComingBox,
  UpIcon,
  VectorBottom,
  VectorBox,
  VectorOne,
  VectorTop,
  VectorTwo,
} from "./Style";

const View = () => {
  return (
    <FirstBox>
      <FirstBoxContent>
        <Boxy>
          <TitleBox>Statistics</TitleBox>
          <StatisticBox>
            <UpComingBox>
              <TitleUpComing>Upcoming Orders</TitleUpComing>
              <NumberBox>222</NumberBox>
              <SecurityImageBox>
                <EllipseImageBox>
                  <img
                    src={require("../../images/Ellipse 8.png")}
                    alt="ellipse-8"
                  />
                </EllipseImageBox>
                <img
                  src={require("../../images/Security.png")}
                  alt="security"
                />
              </SecurityImageBox>
            </UpComingBox>
            <EarningBox>
              <EarningBoxContent>
                <TitleEaring>Today’s Earning</TitleEaring>
                <PercentageBox>
                  <PercenteNumber>+22%</PercenteNumber>
                  <UpIcon>
                    <img src={require("../../images/Shape.png")} alt="shape" />
                  </UpIcon>
                </PercentageBox>
              </EarningBoxContent>

              <MoneyBox>
                3000 <span style={{ fontWeight: 600 }}>AED</span>
              </MoneyBox>
              <CFBox>
                <VectorOne src={require("../../images/Vector 1.png")} />
                <VectorTwo src={require("../../images/Vector 2.png")} />

                <img
                  src={require("../../images/Ellipse 116.png")}
                  style={{ position: "absolute", top: "43px", right: "29px" }}
                  alt="ellipse"
                />
              </CFBox>
            </EarningBox>
          </StatisticBox>
        </Boxy>
        <AnalisticContent sx={{ marginTop: "26px" }}>
          <TitleBox sx={{ paddingLeft: { xs: "45px", sm: "3px" } }}>
            Analytics
          </TitleBox>
          <AnalisticBox>
            <ChartOne>
              <MoneyFlow>Money Flow</MoneyFlow>
              <Box sx={{ marginBottom: "13.19px" }}>
                <Porcent>
                  <img src={require("../../images/icon.png")} alt="icon" />
                  <PorcentValue>+6,79%</PorcentValue>
                </Porcent>
              </Box>
              <ChartThree>
                <Mark>
                  <Ellipse>
                    <img
                      src={require("../../images/Ellipse 858.png")}
                      alt="ellipse"
                    />
                  </Ellipse>
                  <Union src={require("../../images/Union.png")} />
                  <MarkValue>$ 2.600</MarkValue>
                </Mark>

                <ChartTwo>
                  <VectorBox>
                    <VectorTop src={require("../../images/Vector 221.png")} />
                    <VectorBottom
                      src={require("../../images/Vector 220 (1).png")}
                    />
                  </VectorBox>
                </ChartTwo>
                <Money>
                  <MoneyValue>4k</MoneyValue>
                  <MoneyValue>3k</MoneyValue>
                  <MoneyValue>2k</MoneyValue>
                  <MoneyValue>1k</MoneyValue>
                  <MoneyValue>0k</MoneyValue>
                </Money>
                <Month>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 2</MonthValue>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 3</MonthValue>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 4</MonthValue>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 5</MonthValue>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 6</MonthValue>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 7</MonthValue>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 8</MonthValue>
                  <MonthValue sx={{ width: "21.04px" }}>DEC 9</MonthValue>
                  <MonthValue>DEC 10</MonthValue>
                  <MonthValue>DEC 11</MonthValue>
                </Month>
                <Line>
                  <LineDot
                    src={require("../../images/Vector 218.png")}
                    sx={{
                      top: "2px",
                    }}
                  />
                  <LineDot
                    src={require("../../images/Vector 218.png")}
                    sx={{ top: "37.95px" }}
                  />
                  <LineDot
                    src={require("../../images/Vector 218.png")}
                    sx={{
                      top: "75px",
                    }}
                  />
                  <LineDot
                    src={require("../../images/Vector 218.png")}
                    sx={{
                      bottom: "0px",
                    }}
                  />
                </Line>
              </ChartThree>
            </ChartOne>
          </AnalisticBox>
          <GroupBox>
            <Total sx={{ marginRight: "10.27px" }}>
              <TotalTitle>Total’s Earning</TotalTitle>
              <MonthlyBox>
                <MonthlyValue>
                  13,500 <AED>AED</AED>
                </MonthlyValue>
                <Addition>+50% than last month</Addition>
              </MonthlyBox>
              <OrderNumber>300 Orders </OrderNumber>
              <MonthlyText>Monthly</MonthlyText>
            </Total>
            <Total>
              <TotalTitle>Total’s Earning</TotalTitle>
              <MonthlyBox>
                <MonthlyValue>
                  130,500 <AED>AED</AED>
                </MonthlyValue>
                <Addition>+50% than last month</Addition>
              </MonthlyBox>
              <OrderNumber>3000 Orders </OrderNumber>
              <MonthlyText>Yearly</MonthlyText>
            </Total>
          </GroupBox>
        </AnalisticContent>
      </FirstBoxContent>
    </FirstBox>
  );
};

export default View;
