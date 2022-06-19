import React, { ReactElement } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Text } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface Props {
    errors: {
        [x: string]: FieldError;
    };
    name: string;
}

export default function InputError({ errors, name }: Props): ReactElement {
    return (
        <ErrorMessage
            errors={errors}
            name={name}
            render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                    <Text w="full" fontSize={12} color="red" key={type}>
                        {message}
                    </Text>
                ))
            }
        />
    );
}
