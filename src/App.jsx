import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material";

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
        <Button
            onClick={() => {
                setMode(mode === "dark" ? "light" : "dark");
            }}
        >
            {mode === "light" ? "Turn dark" : "Turn light"}
        </Button>
    );
}

function App() {
    return (
        <>
            <ModeToggle />
            <hr />
            <Typography variant="h4" component="div">
                Hello world
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Hello world
            </Typography>

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </>
    );
}

export default App;
