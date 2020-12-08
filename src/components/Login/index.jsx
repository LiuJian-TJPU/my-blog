import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  IconButton,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import CloseIcon from "@material-ui/icons/Close";

import { WechatFilled, DingtalkCircleFilled } from "@ant-design/icons";

import { actionToggleLogin } from "@models/user";

import { Light } from "../../common/theme";

import styles from "./index.less";

import { connect } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

@connect(
  ({ user }) => ({
    open: user.open,
  }),
  {
    actionToggleLogin,
  }
)
class Login extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  close = () => {
    this.props.actionToggleLogin(false);
  };
  render() {
    const { open } = this.props;
    return (
      <Light>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          className={styles.root}
          disableBackdropClick={true}
          fullWidth
          maxWidth="xs"
        >
          <Card>
            {/* <CardActionArea> */}
            <CardMedia
              className={styles.media}
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              title="login"
            />
            <CardContent>
              <div className={styles.title}>请选择快捷登录方式</div>
              <div className={styles.items}>
                <a href="https://github.com/login/oauth/authorize/?client_id=5302e0a84143b8b3de00">
                  <IconButton>
                    <GitHubIcon style={{ fontSize: 50 }} />
                  </IconButton>
                  <div>GitHub</div>
                </a>
                <div>
                  <IconButton>
                    <WechatFilled style={{ fontSize: 50 }} />
                  </IconButton>
                  <div>微信</div>
                </div>
                <div>
                  <IconButton>
                    <DingtalkCircleFilled style={{ fontSize: 50 }} />
                  </IconButton>
                  <div>钉钉</div>
                </div>
              </div>
            </CardContent>
            <CardContent>登录失败？</CardContent>
            {/* </CardActionArea> */}
            <IconButton className={styles.close} onClick={this.close}>
              <CloseIcon />
            </IconButton>
          </Card>
        </Dialog>
      </Light>
    );
  }
}

export default Login;
