import React from "react";
import Box from "@mui/material/Box";

// --------------------- MAIN COMPONENT ---------------------
const BoardContent = () => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#7d5fff"),
                    width: "100%",
                    height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Board Content
            </Box>
        </>
    );
};

export default BoardContent;
