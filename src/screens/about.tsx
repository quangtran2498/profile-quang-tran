import React from "react";
import { makeStyles } from "@mui/styles";
import { fontSize } from "../contants/fontSize";
import { colors } from "../colors";
import me from "../assets/img-mobile.webp";
import ContainerMain from "../components/containerMain/index";
const useStyles = makeStyles((theme) => {
  return {
    containerAbout:{
      width:"calc(100vw - 80px)"
    },
    textHeader: {
      fontSize: fontSize.large,
      fontWeight: 700,
      textTransform: "uppercase",
      textAlign: "center",
      paddingTop: "50px",
      color: colors.textMain,
      marginBottom:'80px'
    },
    containerContent: {
      ...theme.custom?.flexBox.flexBetweenCenter,
    },
    row: {
      width: "49%",
    },
    containerInfo:{
      ...theme.custom?.flexBox.flexBetweenCenter,
      marginBottom:"36px"

    },
    imageMe:{
      borderRadius:"12px",
      width:"200px",
      
    },
    infoItem:{
      fontWeight:700,
      color:"#000000",
      textTransform:"capitalize",
      marginBottom:"24px"
    },
    infoValue:{
      fontWeight:400,

    },
    textSkills:{
      fontWeight:700,
      fontSize:fontSize.medium,
      marginBottom:"16px"
    },
    skillItem:{
      fontWeight:700,
      color:"#000000",
      textTransform:"capitalize",
      marginBottom:"30px",
      position:"relative",
      "&::before":{
        position:"absolute",
        content:'""',
        display:"block",
        width:"calc(100% - 30%)",
        height:"8px",
        borderRadius:"2px",
        background:colors.highLight,
        bottom:"-10px",
        left:0,
        right:0
      },
      "&::after":{
        position:"absolute",
        content:'""',
        display:"block",
        width:"100%",
        height:"8px",
        borderRadius:"2px",
        background:colors.highLight,
        bottom:"-10px",
        left:0,
        right:0,
        zIndex:"-1",
        opacity:"0.5"
      }
    },
    skillNodejs:{
      "&::before":{
        width:"calc(100% - 50%)",
      }
    },
    textTitleRight:{
      fontSize:fontSize.medium,
      fontWeight:700,
      
    }
  };
});
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerAbout}>
      <div className={classes.textHeader}>
        about <span className="text-high-light">me</span>
      </div>
      <ContainerMain>
        <div className={classes.containerContent}>
          <div className={`${classes.row}`}>
            <div className={classes.containerInfo}>
              <div className="">
                <img className={classes.imageMe} src={me} alt="me" />
              </div>
              <div className="">
                <div className={classes.infoItem}>fullname: <span className={classes.infoValue}>quang tran</span></div>
                <div className={classes.infoItem}>birthday: <span className={classes.infoValue}>02/04/1998</span></div>
                <div className={classes.infoItem}>phone number: <span className={classes.infoValue}>0334918422</span></div>
                <div className={classes.infoItem}>email: <span className={classes.infoValue}>chikhoai001@gmail.com</span></div>
              </div>
            </div>
            <div className="">
              <div className={classes.textSkills}>Skills</div>
              <div className={classes.skillItem}>html: <span className={classes.infoValue}>middle</span></div>
              <div className={classes.skillItem}>css: <span className={classes.infoValue}>middle</span></div>
              <div className={classes.skillItem}>js: <span className={classes.infoValue}>middle</span></div>
              <div className={classes.skillItem}>react: <span className={classes.infoValue}>middle</span></div>
              <div className={`${classes.skillItem} ${classes.skillNodejs}`}>nodejs: <span className={classes.infoValue}>fresher</span></div>
            </div>
          </div>
          <div className={`${classes.row}`}>
            <div className={classes.textTitleRight}>EXPERIENCE</div>
          </div>
        </div>
      </ContainerMain>
    </div>
  );
};

export default About;
