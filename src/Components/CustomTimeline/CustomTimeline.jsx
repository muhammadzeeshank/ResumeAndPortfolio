import React from "react";
import { TimelineItem } from "@material-ui/lab";
import { TimelineSeparator } from "@material-ui/lab";
import { TimelineConnector } from "@material-ui/lab";
import { TimelineDot } from "@material-ui/lab";
import { TimelineContent } from "@material-ui/lab";
import { MyTimeline } from "./CustomTimeline.style";
import { Typography } from "@material-ui/core";
// import "./CustomTimeline.css";
export default function CustomTimeline({ headericon, headertitle, children }) {
  return (
    <>
      <MyTimeline className="timeline">
        {/* Title */}
        <CustomTimelineHeaderItem
          headericon={headericon}
          headertitle={headertitle}
        />
        {/* Other Items */}
        {children}
      </MyTimeline>
    </>
  );
}
export function CustomTimelineHeaderItem({ headericon, headertitle }) {
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
}
export function CustomTimelineSeparator({ connector = true }) {
  return (
    <TimelineSeparator className="items-separator">
      <TimelineDot variant="outlined" className="timeline-dot"></TimelineDot>
      {connector ? <TimelineConnector /> : null}
    </TimelineSeparator>
  );
}
export function CustomTimelineShortItem({ title, text, connector }) {
  return (
    <TimelineItem>
      <CustomTimelineSeparator connector={connector} />
      <TimelineContent>
        <Typography className="timeline-text-item">
          <span>{title}: </span>
          <span className="item-subtext">{text}</span>
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
