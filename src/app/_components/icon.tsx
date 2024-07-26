import { HStack, Link, Stack } from "@chakra-ui/react";
import { FaSquareWhatsapp, FaSquareInstagram, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { IoPawSharp } from "react-icons/io5";
import NextLink from "next/link";
import { TextIndex } from "./text";


interface IconCardProps {
    opacity?: number
}

export function IconCard({ opacity }: IconCardProps) {
    return (
        <>
            <IoPawSharp size={"28px"} color="#CB4817" opacity={opacity} />
        </>
    )
}

export function IconSocial() {
    return (
        <Stack width={"20%"}>
            <Link as={NextLink} href={'https://web.whatsapp.com/'} isExternal={true}>
                <HStack>
                    <FaSquareWhatsapp size={"44px"} color="#FFFFFF" />
                    <TextIndex text={"(32) 9 XXXX-XXXX"} size={"20px"} color={"#FFFFFF"} />
                </HStack>
            </Link>
            <Link as={NextLink} href={'https://www.instagram.com/'} isExternal={true}>
                <HStack>
                    <FaSquareInstagram size={"44px"} color="#FFFFFF" />
                    <TextIndex text={"@familia_inu"} size={"20px"} color={"#FFFFFF"} />
                </HStack>
            </Link>
        </Stack>
    )
}

export function IconSocialCard() {
    return (
        <HStack
            // bg={"blue"}
            width={"50%"}
            justifyContent={"space-between"}
        >
            <Link as={NextLink} href={'https://web.whatsapp.com/'} isExternal={true}
                borderRadius={"50%"}
                border={"dashed"}
                borderColor={"#FFFFFF"}
                padding={2}
                justifyContent={"center"}
                alignItems={"center"}
                opacity={0.9}
            >
                <FaWhatsapp size={"44px"} color="#FFFFFF" />
            </Link>
            <Link as={NextLink} href={'https://www.instagram.com/'} isExternal={true}
                borderRadius={"50%"}
                border={"dashed"}
                borderColor={"#FFFFFF"}
                padding={2}
                justifyContent={"center"}
                alignItems={"center"}
                opacity={0.9}
            >
                <FaInstagram size={"44px"} color="#FFFFFF" />
            </Link>
            <Link as={NextLink} href={'https://www.instagram.com/'} isExternal={true}
                borderRadius={"50%"}
                border={"dashed"}
                borderColor={"#FFFFFF"}
                padding={2}
                justifyContent={"center"}
                alignItems={"center"}
                opacity={0.9}
            >
                <FaTiktok size={"44px"} color="#FFFFFF" />
            </Link>
        </HStack>
    )
}