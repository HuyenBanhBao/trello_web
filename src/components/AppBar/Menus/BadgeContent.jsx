import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

// --------------------- MAIN COMPONENTS -------------------------
const BadgeContent = () => {
    return (
        <>
            <Tooltip title="Notifications">
                <IconButton>
                    <Badge color="secondary" variant="dot">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
        </>
    );
};

export default BadgeContent;
