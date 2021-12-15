import * as React from "react";
import { TabButton, TabFlex } from "./ButtonBox.styles";

export default function ButtonBox() {
  return (
    <TabFlex>
      <TabButton>All</TabButton>
      <TabButton>Web Development</TabButton>
      <TabButton>Internet Of Things</TabButton>
      <TabButton>OpenCV Python</TabButton>
    </TabFlex>
  );
}
