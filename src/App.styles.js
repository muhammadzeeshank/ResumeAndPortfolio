import styled, { css } from "styled-components";
import { Container } from "react-bootstrap";

export const PrimaryColor = "#ffc500";
export const PrimaryTextColor = "#000";
export const SecondaryTextColor = "#333";
export const TernaryTextColor = "#7F7F7F";
export const HoverColor = "#ffb100"; // accourding to home button
export const Border_Radius = "8px";

export const MyContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;
  align-items: start; // to prevent stretch along vertical axis
  margin-top: 60px;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 991px) {
    margin-top: 30px;
    grid-template-columns: 1fr;
  }
`;
export const ItemContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
`;
export const MainContent = styled.div`
  background-color: #fff;
  min-height: 100vh;
  border-radius: ${Border_Radius};
  box-shadow: 0px 2px 92px 0px rgb(0 0 0 / 9%);
`;
