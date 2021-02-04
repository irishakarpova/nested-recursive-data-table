import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#C0C3C6',
        main: '#2A3743',
        dark: '#404E5C'
      },
      text: {
        primary: "#2A3743", 
        secondary: "#93969a"
      }, 
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },

  });


  export default theme
