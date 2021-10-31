import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: yellow;
  border-radius: 6px;
  width: 100%;
  display: inline-block;
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
export const ProfileInformation = styled.div``;
