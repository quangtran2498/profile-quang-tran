import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
interface PropsI {
    handleHideLanguage:() => void
}
const useStyles = makeStyles((theme) => {
  return {
    container: {
      background:"#fff",
      color:"#333",
      position:"absolute",
      right:0,
      bottom:-70,
      width:"150px",
      textAlign:"left"
    },
    languageItem: {
      padding: "4px 10px",
      cursor:"pointer"

    },
  };
});
const ChangeLanguage = ({handleHideLanguage}:PropsI) => {
    // console.log("123",handleHideLanguage);
    
    const { i18n } = useTranslation();
  const changeLanguage = (e:MouseEvent | any,language: string) => {
    e.stopPropagation()
    i18n.changeLanguage(language);
    handleHideLanguage()
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.languageItem} onClick={(e) => changeLanguage(e,"vi")}>Tiếng Việt</div>
      <div className={classes.languageItem} onClick={(e) => changeLanguage(e,"en")}>English</div>
    </div>
  );
};

export default ChangeLanguage;
