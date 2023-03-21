import App from "../App";
import About from '../screens/about';
import Services from "../screens/services";
import Blog from '../screens/blog';
import Projects from '../screens/projects';
import { pathRouter } from "./path";
import Skills from '../screens/skills';
import Home from '../screens/home';
export const routesPage = [
  {
    component: Home,
    path:pathRouter.home,
  },
  {
    component: About,
    path: pathRouter.aboutMe,
  },
  {
    component: Services,
    path: pathRouter.services,
  },
  {
    component: Blog,
    path: pathRouter.blog,
  },
  {
    component: Projects,
    path:pathRouter.project,
  },
  {
    component: Skills,
    path:pathRouter.skills,
  },
];
