import React from "react";
import { makeStyles } from "@mui/styles";
import { fontSize } from "../../contants/fontSize";
import { colors } from "../../colors";
const useStyles = makeStyles((theme) => {
  return {
    textHeader: {
      fontSize: fontSize.large,
      fontWeight: 700,
      textTransform: "uppercase",
      textAlign: "center",
      paddingTop: "50px",
      color: colors.textMain,
      marginBottom: "50px",
    },
  };
});
interface PropsI {
  textDefault: string;
  textHighLight: string;
}
const TextHeader = ({ textDefault, textHighLight }: PropsI) => {
  const classes = useStyles();
  return (
    <div className={classes.textHeader}>
      {textDefault} <span className="text-high-light">{textHighLight}</span>
    </div>
  );
};

export default TextHeader;
