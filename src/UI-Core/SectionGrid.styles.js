import styled from "styled-components";

const getMinValue = (props) => props.minWidth;
const SectionGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(${getMinValue}, 1fr));
  justify-items: center;
  grid-template-rows: 1fr;
`;
export default SectionGrid;
