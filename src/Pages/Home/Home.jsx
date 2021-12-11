import React from "react";
import { CustomProgressbar } from "../Components/Progressbar/Progressbar";
import { SkillList, TwoColumnsContainer } from "./Home.styles";
import Section from "../Components/Section/Section";
import ResumeData from "../../Data/ResumeData";
import { SectionText, SectionGrid } from "./Home.styles";
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import { CgWebsite } from "react-icons/cg";
import { PrimaryColor } from "../../App.styles";
import { SecondaryTextColor } from "../../App.styles";
export default function Home() {
  return (
    <>
      {/* About Me Section */}
      <Section sectiontitle="About Me">
        <SectionText>{ResumeData.about}</SectionText>
      </Section>

      {/* My Services Section */}
      <Section bg="grey" sectiontitle="My Services">
        <SectionGrid>
          <ServiceCard
            Icon={CgWebsite}
            Title="Web Development"
            Text="I have been working on web design for 10 years."
          />
          <ServiceCard
            Icon={CgWebsite}
            Title="Web Development"
            Text="I have been working on web design for 10 years."
          />
          <ServiceCard
            Icon={CgWebsite}
            Title="Web Development"
            Text="I have been working on web design for 10 years."
          />
        </SectionGrid>
      </Section>

      {/* Skills Section */}
      <TwoColumnsContainer>
        <Section sectiontitle="Skills">
          <SkillList>
            <li>
              <CustomProgressbar
                heading="Skill1"
                valuecolor={SecondaryTextColor}
                $barcolor={PrimaryColor}
                value={20}
              />
            </li>
            <li>
              <CustomProgressbar
                heading="Skill1"
                valuecolor={SecondaryTextColor}
                $barcolor={PrimaryColor}
                value={50}
              />
            </li>
            <li>
              <CustomProgressbar
                heading="Skill1"
                valuecolor={SecondaryTextColor}
                $barcolor={PrimaryColor}
                value={60}
              />
            </li>
          </SkillList>
        </Section>
        <Section sectiontitle="Programming Languages">
          <SkillList>
            <li>
              <CustomProgressbar
                heading="Skill1"
                valuecolor={SecondaryTextColor}
                $barcolor={PrimaryColor}
                value={60}
              />
            </li>
            <li>
              <CustomProgressbar
                heading="Skill1"
                valuecolor={SecondaryTextColor}
                $barcolor={PrimaryColor}
                value={70}
              />
            </li>
            <li>
              <CustomProgressbar
                heading="Skill1"
                valuecolor={SecondaryTextColor}
                $barcolor={PrimaryColor}
                value={30}
              />
            </li>
          </SkillList>
        </Section>
      </TwoColumnsContainer>
    </>
  );
}
