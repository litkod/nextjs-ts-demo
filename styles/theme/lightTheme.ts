import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    h2: {
      fontWeight: 'bold',
    },
  },
});

export default lightTheme;