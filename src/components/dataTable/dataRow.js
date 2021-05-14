import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DataRow from "./dataRow";
import { Store } from "../store";
import { useRowStyles } from "./styles";

export default function (props) {
  const store = React.useContext(Store);
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow key={`column.id ${props.index}`}>
        {store.columns.map((column, index) => {
          const value = props.row[column.name];
          return (
            <TableCell
              className={clsx(
                classes.stikyCell,
                { [classes.colapsedHeadLevel]: isOpen },
                classes["colapsedRowLevel" + props.level]
              )}
              style={index < 1 ? props.stikyColumn(index) : null}
              key={column.label}
            >
              {value}
              {store.rowsByParentId[props.row.id] && index === 0 ? (
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              ) : null}
            </TableCell>
          );
        })}
      </TableRow>

      {store.rowsByParentId[props.row.id] && (
        <React.Fragment>
          {isOpen
            ? store.rowsByParentId[props.row.id].map((row, index) => {
                return (
                  <DataRow
                    key={index}
                    index={index}
                    row={row}
                    stikyColumn={props.stikyColumn}
                    hasParent={true}
                    parentHasParent={!!props.row.parentId}
                    level={props.level + 1}
                  />
                );
              })
            : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
