import React from "react";
import AllCategory from "./AllCategory";
import HeroSearch from "./HeroSearch";
import HeroBanner from "./HeroBanner";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <AllCategory />
            <div className="col-lg-9">
              <HeroSearch />
              <HeroBanner />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
