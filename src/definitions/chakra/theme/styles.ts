import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
    styles: {
        global: {
            h1: {
                fontWeight: "bold",
                fontSize: "24px",
                fontFamily: "sans-serif",
            },
            h2: {
                fontWeight: "bold",
                fontSize: "24px",
                fontFamily: "sans-serif",
            },
            p: {
                fontsize: "12px",
                fontFamily: "sans-serif",
            },
            iframe: {
                aspectRatio: "16/9",
                width: "full",
                rounded: "10px",
                marginY: "30px",
            },
            img: {
                marginY: "30px",
            },
            blockquote: {
                paddingX: 1,
                paddingY: 2,
                fontSize: "12px",
                fontStyle: "italic",
                rounded: "10px",
            },
            pre: {
                marginY: "30px",
                rounded: "10px",
                borderRadius: "10px",
                width: "full",
            },
            code: {
                borderRadius: "10px",
            },
        },
    },
} as GlobalStyles;
