// ---------------------- IMPORT LIB ----------------------
import React from "react";
import Box from "@mui/material/Box";
// --------------------- IMPORT COMPONENTS ---------------------
import BoardColumns from "./BoardColumns/BoardColumns";
// -------------------- IMPORT UTILS ---------------------
import { mapOrder } from "~/utils/sorts";
// --------------------- MAIN COMPONENT ---------------------
const BoardContent = ({ board }) => {
    // --------------------- FUNCTION ---------------------
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");

    // --------------------- RETURN ---------------------
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
                {/* <BoardColumns columns={board?.columns} /> */}
                <BoardColumns columns={orderedColumns} />
            </Box>
        </>
    );
};

export default BoardContent;
