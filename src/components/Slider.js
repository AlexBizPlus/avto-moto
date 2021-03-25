/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import "../scss/components/Slider.scss";
import {
  setSliderImage,
  setSliderCurrent,
} from "../store/actions/slider-actions";
import { DEFAULT_SLIDE } from "../const";
import ImgCar1 from "../images/car-1.png";
import ImgCar2 from "../images/car-2.png";
import ImgCar3 from "../images/car-3.png";
import { ReactComponent as ArrowRightSvg } from "../images/arrow-right.svg";

const imageList = [ImgCar1, ImgCar2, ImgCar3];

const ImgList = ({ imageList }) => {
  const currentSlide = useSelector((state) => state.SLIDER.currentSlide);
  const dispatch = useDispatch();

  const onSliderClick = (evt) => {
    evt.preventDefault();
    console.log(`evt.currentTarget`, evt.currentTarget);
    console.log(`evt.target`, evt.target);
    switch (true) {
      case currentSlide < imageList.length - 1 &&
        (evt.target.id === "ArrowRight" ||
          evt.target.parentNode.id === "ArrowRight"):
        dispatch(setSliderImage(imageList[currentSlide + 1]));
        dispatch(setSliderCurrent(currentSlide + 1));
        break;

      case currentSlide > 0 &&
        (evt.target.id === "ArrowLeft" ||
          evt.target.parentNode.id === "ArrowLeft"):
        dispatch(setSliderImage(imageList[currentSlide - 1]));
        dispatch(setSliderCurrent(currentSlide - 1));
        break;

      default:
        return;
    }
  };

  if (imageList.length > 0) {
    return (
      <div className="slider__list-wrapper" onClick={onSliderClick}>
        <button
          disabled={currentSlide === 0}
          className="slider__arrow slider__arrow_left"
          id="ArrowLeft"
          type="button"
          aria-label="ArrowLeft"
        >
          <ArrowRightSvg
            className={clsx({ slider__svg_disabled: currentSlide === 0 })}
          />
        </button>
        <ul className="slider__list slider__list_new">
          {imageList.map((item, i) => {
            return (
              <li key={`index${i}`}>
                <img width={128} heigh={80} src={item} alt="car photo" />
              </li>
            );
          })}
        </ul>
        <button
          disabled={currentSlide === imageList.length - 1}
          className="slider__arrow"
          id="ArrowRight"
          type="button"
          aria-label="ArrowRight"
        >
          <ArrowRightSvg
            className={clsx({
              slider__svg_disabled: currentSlide === imageList.length - 1,
            })}
          />
        </button>
      </div>
    );
  } else {
    return null;
  }
};

const Slider = ({ classNameProp }) => {
  const imgSrc = useSelector((state) => state.SLIDER.imageSrc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSliderImage(imageList[DEFAULT_SLIDE]));
    dispatch(setSliderCurrent(DEFAULT_SLIDE));
  }, [dispatch]);

  return (
    <div className={["slider slider_new", classNameProp].join(" ")}>
      <img
        className="slider__img"
        width={600}
        heigh={375}
        src={imgSrc}
        alt="car photo"
      />
      <ImgList imageList={imageList} />
    </div>
  );
};

export default Slider;
