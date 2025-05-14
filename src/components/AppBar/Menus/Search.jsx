// -------------------- IMPORT LIB --------------------
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// --------------------- MAIN COMPONENTS -------------------------
const Search = () => {
    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <TextField id="outlined-search" label="Search..." type="search" size="small" />
            </Box>
        </>
    );
};

export default Search;
