import React from "react";

import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import icon from "@assets/index";

const { add_blog, calc, light, setting } = icon;

const actions = [
  { icon: add_blog, text: "写博客", path: "/draft/new" },
  { icon: calc, text: "看数据", path: "/draft/new" },
  { icon: setting, text: "写博客", path: "/draft/new" },
  { icon: light, text: "写博客", path: "/draft/new" },
];

const useStyles = makeStyles((theme) => {
  return {
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
    },
  };
});
const Action = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        {actions.map(({ icon, text, path }, i) => (
          <Button key={i} style={{ flex: 1 }}>
            <Link to={path} key={i}>
              <div className={classes.item}>
                <img className={classes.img} src={icon} alt="" />
                <div>{text}</div>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default Action;
