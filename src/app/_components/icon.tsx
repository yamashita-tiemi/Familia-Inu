import { Center, HStack, Link, Stack } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import NextLink from "next/link";
import { TextIndex } from "./text";

interface IconCardProps {
    opacity?: number;
}

export function IconCard({ opacity }: IconCardProps) {
    return (
        <>
        </>
    );
}

export function IconSocial() {
    return (
        <Stack width={"20%"}>
            <Link as={NextLink} href={'https://web.whatsapp.com/'} isExternal={true}>
                <HStack margin="0 auto">
                    <TextIndex margin="0 auto" text={"(32) 9 XXXX-XXXX"} size={"16px"} color={"#FFFFFF"} />
                </HStack>
            </Link>
            <Link as={NextLink} href={'https://www.instagram.com/'} isExternal={true}>
                <HStack>
                    <TextIndex margin="0 auto" text={"@familia_inu"} size={"16px"} color={"#FFFFFF"} />
                </HStack>
            </Link>
        </Stack>
    );
}

export function IconSocialCard() {
    return (
        <HStack
            width={"60%"}
            justifyContent={"space-around"}
        >
            <Link as={NextLink} href={'https://web.whatsapp.com/'} isExternal={true}
                borderRadius={"50%"}
                border={"dashed"}
                borderColor={"#CB4817"}
                padding={2}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <FaWhatsapp size={"44px"} color="#CB4817" />
            </Link>
            <Link as={NextLink} href={'https://www.instagram.com/'} isExternal={true}
                borderRadius={"50%"}
                border={"dashed"}
                borderColor={"#CB4817"}
                padding={2}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <FaInstagram size={"44px"} color="#CB4817" />
            </Link>
        </HStack>
    );
}