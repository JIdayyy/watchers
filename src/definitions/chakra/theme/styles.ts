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
            img: {
                marginY: "30px",
            },
            blockquote: {
                paddingX: 1,
                paddingY: 2,
                fontSize: "12px",
                backgroundColor: "gray.200",
                fontStyle: "italic",
                rounded: "10px",
            },
            pre: {
                marginY: "30px",
                rounded: "10px",
                borderRadius: "10px",
                overflow: "hidden",
                width: "full",
                backgroundColor: "transparent",
            },
        },
    },
} as GlobalStyles;
