import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import styles from "./index.less";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Card hoverable className={styles.card}>
      <div className={styles.top}>作者·时间·分类</div>
      <div className={styles.title}>
        <Link to="/a" target="_blank">
          40张图入门Linux——（前端够用，运维入门）
        </Link>
      </div>
      <div className={styles.description}>这是一段描述。。。</div>
      <div className={styles.bottom}>点赞·评论·收藏</div>
    </Card>
  );
};
Item.defaultProps = {};

Item.propTypes = {};

export default Item;
