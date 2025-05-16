// ---------------------- IMPORT LIB ----------------------
import React from "react";
import Box from "@mui/material/Box";

// --------------------- IMPORT COMPONENTS ---------------------
import BoardColumns from "../BoardColumns";
// --------------------- MAIN COMPONENT ---------------------
const BoardContent = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    p: "10px 0",
                    height: (theme) => theme.trello.boardContentHeight,
                    background: (theme) =>
                        theme.palette.mode === "dark" ? theme.trello.gradientBgDark : theme.trello.gradientBg,
                }}
            >
                {/* --------------------- BOX COLUMNS ---------------------- */}

                <Box
                    sx={{
                        background: "inherit",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        overflowX: "auto",
                        overflowY: "hidden",
                        "&::-webkit-scrollbar-track": { m: 2 },
                    }}
                >
                    <BoardColumns />
                    <BoardColumns />
                    <BoardColumns />
                </Box>
            </Box>
        </>
    );
};

export default BoardContent;
