import React from "react";

import {
  Card,
  Typography,
  CardMedia,
  IconButton,
  ButtonBase,
  Button,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import Favorite from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import Setting from "@components/light.svg";

// import {} from "@assets/add";

import icon from "@assets/index";

const { add_blog, calc, date, light, setting } = icon;

const actions = [
  { icon: add_blog, text: "写博客" },
  { icon: calc, text: "看数据" },
  { icon: setting, text: "写博客" },
  { icon: light, text: "写博客" },
];

const useStyles = makeStyles((theme) => {
  return {
    // root: {
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "space-between",
    //   padding: 20,
    //   marginTop: theme.spacing(2),
    //   marginBottom: theme.spacing(2),
    // },
    details: {
      display: "flex",
    },
    item: {
      // flex: 1,
      padding: "10px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    img: {
      width: 30,
      height: 30,
      marginBottom: 10,
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
      // fontSize: 14,
    },
    top: {
      // fontSize: theme.typography.pxToRem(14),
    },
  };
});
const Action = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        {actions.map(({ icon, text }, i) => (
          <Button key={i} style={{ flex: 1 }}>
            <div className={classes.item}>
              <img className={classes.img} src={icon} alt="" />
              <div>{text}</div>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default Action;
