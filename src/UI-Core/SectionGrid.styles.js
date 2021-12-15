import styled from "styled-components";

const getMinWidth = (props) => props.minWidth;
const getGridGap = (props) => props.gridGap;
const SectionGrid = styled.div`
  display: grid;
  grid-gap: ${getGridGap};
  grid-template-columns: repeat(auto-fill, minmax(${getMinWidth}, 1fr));
  justify-items: center;
  grid-template-rows: 1fr;
`;
export default SectionGrid;
