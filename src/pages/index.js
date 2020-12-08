import Home from "./home";
import Login from "./login";
import Profile from "./profile";
import Draft from "./draft";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/:login",
    component: Profile,
  },
  {
    path: "/draft/:type",
    component: Draft,
  },
];
