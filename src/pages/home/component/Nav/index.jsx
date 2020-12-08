import React, { useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Slide, Button, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Icon from "@assets/index";

import styles from "./index.less";

const Transition = forwardRef((props, ref) => (
  <Slide direction="right" ref={ref} {...props} />
));

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div style={{ flex: 1 }} />
        <Button
          size="large"
          startIcon={<MenuIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
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
