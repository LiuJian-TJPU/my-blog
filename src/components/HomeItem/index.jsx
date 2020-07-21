import React from "react";
import PropTypes from "prop-types";
// import { Card } from "antd";
import styles from "./index.less";
import { Link } from "react-router-dom";

import { Card, Typography, CardMedia, IconButton } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Favorite from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Text from "@components/Text/index";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    // mx: { marginLeft: theme.spacing(2), marginRight: theme.spacing(2) },
    details: {
      flex: 1,
    },
    cover: {
      width: 60,
      height: 60,
      borderRadius: 2,
      marginLeft: "1rem",
    },
    title: {
      color: theme.palette.text.primary,
    },
    description: {
      color: theme.palette.text.secondary,
    },
    top: {
      // fontSize: theme.typography.pxToRem(14),
    },
    // details: {
    //   display: 'flex',
    //   flexDirection: 'column',
    // },
    // content: {
    //   flex: '1 0 auto',
    // },
    // cover: {
    //   width: 151,
    // },
    // controls: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   paddingLeft: theme.spacing(1),
    //   paddingBottom: theme.spacing(1),
    // },
    // playIcon: {
    //   height: 38,
    //   width: 38,
    // },
  };
});
const Item = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // <Card hoverable className={styles.card}>
    //   <div className={styles.top}>作者·时间·分类</div>
    //   <div className={styles.title}>
    //     <Link to="/a" target="_blank">
    //       40张图入门Linux——（前端够用，运维入门）
    //     </Link>
    //   </div>
    //   <div className={styles.description}>这是一段描述。。。</div>
    //   <div className={styles.bottom}>点赞·评论·收藏</div>
    // </Card>

    <Card className={classes.root}>
      <div className={classes.details}>
        <p>时间·分类</p>
        {/* <div className={classes.top}>时间·分类</div> */}
        <div>
          <Typography variant="subtitle1">
            <Link to="/a" target="_blank" className={styles.title}>
              40张图入门Linux——（前端够用，运维入门）
            </Link>
          </Typography>
        </div>
        {/* <div > */}
        <Text className={styles.description}>
          这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
        </Text>
        {/* </div> */}
        <div className={styles.bottom}>
          <IconButton>
            <ThumbUpAltIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <Favorite />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      />
    </Card>
  );
};
Item.defaultProps = {};

Item.propTypes = {};

export default Item;
