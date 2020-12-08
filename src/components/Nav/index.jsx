import React, { forwardRef, PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { throttle } from "lodash";
import { IconButton, Dialog, Slide, Button, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { actionToggleLogin } from "@models/user";

import styles from "./index.less";

const Transition = forwardRef((props, ref) => (
  <Slide direction="right" ref={ref} {...props} />
));

@withRouter
@connect(
  ({ user }) => ({
    name: user.userInfo.name,
    login: user.userInfo.login,
    avatar_url: user.userInfo.avatar_url,
  }),
  {
    actionToggleLogin,
  }
)
class Nav extends PureComponent {
  state = {
    open: false,
    show: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle(
    () => {
      if (window.pageYOffset >= 20) {
        this.setState({
          show: true,
        });
      } else {
        this.setState({
          show: false,
        });
      }
    },
    200,
    { leading: true }
  );
  handleAvatarClick = () => {
    const { name, login } = this.props;
    if (name) {
      this.props.history.push(`/${login}`);
    } else {
      this.props.actionToggleLogin(true);
    }
  };

  handleToggleDialog = () => {
    this.setState(({ open }) => ({
      open: !open,
    }));
  };

  render() {
    const { show, open } = this.state;
    const { name, avatar_url } = this.props;
    return (
      <div className={`${styles.nav} ${show ? styles.show : ""}`}>
        <nav className={styles.content}>
          <div style={{ flex: 1 }} />
          <Button
            size="large"
            startIcon={<MenuIcon />}
            onClick={this.handleToggleDialog}
          >
            导航
          </Button>
          <Button size="large" startIcon={<NotificationsIcon />}>
            通知
          </Button>
          <Button
            size="large"
            startIcon={
              <Avatar
                style={{ width: 30, height: 30 }}
                src={`${avatar_url}&s=60`}
              />
            }
            onClick={this.handleAvatarClick}
          >
            {name || "登录"}
          </Button>
        </nav>
        <Dialog
          open={open}
          fullScreen
          keepMounted
          TransitionComponent={Transition}
        >
          <Button onClick={this.handleToggleDialog}>x</Button>
        </Dialog>
      </div>
    );
  }
}

export default Nav;
