import React from 'react'

interface ValueTypes{
    page: number,
    rowsPerPage: number,
    rows: {
        [index: string]: string;
    }[],
    rowsByParentId: {},
    columns: {
        name: string;
        label: string;
    }[] 
    config: {
        columns: {
            name: string;
            label: string;
        }[];
    } | null
    tableData: {
        rows: {
            id: string
            parentId: string
            cells: {
                name: string
                value: string
            }[];
        }[] 
        total: number
    } | null
    handleChangePage: ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void,
    
}
export const Store = React.createContext<ValueTypes>({
    page: 0,
    rowsPerPage: 10,
    rows: [],
    rowsByParentId: {},
    columns: [],
    config: null,
    tableData: null,
    handleChangeRowsPerPage: () => {},
    handleChangePage: () => {},
})



