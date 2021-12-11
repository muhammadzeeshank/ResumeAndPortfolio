import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { MSection } from "./Section.styles";
export default function Section({ bg, sectiontitle, children }) {
  return (
    <>
      <MSection $bg={bg}>
        <Typography className="section-title" varient="h6">
          {sectiontitle}
          <span></span>
        </Typography>
        {children}
      </MSection>
    </>
  );
}

Section.propTypes = {
  sectiontitle: PropTypes.string,
  sectioncontent: PropTypes.object,
};
