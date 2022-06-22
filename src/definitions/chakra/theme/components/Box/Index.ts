import { ComponentStyleConfig } from "@chakra-ui/react";

const Box: ComponentStyleConfig = {
    baseStyle: (props) => ({
        flexDirection: "column",
        bg: props.colorMode === "dark" ? "#171717" : "#FFFFFF",
    }),
    variants: {
        rounded: (props) => ({
            borderRadius: 12,
            bg: props.colorMode === "light" ? "#FFFFFF" : "#FFFFFF",
        }),
        smooth: {
            padding: 6,
            borderRadius: "base",
            boxShadow: "md",
        },
        navBar: (props) => ({
            bg: props.colorMode === "light" ? "#FFFFFF" : "#FFFFFF",
        }),
        solid: (props) => ({
            bg: props.colorMode === "dark" ? "#171717" : "#FFFFFF",
        }),
    },
    // The default variant value
    defaultProps: {
        variant: "solid",
    },
};

export default Box;
