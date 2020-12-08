import React, { PureComponent } from "react";
import Nav from "@components/Nav";
import { BackTop } from "antd";
import { IconButton } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import styles from "./index.less";

class Layout extends PureComponent {
  render() {
    return (
      <div className={styles.layout}>
        <Nav />
        <div className={styles.content}>{this.props.children}</div>
        <BackTop>
          <IconButton>
            <KeyboardArrowUpIcon fontSize="large" />
          </IconButton>
        </BackTop>
      </div>
    );
  }
}
export default Layout;
