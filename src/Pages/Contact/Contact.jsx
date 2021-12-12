import React from "react";
import Section from "../Components/Section/Section";
import SectionGrid from "../../UI-Core/SectionGrid.styles";
import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <SectionGrid minWidth="280px">
        <Section sectiontitle="Contact Form">
          <ContactForm />
        </Section>
        <Section sectiontitle="Contact Information">
          <h3>Information here</h3>
        </Section>
      </SectionGrid>
    </>
  );
}
