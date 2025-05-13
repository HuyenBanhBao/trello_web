// --------------------- IMPORT FROM LIBRATORY ---------------------
import React from "react";
import Container from "@mui/material/Container";

// --------------------- IMPORT COMPONENTS ---------------------
// import AppBar from "../../components/AppBar";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
// --------------------- MAIN COMPONENT ---------------------
const Board = () => {
    return (
        <>
            <Container disableGutters maxWidth={false} sx={{ height: "100vh", backgroundColor: "primary.main" }}>
                <AppBar />
                <BoardBar />
                <BoardContent />
            </Container>
        </>
    );
};

export default Board;
