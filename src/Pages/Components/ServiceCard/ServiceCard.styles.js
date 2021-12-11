import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Card = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 48px 0px rgb(4 6 4 / 8%);
  min-height: 186px;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  .icon {
    font-size: 5rem;
  }
`;
export const CardTitle = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
`;
export const CardText = styled(Typography)`
  color: #989898;
  font-weight: 400;
  line-height: 18px;
  font-size: 13px;
`;
