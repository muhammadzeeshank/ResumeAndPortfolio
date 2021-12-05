import styled, { css } from "styled-components";
import { Border_Radius } from "../../App.styles";
export const FooterContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: ${Border_Radius};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70px;
  padding: 20px 25px;
  .footer-name {
    font-size: 15px;
    margin: 0;
  }
  .footer-copyright {
    margin: 0;
    font-size: 12px;
    .half-copyright {
      color: #9c9c9c;
    }
  }
`;
