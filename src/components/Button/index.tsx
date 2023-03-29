import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, withStyles } from "@mui/styles";
import { colors } from "../../colors";
const CustomBtn = withStyles((theme) => {
  return {
    root: {
      "&:hover": {},
      "&.MuiButton-root": {
        color: "#666",
        border: `1px solid ${colors.highLight}`,
        padding: "0px 0px 0px 35px",
        borderRadius: "35px",
        fontWeight: 600,
        fontSize: "15px",
        overflow:"hidden",
        "&:hover": {
          color: "#fff",
          "&::before": {
            background:colors.highLight,
            transform: "translateX(0)"
          },
        },
        "&.Mui-disabled": {
          background: "#E7E8FD",
        },
        "& .MuiButton-endIcon": {
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          background: colors.highLight,
          ...theme.custom?.flexBox.flexCenterCenter,
          // background:"#fff"
        },
        "&::before": {
          // display: "none",
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left:0,
          right: 0,
          background: "transparent",
          borderRadius: "35px",
          zIndex: "-1",
          transition: "all .5s",
          transform: "translateX(100%)",
        },
      },
    },
  };
})(Button);

//! type
interface ButtonProps {
  children: string;
  onClick?: () => void | any;
  style?: any;
  className?: string;
  disabled?: boolean;
  type?: any;
  icon?: React.ReactNode;
  positionIconStart?: boolean;
  positionIconEnd?: boolean;
  text?: string;
}
const useStyles = makeStyles((theme) => {
  return {
    disable: {
      background: "#E7E8FD",
    },
  };
});
const ButtonCommon = (props: ButtonProps) => {
  //! State
  const {
    children,
    onClick,
    style,
    className,
    type,
    disabled,
    icon,
    positionIconStart,
    positionIconEnd,
    ...restProps
  } = props;
  const typebtn = type;
  //! Render
  return (
    <CustomBtn
      disabled={disabled}
      onClick={onClick}
      type={typebtn}
      className={`${className}`}
      style={{ ...style }}
      startIcon={positionIconStart && icon}
      endIcon={positionIconEnd && icon}
      {...restProps}
    >
      {children}
    </CustomBtn>
  );
};
export default ButtonCommon;
