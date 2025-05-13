// import { createTheme } from "@mui/material/styles";
import { cyan, deepOrange, teal, orange } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
    // mode: "light",
    trello: {
        appBarHeight: "88px",
        boardBarHeight: "58px",
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange,
            },
            // spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange,
            },
            // spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        },
    },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: {
    //             body: {
    //                 transition: "all 0.3s linear",
    //             },
    //         },
    //     },
    // },
});

export default theme;
