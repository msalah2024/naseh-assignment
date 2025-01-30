import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0e213f",
        },
        secondary: {
            main: "#c1af6b",
        },
        text: {
            primary: "#0e213f",
        },
    },
});

export default theme;
