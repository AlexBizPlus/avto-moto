import PropTypes from "prop-types";

export const myPropTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string.isRequired),
    PropTypes.string,
  ]),
  imageList: PropTypes.arrayOf(PropTypes.string.isRequired),
  carDetails: PropTypes.shape({
    shortList: PropTypes.shape({
      fuel: PropTypes.string,
      transmission: PropTypes.string,
      power: PropTypes.string,
      volume: PropTypes.string,
    }),
    price: PropTypes.shape({
      actual: PropTypes.number,
      old: PropTypes.number,
    }),
    specification: PropTypes.shape({
      transmission: PropTypes.string,
      power: PropTypes.number,
      fuel: PropTypes.string,
      drive: PropTypes.string,
      volume: PropTypes.number,
      torque: PropTypes.string,
      cylinders: PropTypes.number,
    }),
  }),
};
