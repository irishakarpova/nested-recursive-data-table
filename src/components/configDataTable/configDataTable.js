import React from 'react';
import { useQuery } from '@apollo/client';
import Alert from "@material-ui/lab/es/Alert/Alert";
import DataTable from '../dataTable/table'
import {Store} from '../store'
import {GET_CONFIG, GET_DATA} from './queries.js'

export default function ConfigDataTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    let { loading, error, data: loadedData } = useQuery(GET_DATA, {
        variables: {
            paginationInput: {
                limit: rowsPerPage,
                offset: rowsPerPage * page,
            }
        }
    });

    let { loading: configLoading, 
        error: configError, data: configData } = useQuery(GET_CONFIG);

    if (error) return <Alert severity="error">{error.message}</Alert>
    if (configError) return <Alert severity="error">{configError.message}</Alert>

    const config = configData ? Object.values(configData)[0] : null;
    const tableData = loadedData ? Object.values(loadedData)[0] : [];

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
    configData && tableData && tableData.rows && tableData.rows.map((row) => {
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
            { !rows.length && !loading && !configLoading ? 
                <Alert severity="info">No results</Alert> 
                : <DataTable/>
            }
        </Store.Provider>
    );
}