import React, { Component } from "react";
import qs from "query-string";
import { connect } from "react-redux";
import { actionAsyncLogin } from "@models/user";

@connect(null, {
  actionAsyncLogin,
})
class Login extends Component {
  componentDidMount() {
    // console.log();
    // this.init();
  }
  init = async () => {
    const { code } = qs.parse(this.props.location.search);
    console.log(code);
    if (!code) {
      this.goHome();
      return;
    }
    const { success } = await this.props.actionAsyncLogin({ code });
    if (success) {
      this.goHome();
    }
  };

  goHome = () => {
    this.props.history.replace("/");
  };

  render() {
    return <div />;
  }
}

export default Login;
