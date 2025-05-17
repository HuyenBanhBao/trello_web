import React from "react";
import Box from "@mui/material/Box";
// --------------------- IMPORT COMPONENTS ---------------------
import CardsMain from "./CardItem/CardMain";
// --------------------- MAIN COMPONENT ---------------------
const ListCards = () => {
    return (
        <>
            <Box
                sx={{
                    p: "0 5px",
                    m: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 1,
                    overflowX: "hidden",
                    overflowY: "auto",
                    maxHeight: (theme) => `calc(${theme.trello.cardsHeight} - ${theme.spacing(5)})`,
                    "&::-webkit-scrollbar-thumb": {
                        background: (theme) =>
                            theme.palette.mode === "dark" ? "rgba(78, 78, 78, 0.5)" : "rgba(189, 195, 199, 0.5)",
                        borderRadius: "99px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        background: (theme) =>
                            theme.palette.mode === "dark" ? "rgba(78, 78, 78, 0.8)" : "rgba(189, 195, 199, 0.8)",
                    },
                }}
            >
                {/* --------------------- CARD MAIN --------------------- */}
                <CardsMain />
                {/* ----------------------- CARD ITEMS ---------------------- */}
                <CardsMain temporaryHideMedia />
                <CardsMain temporaryHideMedia />
                <CardsMain temporaryHideMedia />
            </Box>
        </>
    );
};

export default ListCards;
