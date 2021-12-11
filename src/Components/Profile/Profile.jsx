import React from "react";
import {
  ProfileContainer,
  ProfileTitle,
  ProfileImage,
  ProfileInformation,
  MyTypography,
} from "./Profile.styles";
import Button from "../Button/Button";
import { Typography } from "@material-ui/core";
import CustomTimeline from "../CustomTimeline/CustomTimeline";
import { PersonRounded } from "@material-ui/icons";
import ResumeData from "../../Data/ResumeData";
import { IconContext } from "react-icons";
import { ImDownload3 } from "react-icons/im";
import CapitalizeFirstLetter from "../../Services/CapitalizeFirstLetter";

const ListItem = ({ title, text }) => (
  <>
    <MyTypography>
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
            {Object.keys(ResumeData.profile).map((key) => (
              <ListItem
                key={key}
                title={CapitalizeFirstLetter(key)}
                text={ResumeData.profile[key]}
              />
            ))}
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
