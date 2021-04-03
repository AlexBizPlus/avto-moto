import React from "react";
import { NavLink } from "react-router-dom";
import { FooterList } from "../../const";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <nav className="footer__nav">
          <ul className="footer__list">
            {FooterList.map((item) => {
              return (
                <li className="footer__item" key={item.title}>
                  <NavLink
                    to={item.link}
                    activeClassName="footer__item--active"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
