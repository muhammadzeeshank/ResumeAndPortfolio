import styled, { css } from "styled-components";
import { HoverColor } from "../../../App.styles";

const GreyBackground = css`
  background-color: #fafafa;
`;
const WhiteBAckground = css`
  background-color: #fff;
`;
const checkbg = (props) => {
  if (props.$bg === "grey") {
    return GreyBackground;
  } else {
    return WhiteBAckground;
  }
};
export const MSection = styled.div`
  padding: 50px 30px;
  width: 100%;
  ${checkbg}
  .section-title {
    margin-bottom: 30px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    position: relative;

    span {
      height: 7px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 3.5px;
      opacity: 0.4;
      background-color: ${HoverColor};
    }
  }
`;
