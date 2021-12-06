import React from "react";
import { Card, CardTitle, CardText } from "./ServiceCard.styles";
export default function ServiceCard({ Icon, Title, Text }) {
  return (
    <>
      <Card>
        {Icon ? <Icon /> : null}
        <CardTitle>Web Development</CardTitle>
        <CardText>I have been working on web design for 10 years.</CardText>
      </Card>
    </>
  );
}
