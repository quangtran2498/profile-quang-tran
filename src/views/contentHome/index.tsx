import React, { useEffect } from "react";
import ButtonCommon from "../../components/Button/index";
import { makeStyles } from "@mui/styles";
import { colors } from "../../colors";
import ArrowForward from "../../assets/svg/arrowForward";
import { useTranslation } from "react-i18next";
import { textI18n } from "../../lang/languages";
interface PropsI {
  widthImage?: number;
}
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
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "29px",
        padding: "0",
        textAlign: "center",
      },
    },
    textDesc: {
      color: colors.textMain,
      lineHeight: "35px",
      marginBottom: "28px",
      textAlign: "center",
    },
    btn: {
    },
    containerBtn:{
      width:"100%",
      [theme.breakpoints.down("md")]: {
        ...theme.custom?.flexBox.flexJusCenter
      },

    },
    containerContent: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        width: "100% !important",
      },
    },
    content: {
      maxWidth: "550px",
      padding: "0 50px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        maxWidth: "100%",
        padding: "0 16px",
      },
    },
  };
});
const ContentHome = ({ widthImage }: PropsI) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div
      className={classes.containerContent}
      style={{ width: `calc(100vw - ${widthImage}px)` }}
    >
      <div className={classes.content}>
        <div className={classes.textHello}>
          <div className={`text-high-light`}>{t(textI18n.name)}</div>
          <div className="text-main">{t(textI18n.job)}</div>
        </div>
        <div className={classes.textDesc}>{t(textI18n.desc)}</div>
        <div className={classes.containerBtn}>
          <ButtonCommon
            className={classes.btn}
            icon={<ArrowForward />}
            positionIconEnd={true}
          >
            more about me
          </ButtonCommon>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
