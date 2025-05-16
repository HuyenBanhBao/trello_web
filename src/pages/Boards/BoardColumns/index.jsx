import React from "react";
import Box from "@mui/material/Box";

// --------------------- IMPORT COMPONENTS ---------------------
import CardsItem from "~/components/Cards/CardsItem";
import CardsMain from "~/components/Cards/CardsMain";
import HeaderCard from "~/components/Cards/HeaderCard";
import FooterCard from "~/components/Cards/FooterCard";

// --------------------- MAIN COMPONENT ---------------------
const BoardColumns = () => {
    return (
        <>
            <Box
                sx={{
                    minWidth: "300px",
                    maxWidth: "300px",
                    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#333643" : "#ebecf0"),
                    ml: 2,
                    borderRadius: "6px",
                    height: "fit-content",
                    maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
                }}
            >
                {/* --------------- HEADER --------------- */}
                <HeaderCard />
                {/* --------------- BODY --------------- */}
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
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                    <CardsItem />
                </Box>
                {/* --------------- FOOTER --------------- */}
                <FooterCard />
            </Box>
        </>
    );
};

export default BoardColumns;
