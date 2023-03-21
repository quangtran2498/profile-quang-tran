import React ,{useEffect} from "react";
import ImageProfile from "../views/imageProfile/index";
import ContentHome from "../views/contentHome/index";
import Nav from "../views/nav";
import { makeStyles, withStyles } from '@mui/styles';
import { colors } from "../colors";
const useStyles = makeStyles((theme) => {
  return {
    containerHome: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      width:"calc(100% - 80px)"
    },
    bg: {
      position: "fixed",
      height: "200%",
      width: "100%",
      transform: "rotate(-15deg)",
      left: "-83%",
      top: "-50%",
      background: colors.highLight,
      zIndex: "-1",
    },
  };
});
const Home = () => {
  const [widthImage, setWidthImage] = React.useState<number>()
  useEffect(() => {
    const elementImage = document.querySelector(".width-image")
    setWidthImage(elementImage?.clientWidth)
 },[])
  const classes = useStyles();
  console.log(widthImage,"123");
  
  return (
    <>
      <div className={classes.containerHome}>
        <ImageProfile/>
        {widthImage && 
        <ContentHome widthImage={widthImage}/>
        }
        {/* <ContentHome widthImage={widthImage}/> */}

      </div>
      <div className={classes.bg}></div>
    </>
  );
};

export default Home;
