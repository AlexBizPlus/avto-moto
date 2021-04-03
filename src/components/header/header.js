import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderList } from "../../const";
import "./header.scss";
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as LogoSignSvg } from "../../images/logo-sign.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <LogoSignSvg className="header__logo_svg" />
          <LogoSvg />
        </div>
        <nav>
          <ul className="header__list">
            {HeaderList.map((item) => {
              return (
                <li className="header__item" key={item.title}>
                  <NavLink
                    to={item.link}
                    activeClassName="header__item--active"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
