import { makeStyles } from "@mui/styles";
import React from "react";
import { textI18n, languages } from '../lang/languages';
// import { icons } from "../icons";
// import ChangeLanguage from "./changeLanguage/index";
import { useTranslation } from "react-i18next";
import { navData } from "../mocks/index";
import { useCheckHoverIconCatalog } from "../providers/hoverIconCatalog";
import { icons } from "../icons/index";
import { keyframes } from "@emotion/react";
const useStyles = makeStyles((theme) => {
  return {
    containerNav: {
      // background: "#000",
      // padding: "10px 0",
      width: "80px",
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
    containerLanguage: {
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      textTransform: "uppercase",
      cursor: "pointer",
    },
    language: {
      position: "relative",
    },
    catalogItem: {
      height: "50px",
      width: "50px",
      ...theme.custom?.flexBox.flexCenterCenter,
      background: "#eee",
      borderRadius: "50%",
      marginBottom: "20px",
      position: "relative",
      // transition: "all .3s",
      "&:hover": {
        background: "#ffb400",
        "& div": {
          display: "flex"
        },
      },
    },
    catalogHover: {
      position: "absolute",
      background: "#ffb400",
      // right:0,
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
      fontWeight: 500,
      textTransform: "uppercase",
      display:"none",
      // animation:`${myEffect} 0.5s`
      // flexGrow:2
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
  // const [hover, setHover] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const { hover, setHover } = useCheckHoverIconCatalog();
  const classes = useStyles();
  return (
    <div className={classes.containerNav}>
      <div
        className={classes.catalogItem}
        onMouseMove={() => setHover(1)}
        onMouseOut={() => setHover(null)}
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
      >
        <icons.language2 />
        <div className={classes.catalogHover}>
          <div className="">{t(textI18n.language)}</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
// {
//    <ContainerMain>
//         <div className={classes.containerNavSub}>
//           <div className="">Quang Dev</div>
//           <div className={classes.containerNavRight}>
//             <div className={classes.containerCatalog}>
//               <div className={classes.pageItem}>{t(textI18n.home)}</div>
//               <div className={classes.pageItem}>
//                 {t(textI18n.about)}
//               </div>
//               <div className={classes.pageItem}>
//                 {t(textI18n.projects)}
//               </div>
//               <div className={classes.pageItem}>
//                 {t(textI18n.skills)}
//               </div>
//               <div className={classes.pageItem}>{t(textI18n.blog)}</div>
//               <div className={classes.pageItem}>
//                 {t(textI18n.services)}
//               </div>
//             </div>
//             <div className={classes.language} onClick={handleShowLanguage}>
//               <div className={classes.containerLanguage}>
//                 {<icons.language sx={{ marginRight: "4px" }} />}
//                 {t(textI18n.language)}
//                 {<icons.arrowDown sx={{ marginLeft: "4px" }} />}
//               </div>
//               {showLanguage && <ChangeLanguage handleHideLanguage={handleHideLanguage}/>}
//             </div>
//           </div>
//         </div>
//       </ContainerMain>
// }
