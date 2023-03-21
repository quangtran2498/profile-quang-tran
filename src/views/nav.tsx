import { makeStyles } from "@mui/styles";
import React from "react";
import { textI18n, languages } from "../lang/languages";
// import { icons } from "../icons";
// import ChangeLanguage from "./changeLanguage/index";
import { useTranslation } from "react-i18next";
import { navData } from "../mocks/index";
import { useCheckHoverIconCatalog } from "../providers/hoverIconCatalog";
import { icons } from "../icons/index";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { pathRouter } from "../routes/path";
const useStyles = makeStyles((theme) => {
  return {
    containerNav: {
      width: "80px",
      position: "fixed",
      right: 0,
      top: 0,
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      height:"100vh"

    },
    containerNavSub: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      color: "#fff",
    },
    containerCatalog: {
      ...theme.custom?.flexBox.flexAlignItemsCenter,
    },
    containerNavRight: {
      display: "flex",
    },
    pageItem: {
      padding: "0 10px",
      textTransform: "uppercase",
      cursor: "pointer",
    },

    catalogItem: {
      height: "50px",
      width: "50px",
      ...theme.custom?.flexBox.flexCenterCenter,
      background: "#eee",
      borderRadius: "50%",
      marginBottom: "20px",
      position: "relative",
      cursor: "pointer",
      // transition: "all .3s",
      "&:hover": {
        background: "#ffb400",
        "& div": {
          display: "flex",
        },
      },
      "&::before": {
        display: "block",
        content: '""',
        position: "absolute",
        width: "200px",
        height: "150%",
        top: 0,
        left: "-100px",
      },
    },
    catalogHover: {
      position: "absolute",
      background: "#ffb400",
      padding: "0px 25px 0 30px",
      top: 0,
      width: "100px",
      borderRadius: "30px 0 0 30px",
      height: "50px",
      zIndex: "-1",
      right: 27,
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      transition: "all .3s",
      color: "#fff",
      fontWeight: 600,
      textTransform: "uppercase",
      display: "none",
      fontSize: "15px",
    },
    containerLanguage: {
      position: "absolute",
      background: "#ffb400",
      color: "#fff",
      left: "-100px",
      bottom: "-80px",
      borderRadius: "8px",
    },
    languageItem: {
      padding: "6px 60px 6px 10px",
    },
  };
});
// const myEffect = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;
const Nav = () => {
  const [showLanguage, setShowLanguage] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { hover, setHover } = useCheckHoverIconCatalog();
  const classes = useStyles();
  const changeLanguage = (e: MouseEvent | any, language: string) => {
    e.stopPropagation();
    i18n.changeLanguage(language);
    setShowLanguage(false);
    setHover(null);
  };

  return (
    <div className={classes.containerNav}>
      <div className="">
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(1)}
          onMouseOut={() => setHover(null)}
          onClick={() => navigate(pathRouter.home)}
        >
          <icons.home />
          <div className={classes.catalogHover}>
            <div className="">{t(textI18n.home)}</div>
          </div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(2)}
          onMouseOut={() => setHover(null)}
          onClick={() => navigate(pathRouter.aboutMe)}
        >
          <icons.about />
          <div className={classes.catalogHover}>
            <div className="">{t(textI18n.about)}</div>
          </div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(3)}
          onMouseOut={() => setHover(null)}
          onClick={() => navigate(pathRouter.project)}
        >
          <icons.project />
          <div className={classes.catalogHover}>
            <div className="">{t(textI18n.projects)}</div>
          </div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(4)}
          onMouseOut={() => setHover(null)}
          onClick={() => navigate(pathRouter.skills)}
        >
          <icons.skill />
          <div className={classes.catalogHover}>
            <div className="">{t(textI18n.skills)}</div>
          </div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(5)}
          onMouseOut={() => setHover(null)}
          onClick={() => navigate(pathRouter.blog)}
        >
          <icons.blog />
          <div className={classes.catalogHover}>
            <div className="">{t(textI18n.blog)}</div>
          </div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(6)}
          onMouseOut={() => setHover(null)}
          style={{ position: "relative" }}
          onClick={() => setShowLanguage(true)}
        >
          <icons.language2 />
          <div className={classes.catalogHover}>
            <div className="">{t(textI18n.language)}</div>
          </div>
          {showLanguage && (
            <span className={classes.containerLanguage}>
              <div
                className={classes.languageItem}
                onClick={(e) => changeLanguage(e, "vi")}
              >
                Tiếng Việt
              </div>
              <div
                className={classes.languageItem}
                onClick={(e) => changeLanguage(e, "en")}
              >
                English
              </div>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
