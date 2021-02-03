import React from 'react';
import Alert from "@material-ui/lab/es/Alert/Alert";
import DataTable from '../dataTable/table'
import {Store} from '../store'
import { tableData, config } from '../../data'

export default function ConfigDataTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    let columns = config ? config.columns : [];

    function createData(row){
        let rowObject = {};
        rowObject.parentId = row.parentId;
        row.cells.map(cell => {
            return rowObject[cell.name] = cell.value;
        });
        return rowObject;
    }

    let rows = [];
    let rowsByParentId = {};
    tableData.rows.map((row) => {
        const createdRow = createData(row);
        if (row.parentId) {
            if (!rowsByParentId[row.parentId]) {
                rowsByParentId[row.parentId] = [];
            }
            rowsByParentId[row.parentId].push(createdRow);
        }
        return rows.push(createdRow)
    });


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage();
    };

    const values={
        page: page,
        rowsPerPage: rowsPerPage,
        handleChangeRowsPerPage: handleChangeRowsPerPage,
        handleChangePage: handleChangePage,
        rows: rows,
        rowsByParentId:rowsByParentId,
        columns: columns,
        config: config,
        tableData: tableData
    }

    return (
        <Store.Provider value={values}>
            { !rows.length  ? 
                <Alert severity="info">No results</Alert> 
                : <DataTable/>
            }
        </Store.Provider>
    );
}