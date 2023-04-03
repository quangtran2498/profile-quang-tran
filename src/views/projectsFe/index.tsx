import React from "react";
import { dataProjectFe } from "../../mocks/index";
import { makeStyles } from "@mui/styles";
import TextTitle from "../../components/textTitle/index";
import TextDesc from "../../components/textDesc";
import DetailProject from "../detailProject/index";
const useStyles = makeStyles((theme) => {
  return {
    contianerProjects: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridGap: "20px",
    },
    projectItem: {
      cursor: "pointer",
    },
    contentProject: {
      padding: "10px 20px",
    },
    textDesc: {
      marginBottom: "4px",
      textTransform: "capitalize",
    },
    textTitle: {
      marginBottom: "4px",
    },
  };
});
const ProjectsFe = () => {  
  const [open, setOpen] = React.useState<boolean>(false)
  const [dataProject, setDataProject] = React.useState<any>()

  const classes = useStyles();
  const hideModal = () => {
    setOpen(false)
  }
  const onShowDetailProject = (data:any) => {
    setOpen(true)
    setDataProject(data)
  }
  return (
    <div className="">
      <div className={classes.contianerProjects}>
        {dataProjectFe.map((project) => {
          return (
            <div key={project.id} className={classes.projectItem} onClick={() => onShowDetailProject(project)}>
              <div className="">
                <img style={{ width: "100%" }} src={project.banner} alt="" />
              </div>
              <div className={classes.contentProject}>
                <TextTitle
                  typeText={"title-sub"}
                  fontWeight={500}
                  styleAdd={{ textTransform: "capitalize" }}
                  className={classes.textTitle}
                >
                  {project.nameProject}
                </TextTitle>
                <TextDesc typeText={"desc"} className={classes.textDesc}>{project.desc}</TextDesc>
                <div className="">xem them</div>
              </div>
            </div>
          );
        })}
      </div>
      <DetailProject open={open} hideModal={hideModal} dataProject={dataProject}/>
    </div>
  );
};

export default ProjectsFe;
