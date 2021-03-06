import { Facebook } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";

const ResumeData = {
  profile: {
    name: "Muhammad Zeeshan",
    title: "Computer Engineer",
    job: "Student",
    email: "zeeshan124go@gmail.com",
    birthday: "13 August 2000",
  },

  socials: {
    facebook: {
      link: "https://www.facebook.com/pk.zeeshan",
      text: "facebook",
      icon: <Facebook />,
    },
    linkedin: {
      link: "https://www.facebook.com/pk.zeeshan",
      text: "linkedin",
      icon: <LinkedIn />,
    },
    github: {
      link: "https://www.facebook.com/pk.zeeshan",
      text: "github",
      icon: <GitHub />,
    },
  },
  about:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.",
  skills: {
    skill1: {
      name: "React JS",
      value: "70%",
    },
    skill2: {
      name: "BootStrap",
      value: "60%",
    },
    skill3: {
      name: "Arduino",
      value: "70%",
    },
  },
  education: [
    {
      id: "1",
      degree: "B.E in Computer Engineering",
      institution:
        "National University of Sciences and Technology (NUST) , Islamabad",
      period: "10/2018 - Present",
      description: "CGPA: 3.54",
    },
    {
      id: "2",
      degree: "FSC Pre Engineering",
      institution: "Abdul Razaq Fazaia College (ARFC), Mianwali",
      period: "04/2016 - 04/2018",
      description: "Marks: 84.36%",
    },
  ],
  work: [
    {
      id: "1",
      jobtitle: "Video Editor",
      organization: "EME Center of Innovation Entrepreneurship - ICE2",
      period: "12/2018 - 01/2019",
      description: "Successfully edited promo of Stress Capital Workshop(SCW)",
    },
  ],
};

export default ResumeData;
