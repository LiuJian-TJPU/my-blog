import React, { useEffect, useRef } from "react";

import { testAction, fileUpload } from "./model";

import Header from "./component/Header";
import Nav from "./component/Nav";
import Content from "./component/Content";
import { BackTop } from "antd";

import { useDispatch, useSelector } from "react-redux";

import styles from "./index.less";

const Home = () => {
  const pa = () => {
    console.log(123);
    dispatch(testAction());
  };

  const { top, scrollTop } = useSelector(({ common }) => common.position);

  const onFileChange = (e) => {
    const files = e.target.files;
    // console.dir(e.target.files);

    dispatch(fileUpload(files));
  };
  return (
    <div
      className={styles.home}
      // onClick={() => dispatch({ type: "test/test" })}
    >
      <Header />
      <Nav top={top} scrollTop={scrollTop} />
      <Content />
      <BackTop>up</BackTop>
    </div>
  );
};

export default Home;
