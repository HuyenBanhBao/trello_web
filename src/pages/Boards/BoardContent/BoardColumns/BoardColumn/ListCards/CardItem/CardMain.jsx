import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// -------------------------- ICONS --------------------------
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ForumIcon from "@mui/icons-material/Forum";
// --------------------- DND KIT ---------------------
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// --------------------------------------------------------------------
// -------------------------- MAIN COMPONENT --------------------------
const CardMain = ({ card }) => {
    // -------------------------- FUNCTION --------------------------
    const showCardAction = () => {
        return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length;
    };

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: card._id,
        data: { ...card },
    });

    const dndKitCardStyles = {
        // touchAction: "none", // Dành cho sensor default dang PointerSSensor
        // Nếu sử dụng CSS.Transform như docs thì bị lỗi Stretch
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : undefined,
    };

    // -------------------------- RETURN --------------------------
    return (
        <>
            <Card
                ref={setNodeRef}
                style={dndKitCardStyles}
                {...attributes}
                {...listeners}
                sx={{
                    cursor: "pointer",
                    boxShadow: "0px 1px 10px  rgba(0,0,0,0.2)",
                    overflow: "unset",
                }}
            >
                {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                    <Typography>{card?.title}</Typography>
                </CardContent>
                {showCardAction() && (
                    <CardActions sx={{ p: "0 4px 8px 4px" }}>
                        {!!card?.memberIds?.length && (
                            <Button startIcon={<GroupIcon />} size="small">
                                {card?.memberIds?.length}
                            </Button>
                        )}
                        {!!card?.comments?.length && (
                            <Button startIcon={<ForumIcon />} size="small">
                                {card?.comments?.length}
                            </Button>
                        )}
                        {!!card?.attachments?.length && (
                            <Button startIcon={<AttachmentIcon />} size="small">
                                {card?.attachments?.length}
                            </Button>
                        )}
                    </CardActions>
                )}
            </Card>
        </>
    );
};

export default CardMain;
