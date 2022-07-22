import React from "react";
import { FeedBox } from "./Style";
import Rightbar from "../rightbar/Rightbar";
import View from "./View";

const Feed = () => {
  return (
    <FeedBox>
      <View />
      <Rightbar />
    </FeedBox>
  );
};

export default Feed;
