import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

import './index.less';

const siderConfig = [
  {
    title: 'html',
    icon: ''
  },
  {
    title: 'css',
    icon: ''
  },
  {
    title: 'js',
    icon: ''
  },
  {
    title: 'react',
    icon: ''
  },
  {
    title: 'vue',
    icon: ''
  },
  {
    title: 'webpack',
    icon: ''
  },
  {
    title: 'git',
    icon: ''
  },
]

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
          {
            siderConfig.map((item) => (
              <Menu.Item key={item.title}>
                <span className="nav-text">{item.title}</span>
              </Menu.Item>
            ))
          }
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