import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import routers from "./pages";

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
    // </Container>
  );
};

export default App;
