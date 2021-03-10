import React from 'react';
import { CssBaseline } from '@material-ui/core';
import AffiliateTable from "./components/configDataTable/configDataTable";
import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
        primary: "#9e9e9e",
        secondary: "#93969a"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
},
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AffiliateTable/>
    </ThemeProvider>
  );
}

export default App;