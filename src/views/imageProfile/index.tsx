import React from 'react'
import me from '../../assets/me.jpg'
import { makeStyles } from '@mui/styles';
import meMobie from "../../assets/img-mobile.webp";

const useStyles = makeStyles((theme) => {
  return {
    image:{
      height:"calc(100vh - 80px)",
      borderRadius:"30px",
      [theme.breakpoints.down("md")]:{
         width:"100%",
         height:"100%",
         borderRadius:"50%"
      }

    },
    containerImage:{
      padding:"0px 0px 0px 40px",
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      height:"100vh",
      [theme.breakpoints.down("md")]:{
        height:"230px",
        width:"230px",
        padding:"0",
        margin:"0 auto",
        marginBottom:"24px"
      }

    }
  }
})
const ImageProfile = () => {
  const classes = useStyles()
  const widthScreen = window.screen.width
  return (
    <div className={`${classes.containerImage} width-image`}>
      <img src={widthScreen > 1200 ? me : meMobie} alt="me" className={classes.image} />
    </div>
  )
}

export default ImageProfile