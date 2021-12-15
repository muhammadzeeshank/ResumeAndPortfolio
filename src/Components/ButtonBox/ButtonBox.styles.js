import styled from "styled-components";
import { Button } from "@material-ui/core";
import { HoverColor, PrimaryColor } from "../../App.styles";

export const TabFlex = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

export const TabButton = styled(Button)`
  text-transform: none;
  &.MuiButton-root {
    color: #000;
    font-size: 14px;
    background-color: #f8f8f8;
    border-radius: 0;
  }
  &.MuiButton-root:hover {
    background-color: ${PrimaryColor};
    // color: #fff;
  }
  &.MuiButton-root:active {
    color: ${HoverColor};
  }
`;
