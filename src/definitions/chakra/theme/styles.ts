import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
    styles: {
        global: {
            h1: {
                fontWeight: 500,
                fontSize: "80px",
            },
            p: {},
        },
    },
} as GlobalStyles;
