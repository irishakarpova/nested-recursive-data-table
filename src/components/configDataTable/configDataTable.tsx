import React from 'react';
import DataTable from '../dataTable/table'
import { Store } from '../store'
import { tableData, config } from '../../data'

interface CellType{
    name: string,
    value: string
}
export interface RowType{
    id: string,
    parentId: string,
    cells: Array<CellType>
}


export default function ConfigDataTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    let columns = config ? config.columns : [];

    function createData(row: RowType){
        let rowObject:{[index:string]:string} = {};

        rowObject.parentId = row.parentId;
        row.cells.map(cell => {
            return rowObject[cell.name] = cell.value;
        });
        return rowObject;
    }
    
    let rows: {[index:string]:string}[] = [];
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


    const handleChangePage = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
        setPage(page);
    };
    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setRowsPerPage(+event.target.value);
        setPage(page);
    };

    const values = {
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
                <p>No results</p> 
                : <DataTable/>
            }
        </Store.Provider>
    );
}