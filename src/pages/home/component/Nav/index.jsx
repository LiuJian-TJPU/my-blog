import React, { useMemo, useEffect, useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Dialog,
  Slide,
  Button,
  Avatar,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Icon from "@assets/index";

console.log(Icon);

import { isWeb, isAndroid, isIOS } from "@utils/env";

import styles from "./index.less";

const Transition = forwardRef((props, ref) => (
  <Slide direction="right" ref={ref} {...props} />
));

const useStyles = makeStyles((theme) => ({
  spacing: 5,
  bar: {
    position: "sticky",
    top: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Nav = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset >= window.innerHeight - 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${show ? styles.show : ""}`}>
        {/* <div className={styles.title}>首页</div> */}
        <div style={{ flex: 1 }} />
        {/* <div className={styles.menu}> */}
        <Button size="large" startIcon={<MenuIcon />}>
          导航
        </Button>
        <Button size="large" startIcon={<NotificationsIcon />}>
          通知
        </Button>
        <Button
          size="large"
          startIcon={
            <Avatar
              style={{ width: 30, height: 30 }}
              src={Icon["Avatar/default7"]}
            />
          }
        >
          刘健
        </Button>

        {/* </div> */}
      </nav>
      <Dialog
        open={open}
        fullScreen
        keepMounted
        TransitionComponent={Transition}
      >
        <IconButton onClick={() => setOpen(false)}>x</IconButton>
      </Dialog>
    </>
  );
};

export default Nav;
