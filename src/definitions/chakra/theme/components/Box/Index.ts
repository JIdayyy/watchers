import { ComponentStyleConfig } from "@chakra-ui/react";

const Box: ComponentStyleConfig = {
    baseStyle: (props) => ({
        flexDirection: "column",
        bg: props.colorMode === "dark" ? "#171717" : "#F5F5F5",
    }),
    variants: {
        rounded: (props) => ({
            borderRadius: 12,
            bg: props.colorMode === "light" ? "#F5F5F5" : "#F5F5F5",
        }),
        smooth: {
            padding: 6,
            borderRadius: "base",
            boxShadow: "md",
        },
        navBar: (props) => ({
            bg: props.colorMode === "light" ? "#F5F5F5" : "#F5F5F5",
        }),
        solid: (props) => ({
            bg: props.colorMode === "dark" ? "#171717" : "#F4F6F8",
        }),
    },
    // The default variant value
    defaultProps: {
        variant: "solid",
    },
};

export default Box;
