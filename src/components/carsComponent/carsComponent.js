import React from "react";
import "./carsComponent.scss";
import Slider from "../slider/slider";
import Tabs from "../tabs/tabs";
import { ReactComponent as FuelSvg } from "../../images/fuel.svg";
import { ReactComponent as TransmissionSvg } from "../../images/transmission.svg";
import { ReactComponent as PowerSvg } from "../../images/power.svg";
import { ReactComponent as VolumeSvg } from "../../images/volume.svg";
import { CarDetails } from "../../const";

const CarsComponent = () => {
  const setIcon = (flag) => {
    switch (flag) {
      case "fuel":
        return <FuelSvg />;

      case "transmission":
        return <TransmissionSvg />;

      case "power":
        return <PowerSvg />;

      case "volume":
        return <VolumeSvg />;

      default:
        return <VolumeSvg />;
    }
  };

  const splitPrice = (elem) => {
    const str = elem.toString().split("");
    return str
      .reduce((sum, item, index) => {
        if ((str.length - index) % 3 === 0) {
          return sum + " " + item;
        } else {
          return sum + item;
        }
      }, "")
      .trim();
  };

  return (
    <main className="cars-component">
      <div className="cars-component__wrapper">
        <Slider classNameProp="cars-component__slider" />
        <section className="cars-component__right-section">
          <h1 className="cars-component__header">Марпех 11</h1>
          <ul className="cars-component__short-list-wrapper">
            {Object.entries(CarDetails.shortList).map(
              ([itemKey, itemValue], i) => {
                return (
                  <li
                    className="cars-component__short-list-item"
                    key={`item${i}`}
                  >
                    <div className="cars-component__short-list-icon">
                      {setIcon(itemKey)}
                    </div>
                    <span>{itemValue}</span>
                  </li>
                );
              }
            )}
          </ul>
          <div className="cars-component__price-wrapper">
            <span className="cars-component__price-actual">
              {splitPrice(CarDetails.price.actual)} ₽
            </span>
            <span className="cars-component__price-old">
              {splitPrice(CarDetails.price.old)} ₽
            </span>
          </div>
          <button type="button" className="cars-component__button">
            оставить заявку
          </button>
          <button
            type="button"
            className="cars-component__button cars-component__button--white cars-component__button--margin-top"
          >
            В КРЕДИТ ОТ 11 000 <span>₽</span>
          </button>
        </section>
        <Tabs data={CarDetails} />
      </div>
    </main>
  );
};

export default CarsComponent;
