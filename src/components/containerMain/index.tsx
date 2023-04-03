import { makeStyles } from "@mui/styles";
import React from "react";
interface PropsI {
  children: React.ReactNode;
  className?:string
}
const useStyles = makeStyles((theme) => {
  return {
    styleDefault: {
      width: "90%",
      margin: "0 auto",
    },
  };
});
const ContainerMain = ({ children,className }: PropsI) => {
  const classes = useStyles();
  return <div className={`${classes.styleDefault} ${className}`}>{children}</div>;
};

export default ContainerMain;
