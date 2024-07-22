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

interface TitleSectionProps {
    title: string
    size: string
}

export function TitleSection ({ title, size}:TitleSectionProps) {
    return(
        <Heading
            as="h3"
            fontSize={size}
            fontWeight={800}
            color={"#FFFFFF"}
            textShadow='1px 2px 8px #F2933C'
        >
            {title}
        </Heading>
    )
}