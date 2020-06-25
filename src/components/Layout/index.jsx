import React, { useState } from "react";
import Side from "@components/Slider";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const Layout = (props) => {
  const [key, setKey] = useState(1);
  return (
    <div className="container">
      {/* <Side /> */}
      <button
        onClick={() => {
          setKey(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setKey(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setKey(3);
        }}
      >
        3
      </button>
      <Tabs activeKey={key + ""}>
        <TabPane tab="123" key="1">
          1
        </TabPane>
        <TabPane tab="123" key="2">
          2
        </TabPane>
        <TabPane tab="123" key="3">
          3
        </TabPane>
      </Tabs>
      {props.children}
    </div>
  );
};
export default Layout;
