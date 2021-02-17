import React, { useState } from "react";

import CustomButton from "../Button";

import "./style.scss";

const HomeContent = () => {
  return (
    <div className="home-page">
      <div className="home-page-intro">
        <h1 className="text-secondary">CPaaS. Simplified.</h1>
        <h2 className="text-third">We Provide the engine.</h2>
        <h2 className="text-third">You provide the fuel.</h2>
        <h1 className="text-primary">Let's roll.</h1>
        <h5 className="text-fourth mt-4 mb-12">
          Jambonz is the open source Communication API engine that you connect
          to your own applications, SIP trunks and speech services.
        </h5>
        <CustomButton text="Sign up for free" />
      </div>
    </div>
  );
};

export default HomeContent;
