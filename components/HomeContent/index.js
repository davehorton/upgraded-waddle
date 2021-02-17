import React, { useState } from "react";

import CustomButton from "../Button";
import { PROPS_LIST } from "../../enum";

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
      <div className="home-page-history">
        <div className="home-page-history-top">
          <img
            className="home-page-history-top-logo"
            src="/images/img-logo-big.svg"
            alt="big-logo"
          />
          <div className="home-page-history-top-phone flex justify-center items-center rounded-full bg-white">
            <img src="/images/icon-phone.svg" alt="phone-icon" />
          </div>
        </div>
        {PROPS_LIST.map((prop, index) => (
          <div
            key={index}
            className={`history-item ${index === 0 ? "first" : ""} ${
              index === PROPS_LIST.length - 1 ? "last" : ""
            }`}
          >
            <h6 className="history-item-title text-third">{prop.title}</h6>
            <p className="history-item-text text-fourth">{prop.text}</p>
            <div className="history-item-icon">
              <img src={prop.icon} alt="prop-icon" />
            </div>
          </div>
        ))}
        <div className="home-page-history-bottom">
          <div className="home-page-history-bottom-left" />
          <div className="home-page-history-bottom-right" />
        </div>
        <div className="flex justify-center">
          <CustomButton text="Try it Free" />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
