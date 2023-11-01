import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./Buttons/LoginButton";
function NavMenu2() {
  const menuList = [
    { title: "Home", route: "/open-problems/" },
    // { title: "About", route: "/about" },
    // { title: "Search", route: "/question" },
  ];

  return (
    <Fragment>
      <a href="https://longevityknowledge.com" target="_blank">
        <h1 className="nav-title text-xl font-bold">Open Longevity</h1>
      </a>
      <ul className="nav-list list-none flex flex-row items-center gap-6 h-full">
        {menuList.map((item) => {
          return (
            <li
              key={item.title}
              className=" hover:bg-slate-200 p-2 rounded-sm  "
            >
              <a
                href={item.route}
                rel="noreferrer"
                target=""
                className="flex items-center h-full transition-colors duration-250 text-sm"
              >
                {item.title}
              </a>
            </li>
          );
        })}
        <LoginButton />
      </ul>
    </Fragment>
  );
}

export default NavMenu2;
