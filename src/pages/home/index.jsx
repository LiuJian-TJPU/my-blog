import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sider from './components/Sider';
import Header from './components/Header';
import ContentList from './components/ContentList';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { actionHomeToggleSider } from 'actions/home';

import './index.less'

const mapState = (state) => ({
  collapsed: state.home.collapsed
})

const mapDispatch = {
  actionHomeToggleSider
}

@connect(mapState, mapDispatch)

class Home extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {

    const {
      collapsed,

      actionHomeToggleSider
    } = this.props;

    return (
      <Layout className='home-container'>
        <Sider
          collapsed={collapsed}
          toggleSider={actionHomeToggleSider}
        />
        <Layout className='home-content-right' style={{ marginLeft: collapsed ? 80 : 200 }}>
          <Header/>
          <ContentList/>
        </Layout>
      </Layout>
    );
  }
}

export default Home;