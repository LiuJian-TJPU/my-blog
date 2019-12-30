import React from 'react';
import './index.less';

const Nav = (props) => {
  const { show, toggleSider } = props;
  const toggle = () => {
    toggleSider(!show)
  }
  return !show &&
    <div className='content-nav'>
      <div className='nav-left' onClick={toggle}>React</div>
    </div>
}

export default Nav;