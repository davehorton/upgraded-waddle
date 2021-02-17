import React, { useState } from "react";
import Link from "next/link";
import { Popover } from "antd";

import { HEADER_MENULIST, INTERNAL_LINKS } from "../../enum";

import "./style.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const PopoverContent = () => {
    return (
      <ul className="mb-0 w-40">
        {HEADER_MENULIST.filter(menu => menu.label !== "Sign In").map(
          (menu, index) => (
            <li key={index}>
              <Link href={menu.url}>
                <a className="text-base text-gray-700 hover:text-gray-700">{menu.label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <div className="main-header flex justify-between items-center pl-4 pr-4 md:pl-8 md:pr-16 h-16 bg-white">
      <div className="main-header-logo-desktop hidden md:inline">
        <img
          src="/images/icon-logo.svg"
          alt="Picture of Logo"
          width={107}
          height={29}
        />
      </div>
      <div className="main-header-logo-desktop inline md:hidden">
        <img
          src="/images/img-logo.svg"
          alt="Image of Logo"
          width={122}
          height={40}
        />
      </div>
      <ul className="hidden md:flex">
        {HEADER_MENULIST.map((menu, index) => (
          <li key={index} className="pl-8">
            <Link href={menu.url}>
              <a className="text-base">{menu.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center md:hidden">
        <ul>
          <li className="pr-6">
            <Link href={INTERNAL_LINKS.SIGNIN}>
              <a className="text-base">Sign In</a>
            </Link>
          </li>
        </ul>
        <Popover
          content={<PopoverContent />}
          trigger="click"
          visible={visible}
          placement="bottomRight"
          onVisibleChange={setVisible}
        >
          <i className="fas fa-bars text-base" />
        </Popover>
      </div>
    </div>
  );
};

export default Header;
