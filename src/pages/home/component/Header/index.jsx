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
    <header className={styles.header}>
      <div className={styles.content}>
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
      </div>
    </header>
  );
};

export default Home;
