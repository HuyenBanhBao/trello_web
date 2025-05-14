// import { createTheme } from "@mui/material/styles";
import { cyan, deepOrange, teal, orange } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
    // mode: "light",
    trello: {
        appBarHeight: "68px",
        boardBarHeight: "70px",
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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                // Name of the slot
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                    },
                    "& fieldset": {
                        borderWidth: "1px !important",
                    },
                }),
            },
        },
    },
});

export default theme;
