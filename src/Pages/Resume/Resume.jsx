import React from "react";

import Section from "../Components/Section/Section";
import ResumeData from "../../Data/ResumeData";
import {
  TwoColumnsContainer,
  ResumeCustomTimeline,
  ItemTitle,
  ItemPeriod,
  ItemDescription,
} from "./Resume.styles";
import { MdCastForEducation, MdOutlineWorkOutline } from "react-icons/md";
import { IconContext } from "react-icons";

const ListItem = ({ title, institution, period, description, id }) => (
  <>
    <ItemTitle key={`subitem1${id}`} variant="h6">
      {title}
    </ItemTitle>
    <ItemTitle key={`subitem2${id}`} variant="h5">
      {institution}
    </ItemTitle>
    <ItemPeriod key={`subitem3${id}`} variant="body2">
      {period}
    </ItemPeriod>
    <ItemDescription key={`subitem4${id}`} variant="body2">
      {description}
    </ItemDescription>
  </>
);

export default function Resume() {
  return (
    <>
      <Section sectiontitle="Resume">
        <TwoColumnsContainer>
          <ResumeCustomTimeline
            headericon={
              <IconContext.Provider value={{ style: { fontSize: "1.3rem" } }}>
                <MdCastForEducation />
              </IconContext.Provider>
            }
            headertitle="Education History"
          >
            {ResumeData.education.map((value, index) => (
              <ListItem
                key={`itemedu${index}`}
                id={index}
                title={value.degree}
                institution={value.institution}
                period={value.period}
                description={value.description}
              />
            ))}
          </ResumeCustomTimeline>
          <ResumeCustomTimeline
            headericon={
              <IconContext.Provider value={{ style: { fontSize: "1.3rem" } }}>
                <MdOutlineWorkOutline />
              </IconContext.Provider>
            }
            headertitle="Work History"
          >
            {ResumeData.work.map((value, index) => (
              <ListItem
                key={`itemwork${index}`}
                id={index}
                title={value.jobtitle}
                institution={value.organization}
                period={value.period}
                description={value.description}
              />
            ))}
          </ResumeCustomTimeline>
        </TwoColumnsContainer>
      </Section>
      <Section sectiontitle="Code Skills" sectioncontent={<h1>here</h1>} />
    </>
  );
}
