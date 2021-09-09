import { createTheme, responsiveFontSizes } from "@material-ui/core";

// implement custom theming here
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#55bfde",
        light: "#89d0e4",
        dark: "#16718c",
      },
      secondary: {
        main: "#c5406b",
        light: "#ea6d96",
        dark: "#b32856",
      },
      grey: {
        100: "#F9FAFB",
        200: "#F4F6F8",
        300: "#DFE3E8",
        400: "#C4CDD5",
        500: "#919EAB",
        600: "#8391a0",
        700: "#454F5B",
        800: "#212B36",
        900: "#161C24",
      },
      text: {
        disabled: "#637381",
        secondary: "#C4CDD5",
        primary: "#ffffff",
      },
      background: {
        paper: "#212B36",
        default: "#161C24",
      },
    },
    typography: {
      fontFamily: "Poppins",

      h1: {
        fontSize: "3.6rem",
        fontWeight: 600,
        lineHeight: 1.25,
      },
      h2: {
        fontSize: "2.7rem",
        fontWeight: 600,
        lineHeight: 1.33,
      },
      h3: {
        lineHeight: 1.5,
        fontWeight: 600,
        fontSize: "1.8rem",
      },
      h4: {
        fontSize: "1.6rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.2rem",
        lineHeight: 1.51,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.1rem",
        lineHeight: 1.55,
      },
      subtitle1: {
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: 0.9,
      },
      subtitle2: {
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body1: {
        fontWeight: 500,
      },
      body2: {
        fontWeight: 400,
        lineHeight: 1.57,
        letterSpacing: 0.9,
      },
      caption: {
        fontWeight: 500,
        lineHeight: 1.5,
      },
      overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        textTransform: "uppercase",
      },
      button: {
        fontWeight: 500,
        lineHeight: 1.71,
        textTransform: "capitalize",
        fontSize: "0.875rem",
        letterSpacing: 0.9,
      },
    },
  })
);

export default theme;
