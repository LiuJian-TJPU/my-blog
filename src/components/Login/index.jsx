// import React from "react";
// import PropTypes from "prop-types";

// import { getCaptcha, register } from "@server/user";

// import { Tabs, Form, Input, Button, notification } from "antd";
// import styles from "./index.less";
// import { useDispatch } from "react-redux";

// const { Item } = Form;
// const { TabPane } = Tabs;
// const Login = (props) => {
//   const dispatch = useDispatch();
//   const [form] = Form.useForm();
//   const onSignIn = ({ username, password }) => {
//     dispatch({
//       type: "user/login",
//       payload: { username, password },
//       callback() {},
//     });
//   };

//   const onSignUp = ({ username, password }) => {
//     dispatch({
//       type: "user/register",
//       payload: { username, password },
//       callback() {},
//     });
//   };

//   const onGetCaptcha = async () => {
//     const address = form.getFieldValue("address");
//     const res = await getCaptcha(address);
//     if (res.success) {
//       notification.success({
//         message: "验证码发送成功",
//       });
//     }
//   };

//   return (
//     <div className={styles.login}>
//       <Tabs>
//         <TabPane tab="登录" key="signIn">
//           <Form onFinish={onSignIn}>
//             <Item name="username">
//               <Input
//                 size="large"
//                 autoComplete="off"
//                 placeholder="请输入手机号或者用户名"
//               />
//             </Item>
//             <Item name="password">
//               <Input.Password size="large" placeholder="请输入密码" />
//             </Item>
//             <Button size="large" htmlType="submit" type="primary" block>
//               登录
//             </Button>
//           </Form>
//         </TabPane>
//         <TabPane tab="注册" key="signUp">
//           <Form form={form} onFinish={onSignUp}>
//             <Item name="username">
//               <Input autoComplete="off" size="large" placeholder="用户名" />
//             </Item>
//             <Item name="address">
//               <Input autoComplete="off" size="large" placeholder="邮箱" />
//             </Item>
//             <Item name="captcha">
//               <Input.Search
//                 size="large"
//                 placeholder="请输入验证码"
//                 enterButton="获取验证码"
//                 onSearch={onGetCaptcha}
//               />
//             </Item>
//             <Item name="password">
//               <Input.Password size="large" placeholder="请输入密码" />
//             </Item>
//             <Item name="passwordAgain">
//               <Input.Password size="large" placeholder="请再次输入密码" />
//             </Item>
//             <Button size="large" htmlType="submit" type="primary" block>
//               注册
//             </Button>
//           </Form>
//         </TabPane>
//       </Tabs>
//     </div>
//   );
// };
// Login.defaultProps = {};

// Login.propTypes = {};

// export default Login;

import React, { useState } from "react";
import { Form } from "antd";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
  Divider,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

// import { "userLoginType" } from "@models/user";

import { Light } from "../../common/theme";

import styles from "./index.less";

import { useSelector, useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [form] = Form.useForm();
  const { open } = useSelector(({ user }) => user);
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
  console.log(open);
  // const handleClose = () => {
  //   dispatch({
  //     type: "user/save",
  //     payload: {
  //       open: true,
  //     },
  //   });
  //   // form.submit();
  // };
  const handleLogin = (value) => {
    console.log(value);
    const { username, password } = value;
    dispatch({
      type: "userLoginType",
      payload: { username, password },
      callback() {},
    });
  };
  return (
    <Light>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        className={styles.root}
        disableBackdropClick={true}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>登录注册</DialogTitle>
        <DialogContent>
          <Form onFinish={handleLogin} form={form}>
            <Form.Item name="username" noStyle>
              <TextField autoFocus margin="dense" label="手机号" fullWidth />
            </Form.Item>
          </Form>
          <Form onFinish={handleLogin} form={form}>
            <Form.Item name="password" noStyle>
              <TextField
                margin="dense"
                label="密码"
                type={type}
                fullWidth
                InputProps={{
                  endAdornment:
                    type === "password" ? (
                      <VisibilityIcon
                        className={styles.svg}
                        fontSize="small"
                        onClick={() => {
                          setType("text");
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className={styles.svg}
                        fontSize="small"
                        onClick={() => {
                          setType("password");
                        }}
                      />
                    ),
                }}
              />
            </Form.Item>
          </Form>
        </DialogContent>
        <Typography variant="subtitle2">未注册手机验证后自动登录 </Typography>
        <Divider light={false} />
        <Typography variant="subtitle2">
          社交帐号登录
          <div style={{ flex: 1 }} />
          <a href="https://github.com/login/oauth/authorize/?client_id=5302e0a84143b8b3de00&redirect_uri=http://localhost:3008/login">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </Typography>
        <DialogActions>
          <Button color="primary">取消</Button>
          <Button color="primary">登录</Button>
        </DialogActions>
      </Dialog>
    </Light>
  );
}
