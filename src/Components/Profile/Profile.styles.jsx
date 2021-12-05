import styled from "styled-components";
import { Border_Radius } from "../../App.styles";
export const ProfileContainer = styled.div`
  background-color: #fff;
  border-radius: ${Border_Radius};
  width: 100%;
  display: inline-block;
  box-shadow: 0px 2px 92px 0px rgb(0 0 0 / 12%);
  .btn_container {
    display: flex;
    justify-content: center;
  }
`;
export const ProfileTitle = styled.div`
  line-height: 18px;
  padding: 20px;
  .name {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
  }
  .job-title {
    font-size: 13px;
    color: #777;
  }
`;
export const ProfileImage = styled.div`
  margin-top: -28px;
  -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  .image {
    width: 100%;
  }
`;
export const ProfileInformation = styled.div`
  margin: -44px 0px 30px 5px;
`;
