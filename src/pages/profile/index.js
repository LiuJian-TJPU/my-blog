import React, { Component } from "react";
import { connect } from "react-redux";
import { actionAsyncLogout } from "@models/user";

import { TextField, Avatar, Button } from "@material-ui/core";
import styles from "./index.less";

@connect(
  ({ user }) => ({
    userInfo: user.userInfo,
  }),
  {
    actionAsyncLogout,
  }
)
class Profile extends Component {
  logout = () => {
    this.props.actionAsyncLogout();
  };

  render() {
    const {
      userInfo: { name, email, html_url, avatar_url },
    } = this.props;
    return (
      <div className={styles.profile}>
        <div>
          <a href={html_url} target="_blank">
            <Avatar className={styles.avatar} src={`${avatar_url}&s=460`} />
          </a>
        </div>
        <div className={styles.info}>
          <Button startIcon="姓名" fullWidth>
            {name}
          </Button>
          <Button startIcon="邮箱" fullWidth>
            {email}
          </Button>
          <Button startIcon="主页" fullWidth>
            {html_url}
          </Button>
          <Button fullWidth onClick={this.logout}>
            退出登录
          </Button>
        </div>
      </div>
    );
  }
}

export default Profile;
