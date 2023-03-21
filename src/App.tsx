import React, { useRef } from "react";
import "./App.css";
import GlobalPopupConfirm from "./components/GlobalPopupConfirm/index";
import PopupService from "./utils/PopupService";
import { TestPopupGlobal } from "./utils";
import { GlobalPopupConfirmRef } from "./components/GlobalPopupConfirm/index";
import { Route, Routes } from "react-router-dom";
import { routesPage } from "./routes";
import Nav from "./views/nav";
import ImageProfile from "./views/imageProfile/index";
import ContentHome from "./views/contentHome/index";
import { makeStyles } from "@mui/styles";
import ProvidersCheckHoverIconCatalog from "./providers/hoverIconCatalog";
import { colors } from "./colors";
const useStyles = makeStyles((theme) => {
  return {
    containerHome: {
      ...theme.custom?.flexBox.flexBetweenCenter,
    },
    bg: {
      position: "fixed",
      height: "200%",
      width: "100%",
      transform: "rotate(-15deg)",
      left: "-83%",
      top: "-50%",
      background:colors.highLight,
      zIndex:"-1"
    },
  };
});
function App() {
  PopupService.instance = useRef<GlobalPopupConfirmRef | any>(null);
  const classes = useStyles();
  return (
    <ProvidersCheckHoverIconCatalog>
      <div className="App">
        <div className={classes.containerHome}>
          <ImageProfile />
          <ContentHome />
          <Nav />
        </div>
        <div className={classes.bg}></div>
        <Routes>
          {routesPage.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.component />}
            ></Route>
          ))}
        </Routes>
        <GlobalPopupConfirm ref={PopupService.instance} />
      </div>
    </ProvidersCheckHoverIconCatalog>
  );
}

export default App;
