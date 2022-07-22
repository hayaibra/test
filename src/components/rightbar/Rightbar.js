import { Avatar, Box, Stack, Typography } from "@mui/material";
import {
  Alert,
  AlertBox,
  CalendarBox,
  ColorBox,
  DeliveryText,
  Line,
  LineBox,
  OrderBox,
  OrderOne,
  Rating,
  RightbarBox,
  Time,
  TimeBox,
  UserBox,
} from "./Style";
import Calendarr from "./calendar/Calendarr";

const Rightbar = () => {
  return (
    <RightbarBox>
      <Box>
        <AlertBox direction="row">
          <Alert>
            <img
              src={require("../../images/notification-alert-svgrepo-com.png")}
            />
          </Alert>
          <UserBox />
        </AlertBox>
        <CalendarBox>
          <Calendarr />
        </CalendarBox>
        <Rating>
          <TimeBox>
            <Time>12:00 PM</Time>
            <Time>12:30 PM</Time>
            <Time>1:00 PM</Time>
            <Time>1:30 PM</Time>
            <Time>2:00 PM</Time>
            <Time>2:30 PM</Time>
            <Time>3:00 PM</Time>
            <Time>3:30 PM</Time>
            <Time>4:00 PM</Time>
            <Time>4:30 PM</Time>
            <Time>5:00 PM</Time>
            <Time>5:30 PM</Time>
            <Time>6:00 PM</Time>
            <Time>6:30 PM</Time>
            <Time>7:00 PM</Time>
            <Time>7:30 PM</Time>
            <Time>8:00 PM</Time>
            <Time>8:30 PM</Time>
            <Time>9:00 PM</Time>
            <Time>9:30 PM</Time>
            <Time>10:00 PM</Time>
            <Time>10:30 PM</Time>
          </TimeBox>
          <LineBox>
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
          </LineBox>
          <OrderBox>
            <OrderOne>
              <ColorBox
                sx={{
                  backgroundColor: "#BF953F",
                }}
              />
              <DeliveryText
                sx={{
                  color: "#BF953F",
                  top: "4px",
                }}
              >
                ORDER 1 - Delievery Riyadh
              </DeliveryText>
            </OrderOne>
            <OrderOne>
              <ColorBox
                sx={{
                  background:
                    "linear-gradient(251.42deg, #9C4BAD -0.15%, #B24592 48.05%, #F15F79 93.13%)",
                }}
              />
              <DeliveryText
                sx={{
                  top: "141px",
                  background:
                    "linear-gradient(251.42deg, #9C4BAD -0.15%, #B24592 48.05%, #F15F79 93.13%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                ORDER 2 - Delivery Jeddah
              </DeliveryText>
            </OrderOne>
            <OrderOne
              sx={{
                marginBottom: "0",
              }}
            >
              <ColorBox
                sx={{
                  background:
                    "linear-gradient(180deg, #377DB8 0%, #1E8FD5 100%)",
                }}
              />
              <DeliveryText
                sx={{
                  top: "278px",
                  background:
                    "linear-gradient(180deg, #377DB8 0%, #1E8FD5 100%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                ORDER 3 - Delivery Jeddah 2
              </DeliveryText>
            </OrderOne>
          </OrderBox>
        </Rating>
      </Box>
    </RightbarBox>
  );
};

export default Rightbar;
