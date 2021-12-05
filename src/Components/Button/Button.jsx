import React from "react";
import { CustomButton, BtnIconContainer } from "./Button.styles";
export default function Button({ className, text, icon }) {
  return (
    <>
      <CustomButton
        className={className}
        endIcon={icon ? <BtnIconContainer>{icon}</BtnIconContainer> : null}
      >
        <span className="btn-text">{text}</span>
      </CustomButton>
    </>
  );
}
