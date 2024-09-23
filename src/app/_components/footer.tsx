import { HStack, Stack } from "@chakra-ui/react";
import { ImageFooter } from "./image";
import { Text } from "./text";
import { TitleCard } from "./tittle";
import { IconSocial } from "./icon";

export default function Footer() {
    return(
        <HStack 
            as={"footer"}
            bg={"#A6AE4F"}
            width={"100%"}
            height={"100px"}
            justifyContent={"space-around"}
            paddingX={10}
            marginTop={10}
        >
            <ImageFooter src={"/logo_redonda.png"} alt={"Família Inu"} width={80} height={100}/>
            <Stack width={"50%"} justifyContent="space-around" >
                <TitleCard title={"Missão"} size={"12px"}/>
                <Text size={"20px"} color={"#FFFF"}
                align="justify" text={"Cuidando do seu pet com amor e dedicação!"} weight={400} />
                <Text  align="justify" size={"16px"} color={"#FFFF"}
                text={"© 2024 Familia Inu, todos os direitos reservados"} weight={300} />
            </Stack>
            <IconSocial></IconSocial>
        </HStack>
    )
}