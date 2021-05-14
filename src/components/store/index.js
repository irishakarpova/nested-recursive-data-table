import React from "react";

export const Store = React.createContext({
  page: 0,
  rowsPerPage: 10,
  rows: [],
  rowsByParentId: {},
  columns: [],
  config: null,
  tableData: [],
  handleChangeRowsPerPage: () => {},
  handleChangePage: () => {}
});
