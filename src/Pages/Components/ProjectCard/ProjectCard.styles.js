import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import { PrimaryTextColor, HoverColor } from "../../../App.styles";
export const CardContainer = styled(Card)`
  &.MuiCard-root {
    box-shadow: 0px 0px 2px 10px rgb(4 6 4 / 2%);
    transition: 0.4s, background-color 0s;
    border-radius: 8px;
    :hover {
      box-shadow: 0px 0px 15px 0px rgb(4 6 4 / 12%);
    }
  }
  a {
    text-decoration: none;
  }
  // Styling for image
  .MuiCardMedia-root {
  }
  .MuiButton-root {
    color: ${PrimaryTextColor};
  }
  .MuiButton-root:hover {
    color: ${HoverColor};
  }
  &:hover {
    .content-overlay {
      opacity: 0.3;
    }
    .content-details {
      top: 50%;
      left: 50%;
      opacity: 1;
    }
  }
`;
export const DescriptionText = styled(Typography)`
  font-size: 13px;
  color: #989898;
  line-height: 18px;
`;
export const TitleText = styled(Typography)`
  font-size: 16px;
  color: #000;
`;
