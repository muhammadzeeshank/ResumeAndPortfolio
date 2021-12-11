import React from "react";
import {
  ProfileContainer,
  ProfileTitle,
  ProfileImage,
  ProfileInformation,
} from "./Profile.styles";
import Button from "../Button/Button";
import { Typography } from "@material-ui/core";
import CustomTimeline from "../CustomTimeline/CustomTimeline";
import { PersonRounded } from "@material-ui/icons";
import ResumeData from "../../Data/ResumeData";
import { IconContext } from "react-icons";
import { ImDownload3 } from "react-icons/im";

import styled from "styled-components";

import { TernaryTextColor } from "../../App.styles";

export const MyTypography = styled(Typography)`
  font-size: 13.5px;

  .item-subtext {
    text-decoration: none;
    color: ${TernaryTextColor};
  }
`;

const ListItem = ({ title, text }) => (
  <>
    <MyTypography className="timeline-text-item">
      <span>{title}: </span>
      <span className="item-subtext">{text}</span>
    </MyTypography>
  </>
);
export default function Profile({ name, jobTitle, imgSrc, imgAlt }) {
  return (
    <>
      <ProfileContainer>
        <ProfileTitle>
          <Typography className="name">{name}</Typography>
          <Typography className="job-title">{jobTitle}</Typography>
        </ProfileTitle>
        <ProfileImage>
          <img className="image" src={imgSrc} alt={imgAlt} />
        </ProfileImage>
        <ProfileInformation>
          <CustomTimeline headericon={<PersonRounded />}>
            <ListItem id="1" title="Name" text="Muhammad Zeeshan"></ListItem>

            <ListItem id="2" title="Job" text={ResumeData.job}></ListItem>

            <ListItem id="3" title="Email" text={ResumeData.email}></ListItem>

            <ListItem
              id="4"
              title="Birthday"
              text={ResumeData.birthday}
            ></ListItem>
          </CustomTimeline>

          <br />
          <div className="btn_container">
            <Button
              text="Download CV"
              icon={
                <IconContext.Provider value={{ style: { fontSize: "13px" } }}>
                  <ImDownload3 />
                </IconContext.Provider>
              }
            />
          </div>
        </ProfileInformation>
      </ProfileContainer>
    </>
  );
}
