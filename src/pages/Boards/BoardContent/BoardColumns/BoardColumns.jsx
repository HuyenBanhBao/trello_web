import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BoardColumn from "./BoardColumn/BoardColumn";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

// ---------------------------------- MAIN COMPONENT ---------------------
const BoardColumns = () => {
    return (
        <>
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
                <BoardColumn />
                <BoardColumn />

                {/* -------------------- ADD NEW COLUMN -------------------- */}
                <Box
                    sx={{
                        minWidth: "300px",
                        maxWidth: "300px",
                        bgcolor: "#ffffff3d",
                        ml: 2,
                        height: "fit-content",
                        borderRadius: "6px",
                    }}
                >
                    <Button
                        startIcon={<LibraryAddIcon />}
                        sx={{
                            color: (theme) => theme.trello.primaryColorTextBar,
                            p: 1,
                            ml: 2,
                            width: "100%",
                            justifyContent: "flex-start",
                        }}
                    >
                        Add new column
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default BoardColumns;
