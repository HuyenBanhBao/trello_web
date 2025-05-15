// -------------------- IMPORT LIB --------------------
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
// --------------------- MAIN COMPONENTS -------------------------
const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <TextField
                    id="outlined-search"
                    label="Search..."
                    type="text"
                    size="small"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{
                        minWidth: "120px",
                        maxWidth: "180px",
                        "& label": {
                            color: "white",
                        },
                        "& input": {
                            color: "white",
                        },
                        "& label.Mui-focused": {
                            color: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                            },
                            "&:hover fieldset": {
                                borderColor: "white",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "white",
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "white" }} />
                            </InputAdornment>
                        ),
                        endAdornment: searchValue && (
                            <InputAdornment position="end" onClick={() => setSearchValue("")}>
                                <CloseIcon fontSize="small" sx={{ color: "white", cursor: "pointer" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </>
    );
};

export default Search;
