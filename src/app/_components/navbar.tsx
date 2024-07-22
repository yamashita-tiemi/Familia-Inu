import { Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { TitleNavbar } from "./tittle";
import { ImageNavbar } from "./image";

export default function Navbar() {
    return(
        <HStack 
            // as={"navbar"}
            bg={"#A6AE4F"}
            width={"100%"}
            height={"100px"}
            justifyContent={"space-between"}
            paddingX={10}
        >
            <ImageNavbar src={"/logo.png"} alt={"Família Inu"} width={165} height={95}/>
            <Flex
                gap={"10"}
            >
                <Link as={NextLink} href='/'>
                    <TitleNavbar title={"Home"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/agenda'>
                    <TitleNavbar title={"Agenda"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/sobre'>
                    <TitleNavbar title={"Sobre"} size={"28px"} />
                </Link>
            </Flex>
            <Link as={NextLink} href='/login'>
                <TitleNavbar title={"Login"} size={"28px"} />
            </Link>
        </HStack>
    )
}