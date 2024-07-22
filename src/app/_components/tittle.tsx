import { Heading } from "@chakra-ui/react";

interface TitleNavbarProps {
    title: string
    size: string
}

export function TitleNavbar({ title, size }:TitleNavbarProps) {
    return(
        <Heading
            as="h3"
            fontSize={size}
            fontWeight={800}
            color={"#FFFFFF"}
        >
            {title}
        </Heading>
    )
}