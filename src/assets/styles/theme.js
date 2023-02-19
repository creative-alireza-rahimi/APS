export const theme = {
  colors: {
    white: '#FFF',
    darkBlue: 'hsl(209, 23%, 22%)',
    darkishBlue: 'hsl(200, 15%, 8%)',
    veryDarkBlue: 'hsl(207, 26%, 17%)',
  },
  fontSize: {
    s: '14px',
    m: '16px',
  },
  fontWeight: {
    slim: 300,
    medium: 600,
    bold: 800,
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    white: '#111517',
    darkBlue: 'white',
    darkishBlue: 'white',
    veryDarkBlue: '#FAFAFA',
    gray: '#e0dcdc',
  },
};
