import React, { useState, useEffect } from "react";

import { Typography, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import styles from "./index.less";

const Home = () => {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener(
      "orientationchange",
      function () {
        // 宣布新方向的数值
        // alert(window.orientation);
        // alert(window.innerHeight);
        setTimeout(() => {
          setHeight(window.innerHeight);
        }, 300);
      },
      false
    );
  }, []);

  const handleToBottom = () => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };
  return (
    <header
      className={styles.header}
      style={{
        height,
        // backgroundImage:
        //   "url(https://demos.creative-tim.com/material-kit-react/static/media/bg4.199e9ec1.jpg)",
      }}
    >
      <Typography variant="h1" className={styles.title}>
        The road to the front
      </Typography>
      <Typography variant="h4" className={styles.title}>
        这是一个博客关于
      </Typography>
      <div className={styles.toBottom}>
        <IconButton onClick={handleToBottom}>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
};

export default Home;
