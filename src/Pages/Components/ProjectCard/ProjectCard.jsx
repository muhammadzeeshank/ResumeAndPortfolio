import * as React from "react";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import ImageHover from "../ImageHover/ImageHover";

import { Button, CardActionArea, CardActions } from "@mui/material";
import {
  CardContainer,
  DescriptionText,
  TitleText,
} from "./ProjectCard.styles";
export default function ProjectCard({
  imgSrc,
  imgAlt,
  imgIcon,
  title,
  description,
  btnText,
  to,
}) {
  return (
    <CardContainer sx={{ maxWidth: 345 }}>
      <CardActionArea target="_blank" href={to}>
        <ImageHover Icon={imgIcon} imgSrc={imgSrc} imgAlt={imgAlt} />
        {/* <CardMedia component="img" height="200" image={imgSrc} alt={imgAlt} /> */}
        <CardContent>
          <TitleText gutterBottom variant="h5" component="div">
            {title}
          </TitleText>
          <DescriptionText variant="body2">{description}</DescriptionText>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" href={to} size="small" color="primary">
          {btnText}
        </Button>
      </CardActions>
    </CardContainer>
  );
}
ProjectCard.propTypes = {
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imgAlt: PropTypes.string,
  imgIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  title: PropTypes.string,
  description: PropTypes.string,
  btnText: PropTypes.string,
  to: PropTypes.string,
};
