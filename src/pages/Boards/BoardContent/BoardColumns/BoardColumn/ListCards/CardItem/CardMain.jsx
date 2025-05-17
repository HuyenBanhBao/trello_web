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
// -------------------------- MAIN COMPONENT --------------------------

const CardMain = ({ temporaryHideMedia }) => {
    if (temporaryHideMedia) {
        return (
            <>
                <Card
                    sx={{
                        cursor: "pointer",
                        boxShadow: "0px 1px 10px  rgba(0,0,0,0.2)",
                        overflow: "unset",
                    }}
                >
                    <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                        <Typography>TunDev Test</Typography>
                    </CardContent>
                </Card>
            </>
        );
    }

    return (
        <>
            <Card
                sx={{
                    cursor: "pointer",
                    boxShadow: "0px 1px 10px  rgba(0,0,0,0.2)",
                    overflow: "unset",
                }}
            >
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://plus.unsplash.com/premium_photo-1725400833844-002996739d10?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHpvb3xlbnwwfHwwfHx8MA%3D%3D"
                    title="green iguana"
                />
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                    <Typography>TunDev Fullstack</Typography>
                </CardContent>
                <CardActions sx={{ p: "0 4px 8px 4px" }}>
                    <Button startIcon={<GroupIcon />} size="small">
                        20
                    </Button>
                    <Button startIcon={<ForumIcon />} size="small">
                        15
                    </Button>
                    <Button startIcon={<AttachmentIcon />} size="small">
                        20
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default CardMain;
