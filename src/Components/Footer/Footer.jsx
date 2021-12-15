import React from "react";
import { FooterContainer } from "./Footer.styles";
export default function Footer() {
  return (
    <>
      <FooterContainer>
        <p className="footer-name">© 2021 Muhammad Zeeshan.</p>
        <p className="footer-copyright">
          <span className="half-copyright">Designed and developed by</span>{" "}
          Muhammad Zeeshan
        </p>
      </FooterContainer>
    </>
  );
}
