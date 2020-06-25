import React, { useEffect, useRef } from "react";

import Header from "./component/Header";
import Nav from "./component/Nav";
import Content from "./component/Content";
import { BackTop } from "antd";

import styles from "./index.less";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Nav />
      <Content />
      <BackTop>up</BackTop>
    </div>
  );
};

export default Home;
