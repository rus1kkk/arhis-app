import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0032C9",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff6b35",
    },
    background: {
      default: "#0032C9",
      paper: "#ffffff",
    },
    orange: {
      main: "#E2A066",
      contrastText: "#ffffff",
    },
    green: {
      main: "#89CC37",
      contrastText: "#ffffff",
    },
    blue: {
      main: "#11BBCB",
      contrastText: "#ffffff",
    },
    darkblue: {
      main: "#006FFF",
      contrastText: "#ffffff",
    },
    outlined: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0032C9",
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
});

export default theme;
