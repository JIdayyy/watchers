import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
    variants: {
        action: (props) => ({
            bg: props.colorMode === "dark" ? "orange" : "blue.400",
            color: "white",
            _hover: {
                bg: "gray.200",
            },
        }),
        info: (props) => ({
            bg: props.colorMode === "dark" ? "#00BDF7" : "#4695FC",
            color: "white",
            fontWeight: "bold",
            _hover: {
                bg: "gray.200",
            },
        }),
        _disabled: (props) => ({
            bg: "black",
            color: props.colorMode === "dark" ? "white" : "black",
        }),
        disabled: (props) => ({
            bg: "black",
            color: props.colorMode === "dark" ? "white" : "black",
        }),

        delete: (props) => ({
            bg: props.colorMode === "dark" ? "red" : "red",
            color: "white",
            fontWeight: "bold",
            _hover: {
                bg: "gray.200",
            },
        }),
    },
};
export default Button;
