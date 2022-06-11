import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
    styles: {
        global: {
            h1: {
                fontWeight: "bold",
                fontSize: "24px",
            },
            h2: {
                fontWeight: "bold",
                fontSize: "24px",
            },
            p: {
                fontsize: "12px",
            },
            iframe: {
                aspectRatio: "16/9",
                width: "full",
                rounded: "10px",
                marginY: "30px",
            },
        },
    },
} as GlobalStyles;
