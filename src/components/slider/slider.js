/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myPropTypes as PropTypes } from "../../prop";
import "./slider.scss";
import {
  setSliderImage,
  setSliderCurrent,
} from "../../store/actions/slider-actions";
import ImgList from "../imgList/imgList";
import { DEFAULT_SLIDE } from "../../const";
import ImgCar1 from "../../images/car-1.png";
import ImgCar2 from "../../images/car-2.png";
import ImgCar3 from "../../images/car-3.png";

const imageList = [ImgCar1, ImgCar2, ImgCar3];

const Slider = ({ classNameProp }) => {
  const imgSrc = useSelector((state) => state.SLIDER.imageSrc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSliderImage(imageList[DEFAULT_SLIDE]));
    dispatch(setSliderCurrent(DEFAULT_SLIDE));
  }, [dispatch]);

  return (
    <div className={["slider slider--new", classNameProp].join(" ")}>
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

Slider.propTypes = {
  classNameProp: PropTypes.classes,
};

export default Slider;
