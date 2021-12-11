import React from "react";
import { TimelineItem } from "@material-ui/lab";
import { TimelineSeparator } from "@material-ui/lab";
import { TimelineConnector } from "@material-ui/lab";
import { TimelineDot } from "@material-ui/lab";
import { TimelineContent } from "@material-ui/lab";
import { MyTimeline } from "./CustomTimeline.style";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// Function to check whether to display line connector or not
const displayConnector = (index, array) =>
  index === array.length - 1 ? false : true;

export default function CustomTimeline({
  headericon,
  headertitle,
  children,
  className,
}) {
  return (
    <>
      <MyTimeline className={className}>
        {/* Title */}
        <CustomTimelineHeaderItem
          className={className}
          headericon={headericon}
          headertitle={headertitle}
        />
        {/* Other Items */}
        {Array.isArray(children)
          ? children.map((listitem, index, array) => (
              <CustomTimelineItem
                connector={displayConnector(index, array)}
                key={`cti${index}`}
              >
                {listitem}
              </CustomTimelineItem>
            ))
          : children}
      </MyTimeline>
    </>
  );
}
// Header item which includes icon and title
const CustomTimelineHeaderItem = ({ headericon, headertitle }) => {
  return (
    <>
      <TimelineItem className="timeline-item-header">
        <TimelineSeparator>
          <TimelineDot className="timeline-dot-header">
            {headericon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="timeline-text-header" variant="h6">
            {headertitle}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};
// line Seperatore between timeline dots
const CustomTimelineSeparator = ({ connector = true }) => {
  return (
    <TimelineSeparator className="items-separator">
      <TimelineDot variant="outlined" className="timeline-dot"></TimelineDot>
      {connector ? <TimelineConnector /> : null}
    </TimelineSeparator>
  );
};
const CustomTimelineItem = ({ connector, children }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator connector={connector} />
      <TimelineContent>{children}</TimelineContent>
    </TimelineItem>
  );
};
CustomTimeline.propTypes = {
  headericon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  headertitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
