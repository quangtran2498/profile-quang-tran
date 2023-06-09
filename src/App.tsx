import React, { useRef } from "react";
import "./App.css";
import GlobalPopupConfirm from "./components/GlobalPopupConfirm/index";
import PopupService from "./utils/PopupService";
import { GlobalPopupConfirmRef } from "./components/GlobalPopupConfirm/index";
import { Route, Routes } from "react-router-dom";
import { routesPage } from "./routes";
import ProvidersCheckHoverIconCatalog from "./providers/hoverIconCatalog";
import Nav from "./views/nav";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => {
  return {
    containerApp: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("md")]:{
         display: "block",
      }
    },
  };
});
function App() {
  PopupService.instance = useRef<GlobalPopupConfirmRef | any>(null);
  const classes = useStyles()

  return (
    <ProvidersCheckHoverIconCatalog>
      <div className="App">
        <div className={classes.containerApp}>
          <Routes>
            {routesPage.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                element={<route.component />}
              ></Route>
            ))}
          </Routes>
          <Nav />
        </div>
        <GlobalPopupConfirm ref={PopupService.instance} />
      </div>
    </ProvidersCheckHoverIconCatalog>
  );
}

export default App;
