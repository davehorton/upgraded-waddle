import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { FOOTER_MENULIST } from "../../enum";

import "./style.scss";

const Footer = () => {
  return (
    <div className="main-footer px-4 py-12 flex flex-col justify-center items-center md:px-12">
      <div className="main-footer-container">
        {FOOTER_MENULIST.map((row, index) => (
          <div key={index} className="flex justify-between">
            {row.map((col, colIndex) => (
              <Link key={`col-${colIndex}`} href={col.url}>
                <a className="main-footer-link text-base pb-4">{col.label}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <Link href="/">
        <a className="main-footer-link text-base pt-8">© 2020 Jambonz</a>
      </Link>
    </div>
  );
};

Footer.propTypes = {
  onChange: PropTypes.func
};

Footer.defaultProps = {
  onChange: () => {}
};

export default Footer;
