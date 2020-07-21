import React, { useEffect, useRef } from "react";
import Item from "@components/HomeItem";
import Login from "@components/Login";
import User from "@components/User";
import styles from "./index.less";
import { Hidden, Card, CardActionArea, CardMedia } from "@material-ui/core";

import Action from "../Action";
import Recommend from "../Recommend";

const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        {/* 123 */}
        {/* <div > */}
        {/* <Carousel>
            <div style={{ width: 300 }}>123</div>
            <div style={{ width: 300 }}>456</div>
          </Carousel> */}
        {/* <img
          className={styles.carousel}
          src="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
        /> */}
        {/* </div> */}
        <Card>
          <CardActionArea>
            <CardMedia
              // component="img"
              alt=""
              height="300"
              // image="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            >
              如果人生可以出来
            </CardMedia>
          </CardActionArea>
        </Card>
        <div className={styles.list}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 98, 97, 96, 95].map((item) => (
            <Item key={item} />
          ))}
        </div>
      </div>
      <Hidden smDown>
        <div className={styles.right}>
          <Action />
          <Recommend />
          {/* <Login />
        <User /> */}
        </div>
      </Hidden>
    </div>
  );
};

export default Home;
