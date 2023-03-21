import React from "react";
import ButtonCommon from "../../components/Button/index";
import { makeStyles } from "@mui/styles";
import { colors } from "../../colors";
import ArrowForward from '../../assets/svg/arrowForward';
const useStyles = makeStyles((theme) => {
  return {
    textHello: {
      fontSize: "50px",
      fontWeight: 700,
      textTransform: "uppercase",
      paddingLeft: "70px",
      position: "relative",
      marginBottom: "10px",
      "&::before": {
        display: "block",
        content: '""',
        position: "absolute",
        width: "40px",
        height: "4px",
        top: 29,
        left: 0,
        background: colors.highLight,
        borderRadius: "10px",
        // color:colors.highLight
      },
    },
    textDesc: {
      color: colors.textMain,
      lineHeight: "35px",
      marginBottom:"28px"
    },
    btn: {
     
    },
    containerContent:{
      maxWidth:"550px",
      padding:"0 50px"
    }
  };
});
const ContentHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerContent}>
      <div className={classes.textHello}>
        <div className={`text-high-light`}>I'm quang tran</div>
        <div className="text-main">web designer</div>
      </div>
      <div className={classes.textDesc}>
        I'm a Tunisian based web designer & front‑end developer focused on
        crafting clean & user‑friendly experiences, I am passionate about
        building excellent software that improves the lives of those around me.
      </div>
      <ButtonCommon className={classes.btn} icon={<ArrowForward/>} positionIconEnd={true}> more about me</ButtonCommon>
    </div>
  );
};

export default ContentHome;
