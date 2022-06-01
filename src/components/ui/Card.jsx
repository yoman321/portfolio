import PropTypes from "prop-types";
import styles from "./Card.module.css";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultPropTypes = {};

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = propTypes;
Card.defaultPropTypes = defaultPropTypes;

export default Card;
