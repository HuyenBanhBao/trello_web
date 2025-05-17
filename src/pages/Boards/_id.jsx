// --------------------- IMPORT FROM LIBRATORY ---------------------
import React from "react";
import Container from "@mui/material/Container";

// --------------------- IMPORT COMPONENTS ---------------------
// import AppBar from "../../components/AppBar";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
// --------------------- APIS ---------------------
import { mockData } from "~/apis/mock-data";
// --------------------- MAIN COMPONENT ---------------------
const Board = () => {
    return (
        <>
            <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
                <AppBar />
                <BoardBar board={mockData.board} />
                <BoardContent board={mockData.board} />
            </Container>
        </>
    );
};

export default Board;
