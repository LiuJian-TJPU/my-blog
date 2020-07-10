import React, { useState, useMemo, useEffect } from "react";
import { Tabs } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { types } from "@constants/nav";

import styles from "./index.less";
const { TabPane } = Tabs;
const Home = ({ top, scrollTop }) => {
  const { end = "frontend", type = "all" } = useParams();
  const history = useHistory();
  const onTabChange = (tab) => {
    history.push(`/${end}/${tab}`);
  };

  const typeList = useMemo(() => {
    const list = types[end];
    if (list) {
      return list;
    } else {
      return [];
    }
  }, [end]);

  const style = useMemo(() => {
    if (scrollTop >= window.innerHeight) {
      return {
        zIndex: "9",
        opacity: 1,
      };
    }

    return {
      zIndex: "-5",
      opacity: 0,
    };
  }, [scrollTop]);
  return (
    <nav className={styles.nav} style={style}>
      <Tabs activeKey={type} className={styles.tabs} onChange={onTabChange}>
        {typeList.map(({ key, title }) => (
          <TabPane tab={title} key={key} />
        ))}
      </Tabs>
    </nav>
  );
};

export default Home;
