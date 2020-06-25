import React from "react";
import PropTypes from "prop-types";
import styles from "./index.less";

const Side = (props) => {
  return (
    <div className={styles.side}>
      <div className={styles.item}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
    </div>
  );
};
Side.defaultProps = {};

Side.propTypes = {};

export default Side;
