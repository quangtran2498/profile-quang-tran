import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { colors } from "../../colors";
import { fontSize } from "../../contants/fontSize";
import { textI18n } from "../../lang/languages";
import { useTranslation } from "react-i18next";
import { dataSkillsLanguage } from "../../mocks/index";
import SkillItem from "./skillItem";
const useStyles = makeStyles((theme) => {
  return {
    textSkills: {
      fontWeight: 700,
      fontSize: fontSize.medium,
      marginBottom: "16px",
      textTransform: "capitalize",
    },
  };
});

const SkillsLanguage = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className="">
      <div className={classes.textSkills}>{t(textI18n.skills)}</div>
      <div>
        <SkillItem />
        <div className={classes.textSkills}>{t(textI18n.skillsOther)}</div>
        <ul style={{lineHeight:"24px"}}>
          <li>Google analytics</li>
          <li>Google captcha</li>
          <li>Payment</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsLanguage;
