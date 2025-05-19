// ---------------------- IMPORT LIB ----------------------
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// --------------------- IMPORT COMPONENTS ---------------------
import BoardColumns from "./BoardColumns/BoardColumns";
import BoardColumn from "./BoardColumns/BoardColumn/BoardColumn";
import CardMain from "./BoardColumns/BoardColumn/ListCards/CardItem/CardMain";
// -------------------- IMPORT UTILS ---------------------
import { mapOrder } from "~/utils/sorts";
// --------------------- DND KIT ---------------------
import {
    DndContext,
    PointerSensor,
    useSensors,
    useSensor,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
// ----------------------------------------------------------
const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
// --------------------- MAIN COMPONENT ---------------------
const BoardContent = ({ board }) => {
    // --------------------- STATE ---------------------
    const [orderedColumns, setOrderedColumns] = useState([]);
    // Cùng một lúc chỉ có 1 column hoặc card được kéo thả
    const [activeDragItemId, setActiveDragItemId] = useState(null);
    const [activeDragItemType, setActiveDragItemType] = useState(null);
    const [activeDragItemData, setActiveDragItemData] = useState(null);

    // -------------------------------------------------
    // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
    // Yêu cầu chuột di chuyển ít nhất 10px thì mới gọi event. Tránh trường hợp gọi hàm khi click chuột vào column
    const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });
    // Nhấn giữ 250ms và dung sai của cảm ừng thì mới kích hoạt event
    const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 500 } });
    // const mySensors = useSensors(pointerSensor);
    const mySensors = useSensors(mouseSensor, touchSensor);
    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
    }, [board]);

    // Trigger khi bắt đầu kéo một phần tử
    const handleDragStart = (event) => {
        setActiveDragItemId(event?.active?.id);
        setActiveDragItemType(
            event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN
        );
        setActiveDragItemData(event?.active?.data?.current);
    };
    // Trigger khi kết thúc hành động kéo một phần tử (Hành động thả)
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!active || !over) return; // check: if active and over are null -> return
        if (active.id !== over.id) {
            // check: if active and over are not equal -> return
            const oldIndex = orderedColumns.findIndex((c) => c._id === active.id); // index of the column to be moved (Vị trí của phần tử cần di chuyển)
            const newIndex = orderedColumns.findIndex((c) => c._id === over.id); // index of the column to be moved to (Vị trí đích nơi phần tử sẽ được chuyển đến)
            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
            // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
            // console.log("dndOrderedColumnsIds: ", dndOrderedColumnsIds);
            // console.log("dndOrderedColumns: ", dndOrderedColumns);
            setOrderedColumns(dndOrderedColumns);
        }
        setActiveDragItemId(null);
        setActiveDragItemType(null);
        setActiveDragItemData(null);
    };

    const dropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: {
                    opacity: "0.5",
                },
            },
        }),
    };

    // ----------------------------------------- RETURN -----------------------------------------
    return (
        <>
            <DndContext sensors={mySensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
                    <DragOverlay dropAnimation={dropAnimation}>
                        {!activeDragItemType && null}
                        {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
                            <BoardColumn column={activeDragItemData} />
                        )}
                        {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && <CardMain card={activeDragItemData} />}
                    </DragOverlay>
                </Box>
            </DndContext>
        </>
    );
};

export default BoardContent;
