import React, { useEffect, useRef } from "react";

import { testAction, fileUpload } from "./model";

import Header from "./component/Header";
import Nav from "./component/Nav";
import Content from "./component/Content";
import { BackTop } from "antd";

import { useDispatch, useSelector } from "react-redux";

import styles from "./index.less";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const pa = () => {
    console.log(123);
    dispatch(testAction());
  };

  const state = useSelector((state) => state);
  console.log(state);

  const onFileChange = (e) => {
    const files = e.target.files;
    // console.dir(e.target.files);

    dispatch(fileUpload(files));
  };
  return (
    <div className={styles.home}>
      <Header />
      <Nav />
      <Content />
      <BackTop>up</BackTop>
      <button onClick={pa}>click</button>
      <input type="file" onChange={onFileChange} multiple />
    </div>
  );
};

export default Home;
