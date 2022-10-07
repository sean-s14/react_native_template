import { defaultTheme } from "./defaultTheme";

const lightTheme = {
    ...defaultTheme,
    mode: "light",
    PRIM_BGC: {
        LIGHT: '#B5DAFF',
        MAIN: '#8EC5FC',
        DARK: '#70B7FF',
    },
    SEC_BGC: {
        LIGHT: '#FFF',
        MAIN: '#FFF',
        DARK: '#FFF',
    },
    PRIM_TXT: {
        MUTED: "#777",
        LIGHT: '#333',
        MAIN: '#333',
        DARK: '#333',
    },
    SEC_TXT: {
        MUTED: "#DDD",
        LIGHT: '#FFF',
        MAIN: '#FFF',
        DARK: '#FFF',
    },
    GRADIENT_1_A: "#FFF",
    GRADIENT_1_B: "#FFF",
    // GRADIENT_1_A: "rgba(142, 197, 252, 0.75)",
    // GRADIENT_1_B: "#E0C3FC",
    SEVERITY: {
        SUCCESS: {
            LIGHT: "#009688",
            MAIN: "#b2dfdb",
            DARK: "#004d40",
        },
        INFO: {
            LIGHT: "#b3e5fc",
            MAIN: "#03a9f4",
            DARK: "#01579b",
        },
        WARNING: {
            LIGHT: "#fff9c4",
            MAIN: "#ffee58",
            DARK: "#fbc02d",
        },
        DANGER: {
            LIGHT: "#ffcdd2",
            MAIN: "#f44336",
            DARK: "#b71c1c",
        }
    }
}

export { lightTheme };