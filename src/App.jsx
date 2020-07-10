import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

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
  useEffect(() => {
    const route = routers.find(({ path }) => path === location.pathname);
    if (route?.title) {
      document.title = route.title;
    }
    console.log(location.pathname);
  }, [location]);
  return (
    // <Container>
    <Scrollbars autoHide style={{ height: window.innerHeight }}>
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
