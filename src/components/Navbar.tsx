import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { menu } from "../data/menu";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    const body = document.querySelector(".body");

    if (body.classList.contains("open-menu")) {
      body.classList.remove("open-menu");
    } else {
      body.classList.add("open-menu");
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        {isTabletOrMobile && (
          <img
            className="burger-menu"
            onClick={handleToggle}
            src={isActive ? "close.png" : "menu.png"}
            alt=""
          />
        )}
        <ul className="menu">
          {menu.map((e, i) => (
            <li key={i}>
              <Link onClick={handleToggle} to={e.to}>{`${e.text}`}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
