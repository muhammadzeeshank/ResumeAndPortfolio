import React from "react";
import { CustomButton, BtnIconContainer } from "./Button.styles";
export default function Button({ text, icon }) {
  return (
    <>
      <CustomButton
        endIcon={icon ? <BtnIconContainer>{icon}</BtnIconContainer> : null}
      >
        <span className="btn-text">{text}</span>
      </CustomButton>
    </>
  );
}
