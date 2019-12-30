import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

import './index.less'

class SiderBar extends Component {

  onCollapse = () => {
    this.props.foldSider(!this.props.collapsed)
  };

  render() {
    const { siderShow, collapsed } = this.props;
    return (
      <Sider
        className='home-sider'
        style={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          display: siderShow ? 'block': 'none'
        }}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <div className='logo-img' style={{ display: collapsed ? 'block' : 'none' }} />
          <div className='logo-text' style={{ display: collapsed ? 'none' : 'block' }}>我的博客</div>
        </div>
        <Menu className='sider-memu' mode="inline" theme="light" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
        <div
          className='trigger'
          style={{width: collapsed ? 80 : 200}}
          onClick={this.onCollapse}
        >
          关闭
        </div>
      </Sider>
    )
  }
}

export default SiderBar