import { Box, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link";
import { TitleButton, TitleButtonTutorPet, TitleNavbar } from "./tittle";
import React from "react";

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
                    <TitleButton title={title} size={"20px"} />
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
                    <TitleButton title={title} size={"20px"} />
                </HStack>
            </Box>
        </Link>
    )
}

// interface ButtonModalProps {
//     title: string
//     onClick: Function
// }

// export function ButtonModal({ title, onClick }: ButtonModalProps) {
//     return (
//         <Button onClick={onClick} bg={"none"} _hover={"none"}>
//             <Box
//                 borderRadius={"16px"}
//                 color='offWhite'
//                 width={"100%"}
//             >
//                 <HStack justifyContent={"center"}>
//                     <TitleNavbar title={"Novo Membro"} size={'20px'} />
//                 </HStack>
//             </Box>
//         </Button>
//     )
// }

interface ButtonTutorPetProps {
    title: string
    href: string
    w?: string
    bg: string
    color: string
}

export function ButtonTutorPet({ title, href, w, bg, color }: ButtonTutorPetProps) {
    return (
        <Link
            as={NextLink}
            href={href}
            backgroundColor={bg}
            _hover={{ bg: "#F2933C" }}
            borderRadius={"10px"}
            width={w}
            paddingY={3}
            marginBottom={2}
            marginTop={10}
            minWidth={"100px"}
            border={"1px solid #CB4817"}
        >
            <Box
                as='button'
                width={"100%"}
            >
                <HStack justifyContent={"center"}>
                    <TitleButtonTutorPet title={title} size={"20px"} color={color} />
                </HStack>
            </Box>
        </Link>
    )
}