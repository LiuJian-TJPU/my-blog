import React from "react";
import PropTypes from "prop-types";

import { Tabs, Form, Input, Button } from "antd";
import styles from "./index.less";

const { Item } = Form;
const { TabPane } = Tabs;
const Login = (props) => {
  const onSignIn = (value) => {
    console.log(value);
  };

  const onSignUp = (value) => {
    console.log(value);
  };
  return (
    <div className={styles.login}>
      <Tabs>
        <TabPane tab="登录" key="signIn">
          <Form onFinish={onSignIn}>
            <Item name="name">
              <Input
                size="large"
                autoComplete="off"
                placeholder="请输入手机号或者用户名"
              />
            </Item>
            <Item name="password">
              <Input.Password size="large" placeholder="请输入密码" />
            </Item>
            <Button size="large" htmlType="submit" type="primary" block>
              登录
            </Button>
          </Form>
        </TabPane>
        <TabPane tab="注册" key="signUp">
          <Form onFinish={onSignUp}>
            <Item name="name">
              <Input autoComplete="off" size="large" placeholder="用户名" />
            </Item>
            <Item name="password">
              <Input autoComplete="off" size="large" placeholder="手机号" />
            </Item>
            <Item name="passwordAgain">
              <Input.Password size="large" placeholder="请再次输入密码" />
            </Item>
            <Button size="large" htmlType="submit" type="primary" block>
              注册
            </Button>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};
Login.defaultProps = {};

Login.propTypes = {};

export default Login;
