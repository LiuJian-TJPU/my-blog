import React, { Component } from "react";
import { connect } from "react-redux";

import Sider from "./components/Sider";
import Nav from "./components/Nav";
import Header from "./components/Header";
import ContentList from "./components/ContentList";

import { actionHomeToggleSider, actionHomeFoldSider } from "actions/home";

import { debounce } from "utils/common";

import "./index.less";

const navStyle = {
  width: '15vw'
}

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
      <div className="home-container">
        <nav className='home-nav' style={{display: siderShow ? 'block': 'none', width: collapsed ? '5vw': '10vw'}}>
          <Sider siderShow={siderShow} collapsed={collapsed} foldSider={actionHomeFoldSider} />
        </nav>
        <section className="home-content">
          <Header />
          <ContentList />
          {/* <ContentList />
          <ContentList /> */}
        </section>
      </div>
    );
  }
}

export default Home;
