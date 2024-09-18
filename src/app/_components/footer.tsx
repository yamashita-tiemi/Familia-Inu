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
            height={"150px"}
            justifyContent={"space-between"}
            paddingX={10}
            marginTop={10}
        >
            <ImageFooter src={"/logo_redonda.png"} alt={"Família Inu"} width={90} height={100} w="10%"/>
            <Stack width={"50%"}>
                <TitleCard title={"Missão"} size={"18px"}/>
                <Text size={"20px"} color={"#FFFFFF"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque. "} w={""}                />
            </Stack>
            <IconSocial></IconSocial>
        </HStack>
    )
}