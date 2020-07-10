import React, { useState, useRef } from "react";
import { Input } from "antd";
import { Link, useParams } from "react-router-dom";
import { ends } from "@constants/nav";

import styles from "./index.less";

const Home = () => {
  const { end = "frontend", type = "all" } = useParams();
  console.log(end, type);
  const [inputWidth, setInputWidth] = useState(150);
  return (
    <header
      className={styles.header}
      style={{
        height: window.innerHeight,
        backgroundImage:
          "url(https://api.berryapi.net/?service=App.Bing.Images&day=7)",
      }}
    >
      <div className={styles.mask}>
        <div className={styles.tip}>
          <p>
            错误的人什么都没有留下，只教会了我们惩罚对的人的方法。比如一段突如其来的倔强，比如一场没有终结的冷漠，比如一次轻而易举的离开。
          </p>
          <p>-</p>
          <p>艾默生</p>
        </div>
      </div>
      {/* <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/">博客</Link>
          </div>
          <div className={styles.nav}>
            {ends.map(({ key, title }) => (
              <Link
                key={key}
                to={`/${key}/all`}
                className={end === key ? styles.selected : ""}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.search}>
          <Input.Search
            size="middle"
            style={{ width: inputWidth }}
            placeholder="搜索"
            allowClear
            onFocus={() => {
              setInputWidth(300);
            }}
            onBlur={() => {
              setInputWidth(150);
            }}
          />
        </div>
      </div> */}
    </header>
  );
};

export default Home;
