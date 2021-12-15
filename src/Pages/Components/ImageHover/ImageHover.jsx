import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Content, IconContainer } from "./ImageHover.styles";
import { IconContext } from "react-icons";

export default function ImageHover({ imgSrc, imgAlt, Icon }) {
  return (
    <>
      <Content>
        <div className="content-overlay" />
        <CardMedia component="img" height="200" image={imgSrc} alt={imgAlt} />
        <div className="content-details fadeIn-bottom">
          {Icon ? (
            <IconContainer>
              <IconContext.Provider
                value={{
                  color: "#fff",
                  style: { fontSize: "35px", paddingLeft: "4px" },
                }}
              >
                <Icon />
              </IconContext.Provider>
            </IconContainer>
          ) : null}
        </div>
      </Content>
    </>
  );
}
