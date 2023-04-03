import React from "react";
import Modal from "../../components/modal/index";
import TextTitle from "../../components/textTitle/index";
import TextDesc from "../../components/textDesc/index";
import { DataDetailI } from "../../interface/index";
import { makeStyles } from "@mui/styles";
//
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
interface PropsI {
  open: boolean;
  hideModal: () => void;
  dataProject: DataDetailI;
}
const useStyles = makeStyles((theme) => {
  return {
    table: {
      display: "grid",
      gridTemplateColumns: "33.334% 66.667%",
      // gridGap: "20px",
    },
    thTitle: {
      width: "33.334%",
    },
    headerTable: {
      textAlign: "left",
    },
    tableTitle: {
      width: "33.334%",
    },
    talbeDesc: {
      width: "66.667%",
    },
  };
});
const DetailProject = ({ open, hideModal, dataProject }: PropsI) => {
  const classes = useStyles();
  return (
    <div>
      <Modal open={open} onClose={hideModal} styleAdd={{padding:"20px 20px",width:"50%"}}>
        <TextTitle typeText={"title"} marginBottom={"4px"} textTransform={"capitalize"}>{dataProject?.nameProject}</TextTitle>
        <TextDesc typeText={"desc"} marginBottom={"4px"} textTransform={"capitalize"}>{dataProject?.desc}</TextDesc>
        <TextDesc typeText={"desc"} marginBottom={"16px"} textTransform={"capitalize"}>{dataProject?.time}</TextDesc>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableTitle}>Title</TableCell>
                <TableCell className={classes.talbeDesc} align="left">
                  Decsription
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Cong nghe</TableCell>
                <TableCell align="left">{dataProject?.tech}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>thanh vien</TableCell>
                <TableCell align="left">{dataProject?.numbers}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>vi tri</TableCell>
                <TableCell align="left">{dataProject?.position}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>content</TableCell>
                <TableCell align="left">{dataProject?.content}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>kieu du an</TableCell>
                <TableCell align="left">{dataProject?.typeProject}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Modal>
    </div>
  );
};

export default DetailProject;
