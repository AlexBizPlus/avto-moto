export const Routes = {
  CARS: "/cars",
  ERROR404: "/404",
};

export const HeaderList = [
  {
    title: "Автомобили",
    link: Routes.CARS,
  },
  {
    title: "Контакты",
    link: Routes.ERROR404,
  },
  {
    title: "Услуги",
    link: Routes.ERROR404,
  },
  {
    title: "Вакансии",
    link: Routes.ERROR404,
  },
];

export const FooterList = [
  {
    title: "Корпоративным клиентам",
    link: Routes.ERROR404,
  },
  {
    title: "Клиентам",
    link: Routes.ERROR404,
  },
  {
    title: "Аренда авто",
    link: Routes.ERROR404,
  },
  {
    title: "Каршеринг",
    link: Routes.ERROR404,
  },
  {
    title: "Как продать авто ",
    link: Routes.ERROR404,
  },
  {
    title: "Traid-in",
    link: Routes.ERROR404,
  },
  {
    title: "Test draiv",
    link: Routes.ERROR404,
  },
];

export const DEFAULT_SLIDE = 0;

export const CarDetails = {
  shortList: {
    fuel: "бензин",
    transmission: "механика",
    power: "100 л.с.",
    volume: "1.4 л",
  },
  price: {
    actual: 2300000,
    old: 2400000,
  },
  specification: {
    transmission: "Роботизированная",
    power: 249,
    fuel: "Бензиновый",
    drive: "Полный",
    volume: 2.4,
    torque: "370/4500",
    cylinders: 4,
  },
};

export const ModelReviewList = [
  {
    name: "Борис Иванов",
    advantages: "мощность, внешний вид",
    disadvantages: "Слабые тормозные колодки (пришлось заменить)",
    comment:
      "Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.",
    rating: 3,
    date: "1 минуту назад",
    commentId: 1,
  },
  {
    name: "Марсель Исмагилов",
    advantages: "Cтиль, комфорт, управляемость",
    disadvantages: "Дорогой ремонт и обслуживание",
    comment:
      "Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.",
    rating: 3,
    date: "1 минуту назад",
    commentId: 2,
  },
];

export const SpecificationAdapter = {
  transmission: "Трансмиссия",
  power: "Мощность двигателя, л.с.",
  fuel: "Тип двигателя",
  drive: "Привод",
  volume: "Объем двигателя, л",
  torque: "Макс. крутящий момент",
  cylinders: "Количество цилиндров",
};

export const MapSettings = {
  center: {
    lat: 59.968137,
    lng: 30.316263,
  },
  zoom: 8,
  marker: {
    lat: 59.968137,
    lng: 30.316263,
  },
};

export const MAX_RATING = 5;
export const ADVICE_RATING = 3;

export const REVIEW = "REVIEW";
export const COMMENT_ID = 3;

export const YOUR_API_KEY = "AIzaSyDxtbrxOJ5bAuXXkBO28TVpbOnkr1RNGNg";
