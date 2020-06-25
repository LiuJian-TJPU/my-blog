import React, { useState, useMemo, useEffect } from "react";
import { Tabs } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { types } from "@constants/nav";

import styles from "./index.less";
const { TabPane } = Tabs;
const Home = () => {
  const { end = "frontend", type = "all" } = useParams();
  const history = useHistory();
  const onTabChange = (tab) => {
    history.push(`/${end}/${tab}`);
  };

  // if (!types[end]) {
  //   history.replace("/");
  // }

  const typeList = useMemo(() => {
    const list = types[end];
    if (list) {
      return list;
    } else {
      return [];
    }
  }, [end]);

  return (
    <nav className={styles.nav}>
      <Tabs activeKey={type} className={styles.tabs} onChange={onTabChange}>
        {typeList.map(({ key, title }) => (
          <TabPane tab={title} key={key} />
        ))}
      </Tabs>
    </nav>
  );
};

export default Home;
