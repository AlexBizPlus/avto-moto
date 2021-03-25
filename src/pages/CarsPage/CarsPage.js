import React from "react";
import "../../scss/pages/CapsPage.scss";
import Header from "../../components/Header";
import CarsComponent from "../../components/CarsComponent";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";

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
