import React from "react";

import { CssBaseline } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const themeColor = {
  palette: {
    mode: "dark",
    background: {
      paper: "#191c24",
      light: "#212530",
      default: "#101218",
    },
    primary: {
      main: "#2a2f3c",
      light: "#4a536d",
    },
  },
  shape: { borderRadius: 8 },
  typography: { htmlFontSize: 18.25, fontSize: 14 },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    // MuiListItemButton: {
    //   variants: [
    //     {
    //       props: { selected: true },
    //       style: {
    //         backgroundColor: "red",
    //       },
    //     },
    //   ],
    // },
  },
};

export default function ThemeLoader(props) {
  const theme = createTheme(themeColor);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

ThemeLoader.propTypes = {
  children: PropTypes.element,
};
