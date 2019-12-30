import React, { Component } from "react";
import { connect } from "react-redux";

import Sider from "./components/Sider";
import Nav from "./components/Nav";
import Header from "./components/Header";
import ContentList from "./components/ContentList";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import { actionHomeToggleSider, actionHomeFoldSider } from "actions/home";

import { debounce } from "utils/common";

import "./index.less";

const mapState = state => ({
  collapsed: state.home.collapsed,
  siderShow: state.home.siderShow
});

const mapDispatch = {
  actionHomeToggleSider,
  actionHomeFoldSider
};

@connect(mapState, mapDispatch)
class Home extends Component {

  state = {};
  getClientWidth(){
    return document.body.clientWidth
  }

  componentDidMount() {
    const isLg = this.getClientWidth() > 768;
    this.props.actionHomeToggleSider(isLg)
    this.props.actionHomeFoldSider(!isLg)
    window.onresize = debounce(() => {
      const isLg = this.getClientWidth() > 768;
      this.props.actionHomeToggleSider(isLg)
      this.props.actionHomeFoldSider(!isLg)
    })
  }

  render() {
    console.log(this.state);
    const {
      siderShow,
      collapsed,

      actionHomeFoldSider,
      actionHomeToggleSider
    } = this.props;

    return (
      <Layout className="home-container">
        <Sider siderShow={siderShow} collapsed={collapsed} foldSider={actionHomeFoldSider} />
        <section className="home-content-right">
          <Nav show={siderShow} toggleSider={actionHomeToggleSider} />
          <Layout style={{ marginLeft: siderShow ? collapsed ? 80 : 200 : 0 }}
          >
            <Header />
            <ContentList />
          </Layout>
        </section>
      </Layout>
    );
  }
}

export default Home;
