import React, { useEffect, useRef, useCallback } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Scrollbars } from "react-custom-scrollbars";
import "./App.less";

import routers from "./pages";

const renderThumb = ({ style, ...props }) => {
  //设置滚动条的样式
  const thumbStyle = {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "6px",
    zIndex: 10,
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const scrollBarRef = useRef();
  useEffect(() => {
    // scrollBarRef.current.scrollTop(window.innerHeight);
  }, [location]);

  const handleScroll = useCallback((position) => {
    dispatch({
      type: "common/save",
      payload: {
        position,
      },
    });
  });

  return (
    // <Container>
    <Scrollbars
      autoHide
      style={{ height: window.innerHeight }}
      ref={scrollBarRef}
      onScrollFrame={handleScroll}
    >
      <Switch>
        <Route exact path="/">
          <Redirect to="/frontend/all" />
        </Route>
        {routers.map(({ path, component: Com }) => (
          <Route key={path} exact path={path}>
            <Com />
          </Route>
        ))}
        <Route exact path="/404">
          404
        </Route>
        <Route>
          <Redirect to="404" />
        </Route>
      </Switch>
    </Scrollbars>
    // </Container>
  );
};

export default App;
