import { Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { TitleNavbar } from "./tittle";
import { ImageNavbar } from "./image";

export function Navbar() {
    return(
        <HStack 
            // as={"navbar"}
            bg={"#F9F3EC"}
            width={"100%"}
            height={"70px"}
            justifyContent={"space-between"}
            paddingX={10}
            position={"fixed"}
            zIndex={99}
        >
            <ImageNavbar src={"/logo.png"} alt={"Família Inu"} width={165} height={95}/>
            <Flex
                gap={"5"}
            >
                <Link as={NextLink} href='/' color="#A6AE4F">
                    <TitleNavbar color="#F2933C" title={"Home"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/agenda' color="#A6AE4F">
                    <TitleNavbar color="#F2933C" title={"Agenda"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/sobre' color="#A6AE4F">
                    <TitleNavbar color="#F2933C" title={"Sobre"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/hospedagensUsuario' color="#A6AE4F">
                    <TitleNavbar color="#F2933C" title={"Reservas"} size={"28px"} />
                </Link>
            </Flex>
            <Link as={NextLink} href='/login' color="#A6AE4F">
                <TitleNavbar color="#CB4817" title={"Login"} size={"28px"} />
            </Link>
        </HStack>
    )
}

export function NavbarAdmin() {
    return(
        <HStack 
            // as={"navbar"}
            bg={"#F9F3EC"}
            width={"100%"}
            height={"70px"}
            justifyContent={"space-between"}
            paddingX={10}
            position={"fixed"}
            zIndex={99}
        >
            <ImageNavbar src={"/logo.png"} alt={"Família Inu"} width={165} height={95}/>
            <Flex
                gap={"10"}
            >
                <Link as={NextLink} href='/' color="#A6AE4F">
                    <TitleNavbar color="" title={"Home"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/agenda' color="#A6AE4F">
                    <TitleNavbar color="" title={"Agenda"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/sobre' color="#A6AE4F">
                    <TitleNavbar color="" title={"Sobre"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/hospedagensUsuario' color="#A6AE4F">
                    <TitleNavbar color="" title={"Reservas"} size={"28px"} />
                </Link>
            </Flex>
            <Link as={NextLink} href='/perfil/tutor' color="#A6AE4F">
                <TitleNavbar color="" title={"Perfil"} size={"28px"} />
            </Link>
            {/* <Link as={NextLink} href='/cadastroPet' color="#A6AE4F">
                <TitleNavbar color="" title={"Pets"} size={"28px"} />
            </Link> */}
        </HStack>
    )
}