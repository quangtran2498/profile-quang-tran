import React from "react";
import { makeStyles } from "@mui/styles";
import TextHeader from "../components/textHeader/index";
import { colors } from "../colors";
import ProjectsFe from '../views/projectsFe/index';
import ProjectsBe from '../views/projectsFe/index';
import ContainerMain from '../components/containerMain/index';
const useStyles = makeStyles((theme) => {
  return {
    containerPage: {
      width: "100%",
    },
    typeProjects:{
      ...theme.custom?.flexBox.flexCenterCenter
    },
    typeProjectsItem:{
      fontWeight:500,
      padding:"10px",
      cursor:"pointer"
    }
  };
});
const Projects = () => {
  const [active, setActive] = React.useState<string>("fe")
  const classes = useStyles();
  return (
    <div className={classes.containerPage}>
      <TextHeader textDefault={"my"} textHighLight={"projects"} />
      <div className={classes.typeProjects}>
        <div className={classes.typeProjectsItem} onClick={() => setActive("fe")} style={active === "fe" ? {color:colors.highLight} : {color:colors.textMain}}>Font end</div>
        <div className={classes.typeProjectsItem} onClick={() => setActive("be")} style={active === "be" ? {color:colors.highLight} : {color:colors.textMain}}>Back end</div>
      </div>
      <div className="">
        <ContainerMain>
            {active === "fe" ? <ProjectsFe/> : <ProjectsBe/>}
        </ContainerMain>
      </div>
    </div>
  );
};

export default Projects;
