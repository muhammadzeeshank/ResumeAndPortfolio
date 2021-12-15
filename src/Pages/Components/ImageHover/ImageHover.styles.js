import styled from "styled-components";
import { HoverColor } from "../../../App.styles";
export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
  .content-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
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
  .content-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 90px;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .fadeIn-bottom {
    top: 80%;
  }
`;
export const IconContainer = styled.div`
  background-color: ${HoverColor};
  border-radius: 100%;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
