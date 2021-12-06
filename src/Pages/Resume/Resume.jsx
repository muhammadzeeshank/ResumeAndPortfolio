import React from "react";
import { SectionText } from "./Resume.styles";
import Section from "../../Components/Section/Section";
import ResumeData from "../../Data/ResumeData";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
export default function Resume() {
  return (
    <>
      <Section sectiontitle="About Me">
        <SectionText>{ResumeData.about}</SectionText>
      </Section>
      <Section bg="grey" sectiontitle="My Services">
        <ServiceCard
          Title="Web Development"
          Text="I have been working on web design for 10 years."
        />
      </Section>
      <Section
        sectiontitle="Design Skills"
        sectioncontent={<SectionText>{ResumeData.about}</SectionText>}
      />
      <Section
        sectiontitle="Code Skills"
        sectioncontent={<SectionText>{ResumeData.about}</SectionText>}
      />
    </>
  );
}
