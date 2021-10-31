import React from "react";
import {
  ProfileContainer,
  ProfileTitle,
  ProfileImage,
  ProfileInformation,
} from "./Profile.styles";
import Button from "../Button/Button";
import { Typography } from "@material-ui/core";
export default function Profile({ name, jobTitle, imgSrc, imgAlt }) {
  return (
    <div>
      <ProfileContainer>
        <ProfileTitle>
          <Typography className="name">{name}</Typography>
          <Typography className="job-title">{jobTitle}</Typography>
        </ProfileTitle>
        <ProfileImage>
          <img className="image" src={imgSrc} alt={imgAlt} />
        </ProfileImage>
        <ProfileInformation>
          insert timeline
          <br />
          <Button>my button</Button>
        </ProfileInformation>
      </ProfileContainer>
    </div>
  );
}
