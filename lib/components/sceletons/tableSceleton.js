import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import grey from '@material-ui/core/colors/grey';
const useStyles = makeStyles(() => createStyles({
  root: {
    width: '100%'
  },
  tablecell: {
    background: grey[100]
  }
}));
export default function () {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 0,
    className: classes.root
  }, /*#__PURE__*/React.createElement(TableContainer, null, /*#__PURE__*/React.createElement(Table, {
    "aria-label": "table"
  }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, {
    style: {
      height: 60
    }
  }, [1, 2, 3, 4, 5].map(index => {
    return /*#__PURE__*/React.createElement(TableCell, {
      classes: {
        root: classes.tablecell
      },
      key: index,
      component: "th",
      scope: "row"
    });
  }))), /*#__PURE__*/React.createElement(TableBody, null, [1, 2, 3, 4].map(index => {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: index,
      style: {
        height: 60
      }
    }, [1, 2, 3, 4, 5].map(index => {
      return /*#__PURE__*/React.createElement(TableCell, {
        key: index,
        component: "th",
        scope: "row"
      });
    }));
  })))));
}