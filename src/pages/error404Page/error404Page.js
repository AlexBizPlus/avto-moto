import React from "react";
import { Link } from "react-router-dom";
import "./error404Page.scss";
import { Routes } from "../../const";

const Error404 = () => {
  return (
    <div className="error404">
      <p>Page not found</p>
      <Link className="error404__link" to={Routes.CARS}>
        Go to main page
      </Link>
    </div>
  );
};

export default Error404;
