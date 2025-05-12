// import { createTheme } from "@mui/material/styles";
import { cyan, deepOrange, teal, orange } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
    // mode: "light",
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange,
            },
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange,
            },
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
