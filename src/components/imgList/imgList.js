/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { myPropTypes as PropTypes } from "../../prop";
import clsx from "clsx";
import "./imgList.scss";
import {
  setSliderImage,
  setSliderCurrent,
} from "../../store/actions/slider-actions";
import { ReactComponent as ArrowRightSvg } from "../../images/arrow-right.svg";

const ImgList = ({ imageList }) => {
  const currentSlide = useSelector((state) => state.SLIDER.currentSlide);
  const dispatch = useDispatch();

  const onSliderClick = (evt) => {
    evt.preventDefault();
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
      <div className="imgList__list-wrapper" onClick={onSliderClick}>
        <button
          disabled={currentSlide === 0}
          className="imgList__arrow imgList__arrow_left"
          id="ArrowLeft"
          type="button"
          aria-label="ArrowLeft"
        >
          <ArrowRightSvg
            className={clsx("imgList__svg", {
              "imgList__svg--disabled": currentSlide === 0,
            })}
          />
        </button>
        <ul className="imgList__list imgList__list--new">
          {imageList.map((item, i) => {
            return (
              <li key={`index${i}`}>
                <img width={128} height={80} src={item} alt="car photo" />
              </li>
            );
          })}
        </ul>
        <button
          disabled={currentSlide === imageList.length - 1}
          className="imgList__arrow"
          id="ArrowRight"
          type="button"
          aria-label="ArrowRight"
        >
          <ArrowRightSvg
            className={clsx("imgList__svg", {
              "imgList__svg--disabled": currentSlide === imageList.length - 1,
            })}
          />
        </button>
      </div>
    );
  } else {
    return null;
  }
};

ImgList.propTypes = {
  imageList: PropTypes.imageList,
};

export default ImgList;
