import { colors } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.cyan[800]
    },
    secondary: {
      main: colors.pink[600]
    },
    tertiary: {
      main: colors.lime[900]
    },
    error: {
      main: colors.red[400]
    },
    background: {
      default: '#ddd'
    }
  }
});

export default theme;
