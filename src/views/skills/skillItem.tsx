import React from "react";
import parse from "html-react-parser";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles, withStyles } from "@mui/styles";
import { colors } from "../../colors";
import { fontSize } from "../../contants/fontSize";
import { dataSkillsLanguage } from "../../mocks";
const useStyles = makeStyles((theme) => {
  return {
    infoValue: {
      fontWeight: 400,
    },
    textSkills: {
      fontWeight: 700,
      fontSize: fontSize.medium,
      marginBottom: "16px",
      textTransform: "capitalize",
    },
    skillNodejs: {
      "&::before": {
        width: "calc(100% - 50%)",
      },
    },
    skillItem: {
      marginBottom: "16px",
    },
    skillTitle: {
      fontWeight: 700,
      textTransform: "capitalize",
    },
    lineContainer: {
      position: "relative",
      width: "100%",
      paddingBottom: "10px",
    },
    lineLevel: {
      position: "absolute",
      height: "8px",
      borderRadius: "2px",
      background: colors.highLight,
      bottom: "0px",
      left: 0,
      right: 0,
      zIndex: "2",
    },
    lineBlur: {
      opacity: "0.5",
      position: "absolute",
      height: "8px",
      borderRadius: "2px",
      background: colors.highLight,
      bottom: "0px",
      left: 0,
      right: 0,
      zIndex: "-1",
      width: "100%",
    },
  };
});
const CssAccordion = withStyles({
  root: {
    "&.MuiAccordion-root": {
      boxShadow: "none",
    },
  },
})(Accordion);
const CssAccordionSummary = withStyles({
  root: {
    "&.MuiAccordionSummary-root": {
      padding: "0",
      minHeight: "unset",
      marginBottom: "4px",
      "& .MuiAccordionSummary-content": {
        margin: "0",
        marginRight: "10px",
      },
      "&.Mui-expanded": {
        minHeight: "unset",
      },
    },
  },
})(AccordionSummary);

const CssAccordionDetails = withStyles({
  root: {
    "&.MuiAccordionDetails-root": {
      padding: "0",
    },
  },
})(AccordionDetails);

const SkillItem = () => {
  const [expanded, setExpanded] = React.useState<number | false>();
  console.log(expanded, "expanded");

  const classes = useStyles();
  const handleChange = (id: number) => {
    expanded === id ? setExpanded(false) : setExpanded(id);
  };
  return (
    <>
      {dataSkillsLanguage.map((skill) => {
        return (
          <div key={skill.id} className={classes.skillItem}>
            <CssAccordion
              expanded={expanded === skill.id}
              onChange={() => handleChange(skill.id)}
            >
              <CssAccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <div className={classes.skillTitle}>
                  {skill?.title}:{" "}
                  <span className={classes.infoValue}>{skill?.level}</span>
                </div>
              </CssAccordionSummary>
              <CssAccordionDetails>
                <div className="" style={{ lineHeight: "30px",margin:"0" }}>
                  <span>{parse(`${skill?.skillDetail}`)}</span>
                </div>
              </CssAccordionDetails>
            </CssAccordion>
            <div className={classes.lineContainer}>
              <div className={classes.lineBlur}></div>
              <div
                className={classes.lineLevel}
                style={{ width: skill.ratio }}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillItem;
