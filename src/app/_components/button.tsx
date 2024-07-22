import { Box, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link";
import { TitleNavbar } from "./tittle";

interface ButtonProps {
    title: string
    href: string
    w?: string
}

export function Button({ title, href, w }: ButtonProps) {
    return (
        <Link
            as={NextLink}
            href={href}
            backgroundColor={"#CB4817"}
            borderRadius={"16px"}
            color={"#FFFFFF"}
            width={w}
            paddingY={3}
            marginBottom={2}
            minWidth={"100px"}
        >
            <Box
                as='button'
                width={"100%"}
            >
                <HStack justifyContent={"center"}>
                    <TitleNavbar title={title} size={'24px'} />
                </HStack>
            </Box>
        </Link>
    )
}