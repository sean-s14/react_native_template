import { Platform } from "react-native";

const defaults = {
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
    },
    typography: {
        fontFamily: '"Nunito_400Regular", "Roboto", "Helvetica", "Arial", sans-serif',
        htmlFontSize: 16,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: '"Nunito_400Regular", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "6rem",
            // lineHeight: 1.167,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: '"Nunito_400Regular", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "3.75rem",
            // lineHeight: 1.2,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontFamily: '"Nunito_400Regular", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: "3rem",
            // lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h4: {
            fontFamily: '"Nunito_400Regular", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: "2.125rem",
            // lineHeight: 1.235,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontFamily: '"Nunito_400Regular", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: "1.5rem",
            // lineHeight: 1.334,
            letterSpacing: '0em',
        },
        h6: {
            fontFamily: '"Nunito_400Regular", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: "1.25rem",
            // lineHeight: 1.6,
            letterSpacing: '0.0075em',
        },
    }
}

// const defaults = {
//     FONT_SIZES: {
//         XXS: 12,
//         XS: 16,
//         SM: 20,
//         MD: 24,
//         LG: 28,
//         XL: 32,
//         XL2: 36,
//         XL3: 40,
//         XL4: 44,
//         XL5: 48,
//         XL6: 52,
//         XL7: 56,
//         XL8: 60,
//     },
//     FONT_WEIGHTS: {
//         XLIGHT: "200",
//         LIGHT: "300",
//         REGULAR: "400",
//         SEMIBOLD: "600",
//         BOLD: "700",
//         EXTRABOLD: "800",
//         BLACK: "900",
//     },
//     FONT_FAMILY: {
//         XLIGHT: "Nunito_200ExtraLight",
//         LIGHT: "Nunito_300Light",
//         REGULAR: "Nunito_400Regular",
//         SEMIBOLD: "Nunito_600SemiBold",
//         BOLD: "Nunito_700Bold",
//         EXTRABOLD: "Nunito_800ExtraBold",
//         BLACK: "Nunito_900Black"
//     },
//     BTN: {
//         ...Platform.select({
//             web: {outlineStyle: "none"},
//         }),
//         width: 250,
//         height: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 8,
//         borderStyle: "solid",
//         borderColor: "#999",
//         borderWidth: 2,
//         borderBottomWidth: 4,
//     },
//     CENTER: {
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     COINS: "#fdd835",
//     PREMIUM: '#ba68c8',
// }

// defaults["INPUT"] = { 
//     ...defaults.BTN,
//     ...Platform.select({
//         web: {outlineStyle: "none"},
//     }),
//     fontSize: defaults.FONT_SIZES.MD,
//     textAlign: "center",
//     borderBottomWidth: 2,
//     borderRightWidth: 2,
// }

// const P = {
//     fontFamily: defaults.FONT_FAMILY.REGULAR,
//     fontWeight: defaults.FONT_WEIGHTS.REGULAR,
// }

// defaults["P"] = {
//     P1: {...P, fontSize: defaults.FONT_SIZES.LG},
//     P2: {...P, fontSize: defaults.FONT_SIZES.MD},
//     P3: {...P, fontSize: defaults.FONT_SIZES.SM},
//     P4: {...P, fontSize: defaults.FONT_SIZES.XS},
//     P5: {...P, fontSize: defaults.FONT_SIZES.XXS},
// }

// const H = {
//     fontFamily: defaults.FONT_FAMILY.BOLD,
//     fontWeight: defaults.FONT_WEIGHTS.BOLD,
// }

// defaults["H"] = {
//     H1: {...H, fontSize: defaults.FONT_SIZES.XL3},
//     H2: {...H, fontSize: defaults.FONT_SIZES.XL2},
//     H3: {...H, fontSize: defaults.FONT_SIZES.XL},
//     H4: {...H, fontSize: defaults.FONT_SIZES.LG},
//     H5: {...H, fontSize: defaults.FONT_SIZES.MD},
//     H6: {...H, fontSize: defaults.FONT_SIZES.SM},
//     H7: {...H, fontSize: defaults.FONT_SIZES.XS},
// }

// const PH = {
//     fontFamily: defaults.FONT_FAMILY.SEMIBOLD,
//     fontWeight: defaults.FONT_WEIGHTS.SEMIBOLD,
// }

// defaults["PH"] = {
//     PH1: {...PH, fontSize: defaults.FONT_SIZES.XL},
//     PH2: {...PH, fontSize: defaults.FONT_SIZES.LG},
//     PH3: {...PH, fontSize: defaults.FONT_SIZES.MD},
//     PH4: {...PH, fontSize: defaults.FONT_SIZES.SM},
//     PH5: {...PH, fontSize: defaults.FONT_SIZES.XS},
//     PH6: {...PH, fontSize: defaults.FONT_SIZES.XXS},
// }


export { defaults as defaultTheme };