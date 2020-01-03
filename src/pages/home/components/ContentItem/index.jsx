import React from 'react';
import { Icon } from 'antd';
import './index.less';

const HomeContentItem = (porps) => {
  const { title } = porps;
  return (
    <div className='content-item'>
      <div className='item-header'>
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>
        <span>{title}</span>
      </div>
      <div className='item-body'>
        div content
      </div>
    </div>
  )
}

export default HomeContentItem;