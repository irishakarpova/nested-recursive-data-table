import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#C0C3C6",
      main: "#2A3743",
      dark: "#404E5C"
    },
    text: {
      primary: "#2A3743",
      secondary: "#93969a"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  overrides: {
    MuiTableCell: {
      root: {
        border: "1px solid rgb(239 239 239)",
        borderTop: "none"
      },
      head: {
        color: "#C0C3C6",
        background: "#425261"
      }
    },
    MuiTablePagination: {
      toolbar: {
        background: "#f1f1f1"
      }
    }
  }
});

export default theme;
