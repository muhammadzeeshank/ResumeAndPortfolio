import styled from "styled-components";
import { Timeline } from "@material-ui/lab";

const PrimaryColor = "#ffc500";
const PrimaryTextColor = "#000";
const SecondaryTextColor = "333";
const TernaryTextColor = "#7F7F7F";
export const MyTimeline = styled(Timeline)`
  padding: 0 !important;
  .timeline-item-header {
    min-height: 80px;
  }

  .MuiTimelineConnector-root {
    background-color: #eee;
  }
  .MuiTimelineItem-missingOppositeContent {
    :before {
      display: none;
    }
  }
  .MuiTimelineItem-root {
    min-height: 30px;
  }
  .timeline-item-header .MuiTimelineConnector-root {
    min-height: 30px;
  }

  // Header item
  .timeline-dot-header {
    margin: 0;
    color: black;
    background-color: ${PrimaryColor};
    font-size: small;
    padding: 10px;
    border: none;
  }
  .timeline-text-header {
    padding-top: 12px;
  }
  .MuiTimelineContent-root {
    padding-top: 0;
  }
  // Other Items
  .timeline-text-item {
    font-size: 13.5px;
    padding-top: -10px;
  }
  .item-subtext {
    text-decoration: none;
    color: ${TernaryTextColor};
  }
  .items-separator {
    padding-left: 18px;
  }
  .timeline-dot {
    margin: 0;
    border-color: ${PrimaryColor};
    padding: 2px;
    .inside-dot {
      background-color: #fff;
      margin: 0;
      box-shadow: none;
      padding: 0.7px;
    }
  }
`;
