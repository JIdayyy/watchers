import { ThemeOverride } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
    styles: {
        global: (props) => ({
            body: {
                bg: mode("#F5F5F5", "black")(props),
            },
            h1: {
                fontWeight: "bold",
                fontSize: "32px",
                fontFamily: "sans-serif",
                marginTop: 5,
                marginBottom: 1,
            },
            a: {
                color: "blue",
            },
            h2: {
                fontWeight: "bold",
                fontSize: "24px",
                fontFamily: "sans-serif",
                marginTop: 10,
                marginBottom: 2,
            },
            h3: {
                fontWeight: "bold",
                fontSize: "18px",
                fontFamily: "sans-serif",
                marginTop: 10,
                marginBottom: 2,
            },
            h4: {
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "sans-serif",
                marginTop: 10,
                marginBottom: 2,
            },
            p: {
                fontsize: "24px",
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
                rounded: "5px",
                borderRadius: "10px",
                width: "full",
            },
            code: {
                borderRadius: "10px",
                fontSize: "12px",
            },
            ol: {
                marginLeft: "20px",
            },
            ul: {
                marginLeft: "20px",
            },
        }),
    },
} as GlobalStyles;
