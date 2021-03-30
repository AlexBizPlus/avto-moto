import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import dayjs from "dayjs";
import "./popup.scss";
import { setIsShowPopup } from "../../store/actions/tabs-actions";
import { ReactComponent as CloseSvg } from "../../images/close.svg";
import { MAX_RATING, REVIEW, COMMENT_ID } from "../../const";

const Popup = () => {
  const isShowPopup = useSelector((state) => state.TABS.isShowPopup);
  const dispatch = useDispatch();
  const inputNameRef = useRef();
  const [name, setName] = useState("");
  const [advantages, setAdvantages] = useState("");
  const [disadvantages, setDisadvantages] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [isShowErrors, setIsShowErrors] = useState(false);

  const onPopupClick = (evt) => {
    switch (true) {
      case evt.target.id === "feedbackWrapper" ||
        evt.currentTarget.id === "feedbackClose" ||
        evt.code === "Escape":
        dispatch(setIsShowPopup(false));
        return;

      default:
        return;
    }
  };

  const onInputChange = (e) => {
    setIsShowErrors(false);
    switch (e.currentTarget.id) {
      case "name":
        setName(e.currentTarget.value);
        return;
      case "advantages":
        setAdvantages(e.currentTarget.value);
        return;
      case "disadvantages":
        setDisadvantages(e.currentTarget.value);
        return;
      case "comment":
        setComment(e.currentTarget.value);
        return;

      default:
        return;
    }
  };

  const onSubmitClick = (evt) => {
    evt.preventDefault();

    if (!name || !comment) {
      setIsShowErrors(true);
      return;
    }

    if (localStorage.REVIEW) {
      localStorage.removeItem(REVIEW);
    }

    localStorage.setItem(
      REVIEW,
      JSON.stringify({
        name,
        advantages,
        disadvantages,
        comment,
        rating,
        date: dayjs().format(),
        commentId: COMMENT_ID,
      })
    );

    setName("");
    setAdvantages("");
    setDisadvantages("");
    setComment("");
    if (document.getElementById(`rating-${rating}`)) {
      document.getElementById(`rating-${rating}`).remove();
    }
    setRating("");
    dispatch(setIsShowPopup(false));
  };

  const formRating = () => {
    return (
      <div className="popup__rating-wrapper" onClick={onRadioInputsClick}>
        {new Array(MAX_RATING * 2 + 1).fill("").map((_item, i) => {
          if (i === 0) {
            return <span>Оцените товар:</span>;
          }
          if (i % 2 !== 0) {
            let index = i === 1 ? MAX_RATING : MAX_RATING - (i + 1) / 2 + 1;
            return (
              <input
                class="visually-hidden"
                type="radio"
                name="rating"
                id={`rating-${index}`}
                value={index}
              />
            );
          } else {
            return (
              <label
                class="popup__rating-star-label"
                for={`rating-${MAX_RATING - i / 2 + 1}`}
              >
                <svg
                  class="popup__rating-star"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                    fill="#BDBEC2"
                    fill-opacity="0.7"
                  />
                </svg>
              </label>
            );
          }
        })}
      </div>
    );
  };

  const onRadioInputsClick = (evt) => {
    if (evt.target.value) {
      setRating(evt.target.value);
    }
  };

  useEffect(() => {
    if (isShowPopup) {
      inputNameRef.current.focus();
    }
  }, [isShowPopup]);

  return (
    <section
      className={clsx("popup", {
        "visually-hidden": !isShowPopup,
      })}
      onClick={onPopupClick}
      onKeyDown={onPopupClick}
      id="feedbackWrapper"
    >
      <div className="popup__wrapper">
        <form>
          <h5 className="popup__feedback-title">Оставить отзыв</h5>
          <div className="popup__container">
            <div className="popup__input-wrapper">
              <label
                className="popup__input popup__input--requared"
                htmlFor="name"
              />
              <input
                className={clsx("popup__input", {
                  "popup__input--error": isShowErrors && !name,
                })}
                placeholder="Имя"
                type="text"
                id="name"
                ref={inputNameRef}
                value={name}
                onChange={onInputChange}
                autoComplete="off"
              />
              <span
                className={clsx("popup__error", {
                  "visually-hidden": !isShowErrors || name,
                })}
              >
                Пожалуйста, заполните поле
              </span>
              <input
                className="popup__input"
                type="text"
                id="advantages"
                value={advantages}
                placeholder="Достоинства"
                onChange={onInputChange}
                autoComplete="off"
              />
              <input
                className="popup__input"
                type="text"
                id="disadvantages"
                value={disadvantages}
                placeholder="Недостатки"
                onChange={onInputChange}
                autoComplete="off"
              />
            </div>
            <div className="popup__textarea-wrapper">
              {formRating()}
              <label
                className="popup__textarea-label popup__textarea-label--requared"
                htmlFor="comment"
              >
                <textarea
                  className={clsx("popup__textarea", {
                    "popup__input--error": isShowErrors && !comment,
                  })}
                  name="comment"
                  id="comment"
                  value={comment}
                  placeholder="Комментарий"
                  onChange={onInputChange}
                  autoComplete="off"
                />
                <span
                  className={clsx("popup__error", {
                    "visually-hidden": !isShowErrors || comment,
                  })}
                >
                  Пожалуйста, заполните поле
                </span>
              </label>
            </div>
          </div>
          <button
            className="popup__submit-button"
            type="submit"
            onClick={onSubmitClick}
          >
            оставить отзыв
          </button>
          <button
            className="popup__close-button"
            type="button"
            id="feedbackClose"
            onClick={onPopupClick}
          >
            <CloseSvg />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Popup;
