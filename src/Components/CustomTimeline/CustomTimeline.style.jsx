import styled from "styled-components";
import { Timeline } from "@material-ui/lab";
import { PrimaryColor } from "../../App.styles";

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
    .MuiSvgIcon-root {
      font-size: 1.3rem;
    }
    margin: 18px 0 0 4px;
    color: black;
    background-color: ${PrimaryColor};
    font-size: small;
    padding: 10px;
    border: none;
    box-shadow: 0px 2px 32px 0px rgb(4 123 248 / 30%);
  }
  .timeline-text-header {
    padding-top: 25px;
  }
  .MuiTimelineContent-root {
    padding-top: 0;
    margin-top: -6px;
  }
  // Other Items

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
