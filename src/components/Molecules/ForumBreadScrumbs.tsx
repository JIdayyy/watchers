import React, { useEffect, useState } from "react";
import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ForumBreadScrumbs(): JSX.Element {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [breadcrumbs, setBreadcrumbs] = useState<
        {
            breadcrumb: string;
            href: string;
        }[]
    >([]);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split("/");
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {
                    breadcrumb: path,
                    href: "/" + linkPath.slice(0, i + 1).join("/"),
                };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            w="full"
            h="50px"
            bg={colorMode === "light" ? "white" : "gray.800"}
        >
            <Breadcrumb maxW="7xl" w="full">
                {breadcrumbs?.map((breadcrumb) => (
                    <BreadcrumbItem>
                        <BreadcrumbLink href={breadcrumb.href}>
                            {breadcrumb.breadcrumb}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </Flex>
    );
}
