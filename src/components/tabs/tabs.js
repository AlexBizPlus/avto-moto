import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myPropTypes as PropTypes } from "../../prop";
import clsx from "clsx";
import "./tabs.scss";
import { setActiveTab } from "../../store/actions/tabs-actions";
import { setIsShowPopup } from "../../store/actions/tabs-actions";
import ImgMap from "../../images/map.png";
import { ReactComponent as StarSvg } from "../../images/star.svg";
import {
  ModelReviewList,
  MAX_RATING,
  ADVICE_RATING,
  REVIEW,
  COMMENT_ID,
  SpecificationAdapter,
} from "../../const";
import SimpleMap from "../map/map";

const tabsList = [
  {
    title: "Характеристики",
    id: "specificationButton",
  },
  {
    title: "Отзывы",
    id: "reviewsButton",
  },
  {
    title: "Контакты",
    id: "contactsButton",
  },
];

const Tabs = ({ data }) => {
  const isShowPopup = useSelector((state) => state.TABS.isShowPopup);
  const activeTab = useSelector((state) => state.TABS.activeTab);
  const dispatch = useDispatch();
  const ratingStars = new Array(MAX_RATING).fill("");
  const [reviewList, setReviewList] = useState(ModelReviewList);

  const onButtonTabsClick = (evt) => {
    for (let i = 0; i < tabsList.length; i++) {
      if (evt.target.id === tabsList[i].id) {
        dispatch(setActiveTab(i));
        return;
      }
    }
  };

  const findButtonIndex = (str) => {
    return tabsList.findIndex((element) => element.title === str);
  };

  const onDeleteCommentButtonClick = () => {
    if (localStorage.REVIEW) {
      localStorage.removeItem(REVIEW);
      setReviewList(ModelReviewList);
    }
  };

  useEffect(() => {
    if (localStorage.REVIEW) {
      setReviewList([
        ...ModelReviewList,
        JSON.parse(localStorage.getItem(REVIEW)),
      ]);
    }
  }, [isShowPopup, reviewList.length]);

  return (
    <section className="tabs">
      <div className="tabs__button-list">
        {tabsList.map((item, index) => {
          return (
            <button
              className={clsx("tabs__button", {
                tabs__button_active: activeTab === index,
              })}
              type="button"
              onClick={onButtonTabsClick}
              id={item.id}
              key={item.id}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <ul
        className={clsx("tabs__item-list", {
          "visually-hidden": activeTab !== findButtonIndex("Характеристики"),
        })}
      >
        {Object.entries(data.specification).map(([itemKey, itemValue], i) => {
          return (
            <li className="tabs__item" key={`item${i}`}>
              <span className="tabs__item-key">
                {
                  Object.entries(SpecificationAdapter).find(
                    (elem) => elem[0] === itemKey
                  )[1]
                }
              </span>
              <span className="tabs__item-value">{itemValue}</span>
            </li>
          );
        })}
      </ul>
      <div
        className={clsx("tabs__contact-wrapper", {
          "visually-hidden": activeTab !== findButtonIndex("Контакты"),
        })}
      >
        <div>
          <h6 className="tabs__contact-caption">Адрес</h6>
          <p className="tabs__contact-text">
            Санкт-Петербург, <span />
            набережная реки Карповки, дом 5
          </p>
          <h6 className="tabs__contact-caption">Режим работы</h6>
          <p className="tabs__contact-text">Ежедневно, с 10:00 до 21:00</p>
          <h6 className="tabs__contact-caption">Телефон</h6>
          <a className="tabs__contact-text" href="tel:+78003335599">
            8 (800) 333-55-99
          </a>
          <h6 className="tabs__contact-caption">E-mail</h6>
          <a className="tabs__contact-text" href="mailto:info@avto-moto.ru">
            info@avto-moto.ru
          </a>
        </div>
        <div
          className="tabs__map-wrapper"
          style={{ width: "431", height: "271" }}
          id="map"
        >
          <img
            className="tabs__map-background"
            width={431}
            height={271}
            src={ImgMap}
            alt="map"
          />
          <SimpleMap />
        </div>
      </div>
      <div
        className={clsx("tabs__reviews-wrapper", {
          "visually-hidden": activeTab !== findButtonIndex("Отзывы"),
        })}
      >
        <button
          className={clsx("tabs__feedback-button", {
            "visually-hidden": localStorage.REVIEW,
          })}
          type="button"
          onClick={() => dispatch(setIsShowPopup(true))}
        >
          оставить отзыв
        </button>
        <ul className="tabs__reviews-list">
          {reviewList.map((item, i) => {
            return (
              <li className="tabs__reviews-item" key={item.commentId}>
                <span className="tabs__reviews-name">{item.name}</span>
                <span
                  className={clsx("tabs__advantages-caption", {
                    "visually-hidden": !item.advantages,
                  })}
                >
                  Достоинства
                </span>
                <span className="tabs__advantages">{item.advantages}</span>
                <span
                  className={clsx("tabs__advantages-caption", {
                    "visually-hidden": !item.disadvantages,
                  })}
                >
                  Недостатки
                </span>
                <span className="tabs__advantages">{item.disadvantages}</span>
                <span className="tabs__advantages-caption">Комментарий</span>
                <p className="tabs__advantages-text">{item.comment}</p>
                <div
                  className={clsx("tabs__stars", {
                    "visually-hidden": !item.rating,
                  })}
                >
                  {ratingStars.map((elem, i) => (
                    <StarSvg
                      className={clsx({
                        "tabs__red-star": item.rating > i,
                      })}
                      id={item.commentId}
                      key={`item${i}`}
                    />
                  ))}
                  <span className="tabs__advice">
                    {item.rating >= ADVICE_RATING ? "Советует" : "Не советует"}
                  </span>
                </div>
                <div className="tabs__timestamp-wrapper">
                  <span className="tabs__timestamp">{item.date}</span>
                  <button className="tabs__answer" type="button">
                    Ответить
                  </button>
                  <button
                    className={clsx("tabs__advice", {
                      "visually-hidden": item.commentId !== COMMENT_ID,
                    })}
                    onClick={onDeleteCommentButtonClick}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Tabs.propTypes = {
  data: PropTypes.carDetails,
};

export default Tabs;
