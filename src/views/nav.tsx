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
import { colors } from "../colors";
const useStyles = makeStyles((theme) => {
  return {
    containerNav: {
      width: "80px",
      position: "fixed",
      right: 0,
      top: 0,
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      height: "100vh",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        bottom: 0,
        height: "max-content",
        top: "unset",
      },
    },
    contentNav: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
      },
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
      "&:hover": {
        background: "#ffb400",
        "& div": {
          background: "#ffb400",
          transform: "translateX(0)",
          color: colors.white,
        },
        "& span": {
          display: "block",
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
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
    },
    catalogHover: {
      position: "absolute",
      padding: "0px 30px 0 30px",
      top: 0,
      width: "max-content",
      borderRadius: "30px 0 0 30px",
      height: "50px",
      zIndex: "-1",
      right: 27,
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      transition: "all 0.4s",
      color: "transparent",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "15px",
      transform: "translateX(12%)",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    containerLanguage: {
      position: "absolute",
      background: "#ffb400",
      color: "#fff",
      left: "-100px",
      bottom: "-70px",
      display: "none",
      borderRadius: "8px",
    },
    languageItem: {
      padding: "6px 60px 6px 10px",
      fontWeight: 500,
      "&:hover": {
        color: colors.textMain,
      },
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
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { hover, setHover } = useCheckHoverIconCatalog();
  const classes = useStyles();
  const changeLanguage = (e: MouseEvent | any, language: string) => {
    e.stopPropagation();
    i18n.changeLanguage(language);
    setHover(null);
  };
  const onHanldeCatalog = (path: string) => {
    navigate(path);
  };

  return (
    <div className={classes.containerNav}>
      <div className={classes.contentNav}>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(1)}
          onMouseOut={() => setHover(null)}
          onClick={() => onHanldeCatalog(pathRouter.home)}
          style={
            pathRouter.home === window.location.pathname
              ? { background: colors.highLight }
              : {}
          }
        >
          <icons.home
            highLightIcon={pathRouter.home === window.location.pathname}
          />
          <div className={classes.catalogHover}>{t(textI18n.home)}</div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(2)}
          onMouseOut={() => setHover(null)}
          onClick={() => onHanldeCatalog(pathRouter.aboutMe)}
          style={
            pathRouter.aboutMe === window.location.pathname
              ? { background: colors.highLight }
              : {}
          }
        >
          <icons.about
            highLightIcon={pathRouter.aboutMe === window.location.pathname}
          />
          <div className={classes.catalogHover}>{t(textI18n.about)}</div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(3)}
          onMouseOut={() => setHover(null)}
          onClick={() => onHanldeCatalog(pathRouter.project)}
          style={
            pathRouter.project === window.location.pathname
              ? { background: colors.highLight }
              : {}
          }
        >
          <icons.project
            highLightIcon={pathRouter.project === window.location.pathname}
          />
          <div className={classes.catalogHover}>{t(textI18n.projects)}</div>
        </div>
        {/* <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(4)}
          onMouseOut={() => setHover(null)}
          onClick={() => onHanldeCatalog(pathRouter.skills)}
          style={
            pathRouter.skills === window.location.pathname
              ? { background: colors.highLight }
              : {}
          }
        >
          <icons.skill
            highLightIcon={pathRouter.skills === window.location.pathname}
          />
          <div className={classes.catalogHover}>{t(textI18n.skills)}</div>
        </div>
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(5)}
          onMouseOut={() => setHover(null)}
          onClick={() => onHanldeCatalog(pathRouter.blog)}
          style={
            pathRouter.blog === window.location.pathname
              ? { background: colors.highLight }
              : {}
          }
        >
          <icons.blog
            highLightIcon={pathRouter.blog === window.location.pathname}
          />
          <div className={classes.catalogHover}>{t(textI18n.blog)}</div>
        </div> */}
        <div
          className={classes.catalogItem}
          onMouseMove={() => setHover(6)}
          onMouseOut={() => setHover(null)}
        >
          <icons.language2 />
          <div className={classes.catalogHover}>{t(textI18n.language)}</div>
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
        </div>
      </div>
    </div>
  );
};

export default Nav;
