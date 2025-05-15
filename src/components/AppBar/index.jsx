import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// --------------------- IMPORT ICONS -------------------------
import AppIcon from "@mui/icons-material/Apps";
import Trello from "@mui/icons-material/ViewKanban";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
// --------------------- IMPORT COMPONENTS -------------------------
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Search from "./Menus/Search";
import ModeSelect from "../ModeSelect";
import BadgeContent from "./Menus/BadgeContent";
import Help from "./Menus/Help";
import Profile from "./Menus/Profile";

// --------------------- MAIN COMPONENTS -------------------------
const AppBar = () => {
    return (
        <>
            <Box
                px={{ xs: 1, md: 2 }}
                sx={{
                    width: "100%",
                    height: (theme) => theme.trello.appBarHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    overflowX: "auto",
                    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#2c3e50" : "#7158e2"),
                }}
            >
                {/*  */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: { xs: 0.5, md: 2 },
                    }}
                >
                    {/* ------------------------- MENU BAR ------------------------- */}
                    <AppIcon sx={{ color: "white", width: "30px", height: "30px" }} />
                    {/* ------------------------- AVATAR ------------------------- */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: { md: 0.5 },
                        }}
                    >
                        <Trello sx={{ color: "white", width: "30px", height: "30px" }} />
                        <Typography
                            variant="span"
                            sx={{
                                display: "inline-block",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            Trello
                        </Typography>
                    </Box>
                    {/* ------------------------- SEARCH ------------------------- */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                        <Workspaces />
                        <Recent />
                        <Starred />
                        <Templates />
                        <Button
                            sx={{ color: "white", border: "none", "&:hover": { border: "none" } }}
                            variant="outlined"
                            startIcon={<LibraryAddIcon />}
                        >
                            Create
                        </Button>
                    </Box>
                </Box>

                {/* ------------------------- MODE SELECT ------------------------- */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Search />
                    <ModeSelect />
                    <BadgeContent />
                    <Help />
                    <Profile />
                </Box>
            </Box>
        </>
    );
};

export default AppBar;
