import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Card, Button } from "../../components";

import "./style.scss";

const { PriceCard1, PriceCard2 } = Card;

const Data1 = [
  {
    title: "A capacity of",
    text: [`5 simultaneous calls`, `5 simultaneously registered devices`]
  },
  {
    title: "A prepaid credit",
    text: [
      "to get you started making outbound",
      "calls and using speech services"
    ]
  }
];

const Data2 = [
  {
    title: "Add Capacity",
    text:
      "Purchase capacity for the number of active calls and devices you need to support"
  },
  {
    title: "Add Prepaid Funds",
    text:
      "Complete calls through your own carrier at no added cost, or fund a prepaid account to cover your calling costs"
  },
  {
    title: "Purchase Add-Ons",
    text:
      "Choose from a selection of optional add-ons to extend the functionality of your account"
  }
];

const Data3 = [
  "Purchase phone numbers",
  "Coming soon",
  "Port an existing phone number",
  "Coming soon",
  "Enable Microsoft Teams Direct Routing",
  "Coming soon",
  "Provision a Node-RED app server",
  "Coming soon",
  "Private Session Border Controller with monitoring dashboard",
  "Coming soon"
];

const PricingContent = () => {
  return (
    <div className="pricing-content flex flex-col justify-center sm:items-center">
      <h2 className="text-third">Pricing</h2>
      <h3 className="text-primary sm:text-center">
        jambonz accounts are free.
      </h3>
      <h4 className="text-third mt-6 sm:mt-0 sm:text-center">
        Every account comes with
      </h4>
      <div className="pricing-content-every flex mt-4 sm:mt-8">
        {Data1.map((item, index) => (
          <PriceCard1
            className="price-card1 mx-2"
            key={index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      <h4 className="text-third mt-2 sm:mt-16">Ready to grow?</h4>
      <div className="pricing-content-every flex mt-4 sm:mt-8 w-full justify-center">
        {Data2.map((item, index) => (
          <PriceCard2
            className="price-card2 mx-2"
            key={index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      <h4 className="text-third mt-2 sm:mt-16">Add-Ons</h4>
      <div className="mt-6 sm:mt-8 add-ons-table bg-white rounded-lg shadow-primary">
        <h6 className="hidden sm:block add-ons-table-th font-semibold text-left text-base text-fourth mb-0">
          Add-On
        </h6>
        <h6 className="hidden sm:block add-ons-table-th font-semibold text-center text-base text-fourth mb-0">
          Pricing
        </h6>
        <h6 className="block sm:hidden add-ons-table-th font-semibold text-base text-fourth mb-0">
          Coming Soon
        </h6>
        {Data3.map((item, index) => (
          <h6
            key={index}
            className={clsx(
              "add-ons-table-td font-normal text-base text-third mb-0 px-8",
              {
                "text-left": index % 2 === 0,
                "text-center hidden sm:block": index % 2 === 1
              }
            )}
          >
            {item}
          </h6>
        ))}
      </div>
      <h4 className="text-third mt-6 sm:mt-16">Want to learn more?</h4>
      <div className="bg-white rounded-lg shadow-primary mt-4 sm:mt-8 p-4 sm:p-8">
        <h6 className="font-normal sm:text-center text-base text-fourth mb-2 sm:mb-4">
          Contact us for additional information at
        </h6>
        <h6 className="font-medium sm:text-center text-base text-primary mb-0">
          sales@jambonz.org
        </h6>
      </div>
      <Button size="sm" className="mt-8 sm:mt-16 mx-auto" text="Register Now" />
    </div>
  );
};

PricingContent.propTypes = {
  title: PropTypes.string
};

PricingContent.defaultProps = {
  title: ""
};

export default PricingContent;
