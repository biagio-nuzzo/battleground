import React from "react";
import Style from "./HeroSection.module.css";
import HeroImageTitle from "../../assets/images/hero-title.png";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className={Style.heroSectionContainer}>
        <div className={Style.heroTitle}>
          <img alt="hero-section" src={HeroImageTitle} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
