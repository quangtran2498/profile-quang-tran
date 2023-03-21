import React from 'react'
import me from '../../assets/me.jpg'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => {
  return {
    image:{
      height:"calc(100vh - 80px)",
      borderRadius:"30px"
    },
    containerImage:{
      padding:"0px 0px 0px 40px",
      ...theme.custom?.flexBox.flexAlignItemsCenter,
      height:"100vh"
    }
  }
})
const ImageProfile = () => {
  const classes = useStyles()
  return (
    <div className={classes.containerImage}>
      <img src={me} alt="me" className={classes.image} />
    </div>
  )
}

export default ImageProfile