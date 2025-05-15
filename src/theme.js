// import { createTheme } from "@mui/material/styles";
// import { cyan, deepOrange, teal, orange } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
    // mode: "light",
    trello: {
        appBarHeight: "60px",
        boardBarHeight: "65px",
    },
    colorSchemes: {
        // light: {
        //     palette: {
        //         primary: teal,
        //         secondary: deepOrange,
        //     },
        //     // spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        // },
        // dark: {
        //     palette: {
        //         primary: cyan,
        //         secondary: orange,
        //     },
        //     // spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        // },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "*::-webkit-scrollbar": {
                        width: "6px",
                        height: "6px",
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(189, 195, 199, 0.5)",
                        borderRadius: "99px",
                    },
                    "*::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "white",
                    },
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderWidth: "0.5px",
                    "&:hover": {
                        borderWidth: "0.5px",
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    // color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                // Name of the slot
                root: ({ theme }) => ({
                    // color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                    // ".MuiOutlinedInput-notchedOutline": {
                    //     borderColor: theme.palette.primary.main,
                    // },
                    // "&:hover .MuiOutlinedInput-notchedOutline": {
                    //     borderColor: theme.palette.primary.main,
                    // },
                    "& fieldset": {
                        borderWidth: "1px !important",
                    },
                }),
            },
        },
    },
});

export default theme;
