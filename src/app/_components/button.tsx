import { Box, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link";
import { TitleButton, TitleNavbar } from "./tittle";

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
            _hover={{ bg: "#F2933C" }} 
            borderRadius={"10px"}
            color={"#FFFFFF"}
            width={w}
            paddingY={3}
            marginBottom={2}
            marginTop={10}
            minWidth={"100px"}
        >
            <Box
                as='button'
                width={"100%"}
            >
                <HStack justifyContent={"center"}>
                    <TitleButton title={title} size={"20px"}/>
                </HStack>
            </Box>
        </Link>
    )
}

interface ButtonPerfilProps {
    title: string
    href: string
    w?: string
}

export function ButtonPerfil({ title, href, w }: ButtonPerfilProps) {
    return (
        <Link
            as={NextLink}
            href={href}
            backgroundColor={"#CB4817"}
            _hover={{ bg: "#F2933C" }} 
            borderRadius={"5px"}
            color={"#FFFFFF"}
            width={w}
            paddingY={3}
            // marginBottom={2}
            // marginTop={10}
            minWidth={"100px"}
            height={"100%"}
        >
            <Box
                as='button'
                width={"100%"}
            >
                <HStack justifyContent={"center"}>
                    <TitleButton title={title} size={"20px"}/>
                </HStack>
            </Box>
        </Link>
    )
}