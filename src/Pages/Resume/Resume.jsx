import React from "react";

import Section from "../Components/Section/Section";
import ResumeData from "../../Data/ResumeData";
import { TwoColumnsContainer } from "./Resume.styles";
import CustomTimeline, {
  CustomTimelineHeaderItem,
} from "../../Components/CustomTimeline/CustomTimeline";
export default function Resume() {
  return (
    <>
      <Section sectiontitle="Resume">
        <TwoColumnsContainer>
          <CustomTimeline headertitle="Education"></CustomTimeline>
        </TwoColumnsContainer>
      </Section>
      <Section sectiontitle="Code Skills" sectioncontent={<h1>here</h1>} />
    </>
  );
}
