/**
 * @description 版心文件
 */

import React from "react";
import styles from "./index.less";

const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
export default Container;
