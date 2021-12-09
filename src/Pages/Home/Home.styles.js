import styled from "styled-components";
import { Typography } from "@material-ui/core";
export const SectionText = styled(Typography)`
  font-size: 13px;
  color: #4c4c4c;
  line-height: 24px;
`;
export const SectionGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;
  grid-template-rows: 1fr;
`;
