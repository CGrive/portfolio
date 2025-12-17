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
        divider: "rgba(255,255,255,0.08)",
    },

    shape: {
        borderRadius: 10,
    },

    typography: {
        fontFamily: "Poppins, Inter, system-ui, sans-serif",
        h2: {
            fontWeight: 800,
            letterSpacing: "-0.02em",
        },
        h4: {
            fontWeight: 700,
        },
        body1: {
            lineHeight: 1.65,
        },
        button: {
            textTransform: "none",
            fontWeight: 500,
        },
    },

    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
                outlined: {
                    borderColor: "rgba(255,255,255,0.1)",
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    borderRadius: 10,
                },
            },
        },

        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 999,
                },
                outlined: {
                    borderColor: "rgba(255,255,255,0.15)",
                    "&:hover": {
                        borderColor: "#38bdf8",
                        backgroundColor: "rgba(56,189,248,0.08)",
                    },
                },
                contained: {
                    "&:hover": {
                        backgroundColor: "#38bdf8",
                    },
                },
            },
        },

        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundImage: "none",
                    borderRadius: 10,
                },
            },
        },

        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: "#0f1b2d",
                    color: "#e6edf3",
                    fontSize: "0.75rem",
                },
                arrow: {
                    color: "#0f1b2d",
                },
            },
        },
    },
});
