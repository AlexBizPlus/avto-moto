import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import "./carsPage.scss";
import Header from "../../components/header/header";
import CarsComponent from "../../components/carsComponent/carsComponent";
import Footer from "../../components/footer/footer";
import Popup from "../../components/popup/popup";

const CarsPage = () => {
  const isShowPopup = useSelector((state) => state.TABS.isShowPopup);

  return (
    <div
      className={clsx("cars-page", {
        "cars-page--fixed": isShowPopup,
      })}
    >
      <Header />
      <CarsComponent />
      <Footer />
      <Popup />
    </div>
  );
};

export default CarsPage;
