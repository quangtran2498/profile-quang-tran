import { icons } from "../icons";
import projectDemoImage from '../assets/project-demo.webp'
export const navData = [
  {
    id: 1,
    icon: icons.home,
    title: "home",
  },
  {
    id: 2,
    icon: icons.about,
    title: "about",
  },
  {
    id: 3,
    icon: icons.project,
    title: "projects",
  },
  {
    id: 4,
    icon: icons.skill,
    title: "skills",
  },
  {
    id: 5,
    icon: icons.blog,
    title: "blog",
  },
  {
    id: 6,
    icon: icons.language2,
    title: "language",
  },
];
export const dataSkillsLanguage = [
  {
    id: 1,
    title: "html",
    level: "middle",
    skillDetail:
      "<ul style=margin:0><li>Elemnt,semantic</li><li>Style,attributes,layout,dom</li></ul>",
    order: 1,
    ratio: "70%",
  },
  {
    id: 2,
    title: "css",
    level: "middle",
    skillDetail:
      "<ul style=margin:0><li>Responsive,flexbox,svg,grid,pseudo-classes,combinators,animation</li><li>Preprocessors : less,sass</li><li>Frameworks:tailwin,material</li></ul>",
    order: 2,
    ratio: "70%",
  },
  {
    id: 3,
    title: "js",
    level: "middle",
    skillDetail:
      "<ul style=margin:0><li>Variable,function,data types,scope,loop,conditional statements,operators,dom,parameters,argument,contructor,event,dom</li><li>Es6: arrow functions,spread,rest,object literal,super</li><li>Advanced : callbacks,promis,async/await</li></ul>",
    order: 3,
    ratio: "70%",
  },
  {
    id: 4,
    title: "reactJs",
    level: "middle",
    skillDetail:
      "<ul style=margin:0><li>Life cycle,jsx,state,props,hook,render,component,refs</li><li>Other : router,redux,form</li></ul>",
    order: 4,
    ratio: "70%",
  },
  {
    id: 5,
    title: "nodeJs",
    level: "fresher",
    skillDetail:
      "<ul style=margin:0><li>Browser,http,running scripts,modules,npm,event,api</li><li>Framework : Expressjs</li><li>Database: MongoDb</li></ul>",
    order: 5,
    ratio: "30%",
  },
  {
    id: 6,
    title: "typescript",
    level: "junior",
    skillDetail:
      "<ul style=margin:0><li>Types,interface,class,generic</li></ul> ",
    order: 6,
    ratio: "50%",
  },
];
export const dataProjectFe = [
  { id: 1, nameProject: "ielts",desc:"app tieng anh",banner:projectDemoImage,tech:"react",time:"01/01/2003",position:"fe developer",content:"fsdfsdfsd",numbers:"10",typeProject:"product" },
  { id: 2, nameProject: "major medical",desc:"ban bao hiem",banner:projectDemoImage,tech:"react",time:"01/01/2003",position:"fe developer",content:"fsdfsdf",numbers:"10",typeProject:"product" },
  { id: 3, nameProject: "payment gateway",desc:"cong thanh toan",banner:projectDemoImage,tech:"react",time:"01/01/2003",position:"fe developer",content:"dsfdsfsd",numbers:"10",typeProject:"product" },
  { id: 4, nameProject: "mb ageas life",desc:"trang chu mb ageas life",banner:projectDemoImage,tech:"react",time:"01/01/2003",position:"fe developer",content:"dfsfdsfsd",numbers:"10",typeProject:"maintain" },
  { id: 5, nameProject: "profile",desc:"profile ca nhan",banner:projectDemoImage,tech:"react",time:"01/01/2003",position:"fe developer",content:"sdfsdf",numbers:"10",typeProject:"product" },
  { id: 6, nameProject: "shop shoe",desc:"ban giay",banner:projectDemoImage,tech:"react",time:"01/01/2003",position:"fe developer",content:"fsdfsdf",numbers:"10",typeProject:"product" },
];
