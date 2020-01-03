import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';

import './index.scss';

const siderConfig = [
  {
    title: 'html',
    icon: 'html5'
  },
  {
    title: 'css',
    icon: 'skin'
  },
  {
    title: 'js',
    icon: 'dollar'
  },
  {
    title: 'react',
    icon: 'diff'
  },
  {
    title: 'vue',
    icon: 'usb'
  },
  {
    title: 'webpack',
    icon: 'gold'
  },
  {
    title: 'git',
    icon: 'tags'
  },
]

const SiderBar = ( props ) =>  {
  const { siderShow, collapsed } = props;

  const onCollapse = () => {
    props.foldSider(!collapsed)
  };
  const mose = (e) => {
    console.log(e);
    console.log(e.target);
  }
  const siderStyle = useMemo(() => {
    return {
      display: siderShow ? '': 'none',
      width: collapsed ? '5vw': '10vw'}
    },[ siderShow, collapsed])

  return (
    // <Sider
    //   className='home-sider'
    //   style={{
    //     height: '100vh',
    //     position: 'fixed',
    //     left: 0,
    //     display: siderShow ? 'block': 'none'
    //   }}
    //   theme="light"
    //   trigger={null}
    //   collapsible
    //   collapsed={collapsed}
    // >
    //   <div className="logo">
    //     <div className='logo-img' style={{ display: collapsed ? 'block' : 'none' }} />
    //     <div className='logo-text' style={{ display: collapsed ? 'none' : 'block' }}>我的博客</div>
    //   </div>
    //   <Menu className='sider-memu' mode="inline" theme="light" defaultSelectedKeys={['1']}>
    //     {
    //       siderConfig.map((item) => (
    //         <Menu.Item key={item.title}>
    //           <span className="nav-text">{item.title}</span>
    //         </Menu.Item>
    //       ))
    //     }
    //   </Menu>
    //   <div
    //     className='trigger'
    //     style={{width: collapsed ? 80 : 200}}
    //     onClick={this.onCollapse}
    //   >
    //     关闭
    //   </div>
    // </Sider>
    <>
      <div className='nav-list' style={siderStyle} onMouseEnter={mose}>
        <div className='logo'></div>
       <Menu
        className='sider-memu'
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        style={siderStyle}
      >
         {
           siderConfig.map((item) => (
             <Menu.Item key={item.title} title={item.title}>
               <Icon type={item.icon} theme="twoTone" />
               <span className="nav-text">{item.title}</span>
             </Menu.Item>
           ))
         }
       </Menu>
      </div>
      <div className='triggle' onClick={onCollapse} style={siderStyle}>
        <Icon type= {collapsed ?"double-right":"double-left"} />
      </div>
    </>
  )
}
export default SiderBar