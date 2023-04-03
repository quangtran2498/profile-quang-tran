import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { fontSize } from "../../contants/fontSize";
import Typography from "@mui/material/Typography"; //! nếu mà dùng thằng nay thì khi dùng vs makestyles thì sẽ ko ghi đè dc thuộc tính mắc định nếu mà ghi đè thì phải dùng !
import Box from "@mui/material/Box";

interface PropsI {
  typeText: "title" | "title-sub";
  children: string;
  className?: string;
  fontWeight?: 400 | 500 | 600 | 700;
  styleAdd?: any;
  marginBottom?: "4px" | "8px" | "16px" | "32px";
  textTransform?:"capitalize" | "uppercase"
}

const TypographyCustom = withStyles((theme) => {
  return {
    root: {
      "&.MuiTypography-root": {
        fontWeight: 700,
      },
    },
  };
})(Typography);

const TextTitle = (props: PropsI) => {
  const { typeText, children, className,fontWeight, marginBottom, styleAdd,textTransform, ...rest } = props;
  const handleText = () => {
    if (typeText === "title") {
      return { fontSize: { xs: "16px", lg: "20px" } };
    } else if (typeText === "title-sub") {
      return { fontSize: { xs: "16px", lg: "18px" } };
    } else {
      return { fontSize: { xs: "14px", lg: "16px" } };
    }
  };

  return (
    <TypographyCustom sx={{ ...handleText(),fontWeight:fontWeight,marginBottom:marginBottom,textTransform:textTransform,...styleAdd}}>
      {children}
    </TypographyCustom>
  );
};

export default TextTitle;
