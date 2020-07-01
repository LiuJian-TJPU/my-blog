import React from "react";
import PropTypes from "prop-types";

import { getCaptcha } from "@server/user";

import { Tabs, Form, Input, Button, notification } from "antd";
import styles from "./index.less";

const { Item } = Form;
const { TabPane } = Tabs;
const Login = (props) => {
  const [form] = Form.useForm();
  const onSignIn = (value) => {
    console.log(value);
  };

  const onSignUp = (value) => {
    console.log(value);
  };

  const onGetCaptcha = async () => {
    const address = form.getFieldValue("address");
    const res = await getCaptcha(address);
    if (res.success) {
      notification.success({
        message: "验证码发送成功",
      });
    }
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
          <Form form={form} onFinish={onSignUp}>
            <Item name="name">
              <Input autoComplete="off" size="large" placeholder="用户名" />
            </Item>
            <Item name="address">
              <Input autoComplete="off" size="large" placeholder="邮箱" />
            </Item>
            <Item name="captcha">
              <Input.Search
                size="large"
                placeholder="请输入验证码"
                enterButton="获取验证码"
                onSearch={onGetCaptcha}
              />
            </Item>
            <Item name="passwordAgain">
              <Input.Password size="large" placeholder="请输入密码" />
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
