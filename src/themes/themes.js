import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',  // Example blue shade
      },
      secondary: {
        main: '#dc004e',  // Example pink shade
      },
      background: {
        default: '#e0f2f1',  // Light teal background
        paper: '#ffffff',
      },
      text: {
        primary: '#212121',
        secondary: '#757575',
      },
    },
  });

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',  // Light blue shade, suitable for dark mode
      },
      secondary: {
        main: '#f48fb1',  // Light pink shade, suitable for dark mode
      },
      background: {
        default: '#121212',  // Dark grey background
        paper: '#424242',
      },
      text: {
        primary: '#ffffff',
        secondary: '#eeeeee',
      },
    },
  });