import React from "react";
import Box from "@mui/material/Box";

// --------------------- IMPORT COMPONENTS ---------------------
import HeaderCard from "./ListCards/CardItem/HeaderCard";
import ListCards from "./ListCards/ListCards";
import FooterCard from "./ListCards/CardItem/FooterCard";
// -------------------- IMPORT UTILS ---------------------
import { mapOrder } from "~/utils/sorts";
// --------------------- MAIN COMPONENT ---------------------
const BoardColumn = ({ column }) => {
    // --------------------- FUNCTION ---------------------
    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");

    // --------------------- RETURN ---------------------
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
                <HeaderCard column={column} />
                {/* --------------- BODY --------------- */}
                <ListCards cards={orderedCards} />
                {/* --------------- FOOTER --------------- */}
                <FooterCard />
            </Box>
        </>
    );
};

export default BoardColumn;
