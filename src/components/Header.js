import React, { useState } from "react";
import "./header.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";
export const Header = () => {
  const [menu, setmenu] = useState(false);
  return (
    <BrowserRouter>
      <div className="hMenu">
        <a href="#" onClick={() => setmenu(!menu)}>
          <GiHamburgerMenu className="ham" />
        </a>
      </div>
      <div className="div1">
        <nav className="main-nav">
          <div className="menu div1">
            <ul className={menu ? "menuList mobileMenuList " : "menuList"}>
              <li className="li">
                <Link to="#aboutMe" className="li" smooth>
                  {" "}
                  About
                </Link>
              </li>
              <li>
                <Link to="#exp" className="li" smooth>
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="#work" className="li" smooth>
                  Works
                </Link>
              </li>
              <li>
                <Link to="#contact" className="li" smooth>
                  Contact me
                </Link>
              </li>
            </ul>{" "}
          </div>
        </nav>
      </div>

      <div className="div2">
        <a href="#" className="li">
          <button className="rButton">resume</button>
        </a>
      </div>
    </BrowserRouter>
  );
};
