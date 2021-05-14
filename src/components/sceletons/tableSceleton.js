import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  tablecell: {
    background: grey[100]
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <TableContainer>
        <Table aria-label="table">
          <TableHead>
            <TableRow style={{ height: 60 }}>
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <TableCell
                    classes={{ root: classes.tablecell }}
                    key={index}
                    component="th"
                    scope="row"
                  ></TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <TableRow key={index} style={{ height: 60 }}>
                  {[1, 2, 3, 4, 5].map((index) => {
                    return (
                      <TableCell
                        key={index}
                        component="th"
                        scope="row"
                      ></TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
