/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    BoxProps,
    Flex,
    FlexProps,
    ThemingProps,
    useStyleConfig,
} from "@chakra-ui/react";
import { ForwardedRef } from "react";

type TProps = FlexProps & ThemingProps & { ref?: ForwardedRef<HTMLDivElement> };

export default function CustomFlex(props: TProps): JSX.Element {
    const { variant, ...rest } = props;

    const styles = useStyleConfig("Box", { variant });

    return <Flex __css={styles} {...rest} />;
}
