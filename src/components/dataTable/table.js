import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DataRow from "./dataRow";
import { Store } from "../store";
import { useTableStyles } from "./styles";

const widthCell = 89;

export default function () {
  const store = React.useContext(Store);
  const classes = useTableStyles();

  const stikyColumn = (index) => {
    return {
      left: widthCell * index,
      zIndex: 1
    };
  };

  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {store.columns.map((column, index) => {
                return (
                  <TableCell
                    key={column.name}
                    className={clsx(
                      index === 0 ? classes.stikyHead : null,
                      index === store.config.columns.length
                        ? classes.fixWidth
                        : null
                    )}
                    style={index === 0 ? stikyColumn(index) : null}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {store.rows.map((row, index) => {
              if (row.parentId) return null;
              return (
                <DataRow
                  key={index}
                  index={index}
                  row={row}
                  stikyColumn={stikyColumn}
                  level={0}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={store.tableData.total ? store.tableData.total : 0}
        rowsPerPage={store.rowsPerPage ? store.rowsPerPage : 1}
        page={store.page ? store.page : 0}
        onChangePage={store.handleChangePage}
        onChangeRowsPerPage={store.handleChangeRowsPerPage}
      />
    </Paper>
  );
}
