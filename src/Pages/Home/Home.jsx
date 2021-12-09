import React from "react";
import Section from "../../Components/Section/Section";
import ResumeData from "../../Data/ResumeData";
import { SectionText, SectionGrid } from "./Home.styles";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { CgWebsite } from "react-icons/cg";
export default function Home() {
  return (
    <>
      <Section sectiontitle="About Me">
        <SectionText>{ResumeData.about}</SectionText>
      </Section>
      <Section bg="grey" sectiontitle="My Services">
        <SectionGrid>
          <ServiceCard
            Title="Web Development"
            Text="I have been working on web design for 10 years."
          />
          <ServiceCard
            Icon={CgWebsite}
            Title="Web Development"
            Text="I have been working on web design for 10 years."
          />
          <ServiceCard
            Title="Web Development"
            Text="I have been working on web design for 10 years."
          />
        </SectionGrid>
      </Section>
    </>
  );
}
