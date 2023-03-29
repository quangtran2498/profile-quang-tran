import React, { useEffect } from "react";
import ButtonCommon from "../../components/Button/index";
import { makeStyles } from "@mui/styles";
import { colors } from "../../colors";
import ArrowForward from "../../assets/svg/arrowForward";
import { useTranslation } from "react-i18next";
import { textI18n } from "../../lang/languages";
interface PropsI {
  widthImage?:number
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
      },
    },
    textDesc: {
      color: colors.textMain,
      lineHeight: "35px",
      marginBottom: "28px",
    },
    btn: {},
    containerContent: {
      display: "flex",
      justifyContent: "center",
    },
    content: {
      maxWidth: "550px",
      padding: "0 50px",

    },
  };
});
const ContentHome = ({ widthImage }: PropsI) => {
  const classes = useStyles();
  console.log(widthImage, "widthImage");
  const { t } = useTranslation();
  return (
    <div className={classes.containerContent} style={{width:`calc(100vw - ${widthImage}px)`}}>
      <div className={classes.content}>
        <div className={classes.textHello}>
          <div className={`text-high-light`}>{t(textI18n.name)}</div>
          <div className="text-main">{t(textI18n.job)}</div>
        </div>
        <div className={classes.textDesc}>{t(textI18n.desc)}</div>
        <ButtonCommon
          className={classes.btn}
          icon={<ArrowForward />}
          positionIconEnd={true}
        >
          more about me
        </ButtonCommon>
      </div>
    </div>
  );
};

export default ContentHome;
