import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
      background: "rgba(0,0,0,0.1)",
    },
    contentContianer: {
      width: "500px",
      background: "#fff",
      padding: "10px",
      borderRadius: "16px",
    },
  };
});
interface PropsI {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  styleAdd?:any
}
const Modal = ({ open, onClose, children,styleAdd }: PropsI) => {
  const classes = useStyles();
  const stopHandle = (event: any) => {
    event.stopPropagation()
  };
  return (
    <>
      {open && (
        <div className={classes.container} onClick={() => onClose()}>
          <div className={classes.contentContianer} style={{...styleAdd}} onClick={stopHandle}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
