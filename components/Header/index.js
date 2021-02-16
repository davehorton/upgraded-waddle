import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { HEADER_MENULIST } from "../../enum";

import "./style.scss";

const Header = () => {
  return (
    <div className="main-header flex justify-between items-center pl-8 pr-16 h-16 bg-white">
      <Image
        src="/images/icon-logo.svg"
        alt="Picture of Logo"
        width={107}
        height={29}
      />
      <ul className="flex">
        {HEADER_MENULIST.map((menu, index) => (
          <li key={index} className="pl-8">
            <Link href={menu.url}>
              <a className="text-base">{menu.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
