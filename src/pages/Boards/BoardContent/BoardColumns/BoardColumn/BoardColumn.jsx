import React from "react";
import Box from "@mui/material/Box";
// --------------------- IMPORT COMPONENTS ---------------------
import HeaderCard from "./ListCards/CardItem/HeaderCard";
import ListCards from "./ListCards/ListCards";
import FooterCard from "./ListCards/CardItem/FooterCard";
// -------------------- IMPORT UTILS ---------------------
import { mapOrder } from "~/utils/sorts";
// --------------------- DND KIT ---------------------
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// ----------------------------------------------------------
// --------------------- MAIN COMPONENT ---------------------
const BoardColumn = ({ column }) => {
    // --------------------- FUNCTION ---------------------
    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: column._id,
        data: { ...column },
    });

    const dndKitColumnStyles = {
        touchAction: "none", // Dành cho sensor default dang PointerSSensor
        // Nếu sử dụng CSS.Transform như docs thì bị lỗi Stretch
        transform: CSS.Translate.toString(transform),
        transition,
    };
    // --------------------- RETURN ---------------------
    return (
        <>
            <Box
                ref={setNodeRef}
                style={dndKitColumnStyles}
                {...attributes}
                {...listeners}
                sx={{
                    minWidth: { xs: "100px", sm: "300px" },
                    maxWidth: { xs: "100px", sm: "300px" },
                    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#333643" : "#ebecf0"),
                    ml: 2,
                    borderRadius: "6px",
                    height: "fit-content",
                    maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,

                    WebkitTapHighlightColor: "transparent",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
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
