import React from "react";
import PropTypes from "prop-types";

import { Tabs, Form, Input, Button } from "antd";
import styles from "./index.less";

const { Item } = Form;
const { TabPane } = Tabs;
const User = (props) => {
  return <div className={styles.user}>用户</div>;
};
User.defaultProps = {};

User.propTypes = {};

export default User;
