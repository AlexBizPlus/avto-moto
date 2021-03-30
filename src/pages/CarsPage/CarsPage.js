import React from "react";
import "./capsPage.scss";
import Header from "../../components/header/header";
import CarsComponent from "../../components/carsComponent/carsComponent";
import Footer from "../../components/footer/footer";
import Popup from "../../components/popup/popup";

const CarsPage = () => {
  return (
    <div className="cars-page">
      <Header />
      <CarsComponent />
      <Footer />
      <Popup />
    </div>
  );
};

export default CarsPage;
