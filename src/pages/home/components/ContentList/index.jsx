import React from 'react';
// import ContentItem from '../ContentItem';
import './index.less';

// const HomeContentList = () => (
//   <div className='content-list'>
//     <ContentItem/>
//     <ContentItem/>
//     <ContentItem/>
//     <ContentItem/>
//     <ContentItem/>
//   </div>
// )

import { Row, Col } from 'antd';

const HomeContentList = () => (
  <div className='content-list'>
    <Row gutter={16}>
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(item => ((
          <Col className="content-item"  xs={24} sm={12} md={8} lg={8} xl={6}>
            <div className="card">col-{item}</div>
          </Col>

        )))
      }
      {/* <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col> */}
    </Row>
  </div>
)

export default HomeContentList;