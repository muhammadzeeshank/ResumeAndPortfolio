import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText } from "./ServiceCard.styles";
export default function ServiceCard({ Icon, Title, Text }) {
  return (
    <>
      <Card>
        {Icon ? <Icon className="icon" /> : null}
        <CardTitle>{Title}</CardTitle>
        <CardText>{Text}</CardText>
      </Card>
    </>
  );
}
ServiceCard.propTypes = {
  Title: PropTypes.string,
  Text: PropTypes.string,
  Icon: PropTypes.func,
};
