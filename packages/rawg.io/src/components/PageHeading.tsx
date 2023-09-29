import { Heading } from "@chakra-ui/react";
import React from "react";

type PageHeadingProps = {
    children: React.ReactNode;
};

export const PageHeading = ({ children }: PageHeadingProps) => {
    return (
        <Heading as={"h2"} fontSize={"72px"} fontWeight={700}>
            {children}
        </Heading>
    );
};
