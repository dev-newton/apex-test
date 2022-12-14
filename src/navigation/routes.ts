import Auth from "pages/Auth/Auth";
import Home from "pages/Home/Home";
import RepoDetails from "pages/RepoDetails/RepoDetails";

export default [
  {
    title: "app",
    path: "/app",
    component: Home,
  },
  {
    title: "app",
    path: "/app/:repo/:name",
    component: RepoDetails,
  },
];
