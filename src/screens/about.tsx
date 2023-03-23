import React from "react";
import { makeStyles } from "@mui/styles";
import { fontSize } from "../contants/fontSize";
import { colors } from "../colors";
import me from "../assets/img-mobile.webp";
import ContainerMain from "../components/containerMain/index";
import { useTranslation } from "react-i18next";
import { textI18n } from "../lang/languages";
import SkillsLanguage from "../views/skills/index";
import { monthExperienceFe, monthExperienceBe } from "../contants/date";
import Ckeditor from "../views/ckeditor";
import TextHeader from "../components/textHeader/index";
const useStyles = makeStyles((theme) => {
  return {
    containerAbout: {
      width: "calc(100vw - 80px)",
    },
    containerContent: {
      ...theme.custom?.flexBox.flexBetweenCenter,
    },
    row: {
      width: "48%",
    },
    containerInfo: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      marginBottom: "36px",
      maxWidth: "500px",
    },
    imageMe: {
      borderRadius: "12px",
      width: "200px",
    },
    infoItem: {
      fontWeight: 700,
      color: "#000000",
      textTransform: "capitalize",
      marginBottom: "22px",
    },
    infoValue: {
      fontWeight: 400,
    },
    textSkills: {
      fontWeight: 700,
      fontSize: fontSize.medium,
      marginBottom: "16px",
      textTransform: "capitalize",
    },
    skillItem: {
      fontWeight: 700,
      color: "#000000",
      textTransform: "capitalize",
      marginBottom: "30px",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        display: "block",
        width: "calc(100% - 30%)",
        height: "8px",
        borderRadius: "2px",
        background: colors.highLight,
        bottom: "-10px",
        left: 0,
        right: 0,
      },
      "&::after": {
        position: "absolute",
        content: '""',
        display: "block",
        width: "100%",
        height: "8px",
        borderRadius: "2px",
        background: colors.highLight,
        bottom: "-10px",
        left: 0,
        right: 0,
        zIndex: "-1",
        opacity: "0.5",
      },
    },
    skillNodejs: {
      "&::before": {
        width: "calc(100% - 50%)",
      },
    },
    textTitleRight: {
      fontSize: fontSize.medium,
      fontWeight: 700,
      marginBottom: "12px",
      textTransform: "capitalize",
    },
    textJob: {
      fontWeight: 700,
      textTransform: "capitalize",
    },
    list: {
      color: colors.textMain,
      lineHeight: "24px",
    },
    experienceTheme: {
      marginBottom: "16px",
    },
  };
});
const About = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.containerAbout}>
      <TextHeader textDefault={"about"} textHighLight={"me"} />
      <ContainerMain>
        <div className={classes.containerContent}>
          <div className={`${classes.row}`}>
            <div className={classes.containerInfo}>
              <div className="">
                <img className={classes.imageMe} src={me} alt="me" />
              </div>
              <div className="">
                <div className={classes.infoItem}>
                  {t(textI18n.titleFullName)}:{" "}
                  <span className={classes.infoValue}>
                    {t(textI18n.fullName)}
                  </span>
                </div>
                <div className={classes.infoItem}>
                  {t(textI18n.titleBirthday)}:{" "}
                  <span className={classes.infoValue}>
                    {t(textI18n.birthday)}
                  </span>
                </div>
                <div className={classes.infoItem}>
                  {t(textI18n.titlePhoneNumber)}:{" "}
                  <span className={classes.infoValue}>
                    {t(textI18n.birthday)}
                  </span>
                </div>
                <div className={classes.infoItem}>
                  {t(textI18n.titleEmail)}:{" "}
                  <span className={classes.infoValue}>{t(textI18n.email)}</span>
                </div>
                <div className={classes.infoItem} style={{ margin: "0" }}>
                  {t(textI18n.titleAddress)}:{" "}
                  <span className={classes.infoValue}>
                    {t(textI18n.address)}
                  </span>
                </div>
              </div>
            </div>
            <SkillsLanguage />
          </div>
          <div className={`${classes.row}`}>
            <div className={classes.textTitleRight}>
              {t(textI18n.experience)}
            </div>
            <div className={classes.experienceTheme}>
              <div className="">
                <div className={classes.textJob}>font-end developer</div>
                <ul className={classes.list}>
                  <li>
                    {monthExperienceFe()} {t(textI18n.experienceJobFe)}
                  </li>
                  <li>{t(textI18n.descExperienceFe1)}</li>
                  <li>{t(textI18n.descExperienceFe2)}</li>
                  <li>{t(textI18n.descExperienceFe3)}</li>
                  <li>{t(textI18n.descExperienceFe4)}</li>
                  <li>{t(textI18n.descExperienceFe5)}</li>
                  <li>{t(textI18n.descExperienceFe6)}</li>
                </ul>
              </div>
            </div>
            <div className={classes.experienceTheme}>
              <div className="">
                <div className={classes.textJob}>back-end developer</div>
                <ul className={classes.list}>
                  <li>
                    {monthExperienceBe()} {t(textI18n.experienceJobBe)}
                  </li>
                  <li>{t(textI18n.descExperienceFe1)}</li>
                </ul>
              </div>
            </div>
            <div className={classes.experienceTheme}>
              <div className="">
                <div className={classes.textJob}>{t(textI18n.careerGoals)}</div>
                <ul className={classes.list}>
                  <li>{t(textI18n.careerGoals13)}</li>
                  <li>{t(textI18n.careerGoals35)}</li>
                  <li>{t(textI18n.careerGoals5)}</li>
                </ul>
              </div>
            </div>
            <div className={classes.experienceTheme}>
              <div className="">
                <div className={classes.textJob}>{t(textI18n.hobbies)}</div>
                <ul className={classes.list}>
                  <li>{t(textI18n.readBook)}</li>
                  <li>{t(textI18n.football)}</li>
                  <li>{t(textI18n.watchMovie)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Ckeditor />
      </ContainerMain>
    </div>
  );
};

export default About;
