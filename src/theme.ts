import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#0b1220",
            paper: "#0f1b2d",
        },
        primary: { main: "#38bdf8" },
        secondary: { main: "#22d3ee" },
        text: {
            primary: "#e6edf3",
            secondary: "#9fb0c3",
        },
    },
    shape: { borderRadius: 18 },
    typography: {
        fontFamily: "Inter, system-ui, sans-serif",
        h2: { fontWeight: 800, letterSpacing: "-0.02em" },
        h4: { fontWeight: 700 },
        body1: { lineHeight: 1.65 },
    },
});