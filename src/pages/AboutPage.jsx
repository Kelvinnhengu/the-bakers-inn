import React from "react";
import AboutHero from "../components/AboutPage/AboutHero";
import OurMission from "../components/AboutPage/OurMission";
import OurValues from "../components/AboutPage/OurValues";
import Promises from "../components/AboutPage/Promises";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <OurMission />
      <OurValues />
      <Promises />
    </div>
  );
};

export default AboutPage;
