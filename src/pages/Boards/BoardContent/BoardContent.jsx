// ---------------------- IMPORT LIB ----------------------
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// --------------------- IMPORT COMPONENTS ---------------------
import BoardColumns from "./BoardColumns/BoardColumns";
// -------------------- IMPORT UTILS ---------------------
import { mapOrder } from "~/utils/sorts";
// --------------------- DND KIT ---------------------
import { DndContext, PointerSensor, useSensors, useSensor, MouseSensor, TouchSensor } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
// ----------------------------------------------------------
// --------------------- MAIN COMPONENT ---------------------
const BoardContent = ({ board }) => {
    const [orderedColumns, setOrderedColumns] = useState([]);
    // --------------------- FUNCTION ---------------------

    // https://docs.dndkit.com/api-documentation/sensors
    // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
    // Yêu cầu chuột di chuyển ít nhất 10px thì mới gọi event. Tránh trường hợp gọi hàm khi click chuột vào column
    const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });
    // Nhấn giữ 250ms và dung sai của cảm ừng thì mới kích hoạt event
    const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 500 } });

    // const mySensors = useSensors(pointerSensor);
    const mySensors = useSensors(mouseSensor, touchSensor);
    //
    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
    }, [board]);

    // --------------------- Function handle drag end ---------------------
    const handleDragEnd = (event) => {
        console.log(event);

        const { active, over } = event;

        // check: if active and over are null -> return
        if (!active || !over) return;

        // check: if active and over are not equal -> return
        if (active.id !== over.id) {
            //
            const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
            // index of the column to be moved (Vị trí của phần tử cần di chuyển)
            const newIndex = orderedColumns.findIndex((c) => c._id === over.id);
            // index of the column to be moved to (Vị trí đích nơi phần tử sẽ được chuyển đến)
            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
            // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
            // console.log("dndOrderedColumnsIds: ", dndOrderedColumnsIds);
            // console.log("dndOrderedColumns: ", dndOrderedColumns);

            setOrderedColumns(dndOrderedColumns);
        }
    };
    // --------------------- RETURN ---------------------
    return (
        <>
            <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
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
            </DndContext>
        </>
    );
};

export default BoardContent;
