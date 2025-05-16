import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// --------------------- MAIN COMPONENTS -------------------------
const CardsItem = () => {
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
                    <Typography>Card 01</Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default CardsItem;
