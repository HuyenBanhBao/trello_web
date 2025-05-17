// ---------------------- IMPORT LIB ----------------------
import React from "react";
import Box from "@mui/material/Box";
// --------------------- IMPORT COMPONENTS ---------------------
import BoardColumns from "./BoardColumns/BoardColumns";
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
                <BoardColumns />
            </Box>
        </>
    );
};

export default BoardContent;
