import React from "react";
import Section from "../Components/Section/Section";
import SectionGrid from "../../UI-Core/SectionGrid.styles";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
export default function Portfolio() {
  return (
    <>
      <Section sectiontitle="Portfolio">
        <SectionGrid minWidth="230px">
          <ProjectCard
            imgSrc="https://thetav.online/html/mat/default/images/works/work-01.jpg"
            imgAlt="LaptopProject"
            title="Laptop Project"
            description="It can be used to control Home appliances remotely with your smart phone User can control home appliances by using 4 options 1) Web
            App 2) Bluetooth using mobile App 3) Voice Control by using
            Google Assistant 4) Manual Controls"
            btnText="Watch"
            to="https://github.com/muhammadzeeshank/myfirstreactwebsite"
          />

          <ProjectCard
            imgSrc="https://thetav.online/html/mat/default/images/works/work-01.jpg"
            imgAlt="LaptopProject"
            title="Laptop Project"
            description="Bluetooth using mobile App 3) Voice Control by using
            Google Assistant 4) Manual Controls"
            btnText="Watch"
          />
          <ProjectCard
            imgSrc="https://thetav.online/html/mat/default/images/works/work-01.jpg"
            imgAlt="LaptopProject"
            title="Laptop Project"
            description="It can be used to control Home appliances remotely with your smart phone User can control home appliances by using 4 options 1) Web
            App 2) Bluetooth using mobile App 3) Voice Control by using
            Google Assistant 4) Manual Controls"
            btnText="Watch"
            to="https://github.com/muhammadzeeshank/myfirstreactwebsite"
          />
        </SectionGrid>
      </Section>
    </>
  );
}
