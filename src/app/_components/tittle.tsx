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

interface TitlePageProps {
    title: string
    size: string
    color: string
}

export function TitlePage ({ title, size, color }:TitlePageProps) {
    return(
        <Heading
            as="h2"
            fontSize={size}
            fontWeight={800}
            color={color}
            textShadow='1px 2px 8px #F2933C'
            textTransform={"uppercase"}
        >
            {title}
        </Heading>
    )
}

interface TitleSectionProps {
    title: string
    size: string
}

export function TitleSection ({ title, size }:TitleSectionProps) {
    return(
        <Heading
            as="h3"
            fontSize={size}
            fontWeight={800}
            color={"#CB4817"}
        >
            {title}
        </Heading>
    )
}

interface TitleButtonProps {
    title: string
    size: string
}

export function TitleButton({ title, size }:TitleButtonProps) {
    return(
        <Heading
            as="h4"
            fontSize={size}
            fontWeight={800}
            color={"#FFFFFF"}
            textTransform={"uppercase"}
        >
            {title}
        </Heading>
    )
}

interface TitleCardProps {
    title: string
    size: string
}

export function TitleCard({ title, size }:TitleCardProps) {
    return(
        <Heading
            as="h5"
            fontSize={size}
            fontWeight={600}
            color={"#FFFFFF"}
        >
            {title}
        </Heading>
    )
}