import styled, { css } from "styled-components";
import { Container } from "react-bootstrap";
export const MyContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;
  margin-top: 60px;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 991px) {
    margin-top: 30px;
    grid-template-columns: 1fr;
  }
`;
export const ItemContainer = styled.div``;
export const PrimaryColor = "#ffc500";
export const PrimaryTextColor = "#000";
export const SecondaryTextColor = "#333";
export const TernaryTextColor = "#7F7F7F";
export const HoverColor = "#ffb100"; // accourding to home button
export const Border_Radius = "8px";
