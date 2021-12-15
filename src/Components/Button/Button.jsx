import React from "react";
import { CustomButton, BtnIconContainer } from "./Button.styles";
export default function Button({ className, text, icon, href, target }) {
  return (
    <>
      <CustomButton
        href={href}
        target={target}
        className={className}
        endIcon={icon ? <BtnIconContainer>{icon}</BtnIconContainer> : null}
      >
        <span className="btn-text">{text}</span>
      </CustomButton>
    </>
  );
}
