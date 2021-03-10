import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useTableStyles = makeStyles( () => 
createStyles({
    root: {
      width: '100%',
    },
    fixWidth:{
      width: 58,
    },
    sortIconUp:{
      fontSize: '10px',
      transform: 'rotate(180deg)',
      cursor: 'pointer'
    },
    sortIconDown:{
      fontSize: '10px',
      transform: 'rotate(0deg)',
    },
    stikyCell:{
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: 'ellipsis',
      position: 'sticky',
      border: 0,
      background: '#fff',
      boxShadow: "0 0 4px rgba(0,0,0,0.55)",
      clipPath: "inset(0px -5px 0px 0px)",
    },
    stikyHead:{
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: 'ellipsis',
      position: 'sticky',
      boxShadow: "0 0 4px rgba(0,0,0,0.55)",
      clipPath: "inset(0px -5px 0px 0px)",
    },
    tableCell:{
      background: "#DA64E0",
      color: '#ffffff',
      border: '1px solid rgb(239 239 239)',
      borderTop: 'none'
    },
    tablePagination:{
      background: '#f1f1f1',
    }
  }))

  export const useRowStyles = makeStyles(() => createStyles({
    stikyCell:{
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: 'ellipsis',
      position: 'sticky',
      background: '#fff',
      border: 0,
      boxShadow: "0 0 4px rgba(0,0,0,0.55)",
      clipPath: "inset(0px -5px 0px 0px)",
    },

    colapsedRowLevel1:{
      background: '#dadee7',
    },
    colapsedRowLevel2:{
      background: '#eaedf0',
    },
    colapsedHeadLevel:{
      background: '#c7cddb',
    },


  }))