import styled from "styled-components";
import { Button } from "@material-ui/core";
import { PrimaryColor } from "../Profile/Profile.styles";
export const CustomButton = styled(Button)`
  background-color: ${PrimaryColor};
  border: 2px solid ${PrimaryColor};
  font-size: 14px;
  border-radius: 50px;
  padding: 2px 12px;
  :hover {
    border: 2px solid ${PrimaryColor};
  }
`;
export const BtnIconContainer = styled.div`
  background-color: #fff;
  border-radius: 100px;
  height: 23px;
  width: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiSvgIcon-root {
    font-size: 1.2rem;
  }
`;
