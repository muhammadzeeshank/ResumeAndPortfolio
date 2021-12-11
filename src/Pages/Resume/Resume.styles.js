import styled from "styled-components";
import { Typography } from "@material-ui/core";
import CustomTimeline from "../../Components/CustomTimeline/CustomTimeline";
import { SecondaryTextColor } from "../../App.styles";
export const TwoColumnsContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: center;
  grid-template-rows: 1fr;
`;

export const ItemTitle = styled(Typography)`
  font-size: 16px;
`;
export const ItemPeriod = styled(Typography)`
  font-size: 12px;
  padding: 4px 0 9px 0;
  font-weight: 500;
  color: ${SecondaryTextColor};
  display: block;
`;
export const ItemDescription = styled(Typography)`
  margin-bottom: 40px;
  color: #989898;
  font-weight: 400;
  line-height: 18px;
  font-size: 13px;
`;
export const ResumeCustomTimeline = styled(CustomTimeline)`
  width: 100%;
  .timeline-dot-header {
    padding: 15px;
    box-shadow: none;
  }
  .timeline-text-header {
    padding-top: 32px;
  }

  .items-separator {
    padding-left: 24px;
  }
`;
