import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Scrollbars } from "react-custom-scrollbars";

import { throttle } from "lodash";
import { isWeb } from "@utils/env";

import styles from "./index.less";

const renderThumbVertical = (prop) => {
  return <div {...prop} className={styles.track} />;
};

const Scroll = ({ children }) => {
  const { scrollTo } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  const scrollBarRef = useRef();

  useEffect(() => {
    if (scrollBarRef.current) {
      scrollBarRef.current.scrollTop(scrollTo);
    } else {
      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  }, [scrollTo]);

  const handleScroll = useCallback((position) => {
    dispatch({
      type: "common/save",
      payload: {
        position,
      },
    });
  });

  return (
    <>
      {/* {isWeb ? (
        <Scrollbars
          autoHeight
          autoHide
          autoHeightMin={100}
          autoHeightMax={window.innerHeight}
          ref={scrollBarRef}
          onScrollFrame={handleScroll}
          renderThumbVertical={renderThumbVertical}
        >
          {children}
        </Scrollbars>
      ) : ( */}
      {children}
      {/* )} */}
    </>
  );
};

export default Scroll;
