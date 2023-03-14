import { createTheme } from '@mui/material/styles';

const { augmentColor } = createTheme().palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

export const themes = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#1c2566',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    lightBtn: createColor('#fff'),
  },
});