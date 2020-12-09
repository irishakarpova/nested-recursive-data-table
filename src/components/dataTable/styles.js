import { makeStyles } from '@material-ui/core/styles';

export const useTableStyles = makeStyles((theme, props) => ({
    root: {
      width: '100%',
    },
    fixWidth:{
      width: 58,
    },
    sortIconUp:{
      fontSize: '14px',
      transform: 'rotate(180deg)',
      cursor: 'pointer'
    },
    sortIconDown:{
      fontSize: '14px',
      transform: 'rotate(0deg)',
    },
    stikyCell:{
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: 'ellipsis',
      position: 'sticky',
      border: 0,
      background: '#fff',
      borderBottom: "1px solid rgb(239 239 239)",
      boxShadow: "0 0 4px rgba(0,0,0,0.55)",
      clipPath: "inset(0px -5px 0px 0px)",
    },
    stikyHead:{
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: 'ellipsis',
      position: 'sticky',
      border: 0,
      boxShadow: "0 0 4px rgba(0,0,0,0.55)",
      clipPath: "inset(0px -5px 0px 0px)",
    },
    rootBtn: {
      color: '#E2E3E3',
      padding: '8px 20px',
      background: 'linear-gradient(45deg, #242E34 10%, #445964 90%)',
      letterSpacing: 1,
      "&.Mui-disabled": {
        background:  'linear-gradient(45deg, #EFEFEF 10%, #A0A0A0 90%)',
      },
      margin: theme.spacing(3, 0, 0, 3)
    },
  }))

  export const useRowStyles = makeStyles((theme, props) => ({
    stikyCell:{
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: 'ellipsis',
      position: 'sticky',
      border: 0,
      background: '#fff',
      borderBottom: "1px solid rgb(239 239 239)",
      boxShadow: "0 0 4px rgba(0,0,0,0.55)",
      clipPath: "inset(0px -5px 0px 0px)",
    },
    colapsedRow:{
      background: '#dadee7',
    },
    colapsedRowLevel1:{
      background: '#dadee7',
    },
    colapsedRowLevel2:{
      background: '#eaedf0',
    },
  }))