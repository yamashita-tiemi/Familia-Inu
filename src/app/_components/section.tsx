import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Stack } from "@chakra-ui/react";
import { ArticleDaily, ArticleIndexPrimary } from "./article";
import { TitleCard, TitlePage, TitleSection } from "./tittle";
import { Image } from "./image";
import { CardReview } from "./card";
import { IconCard, IconSocialCard } from "./icon";
import { Text, TextCard } from "./text";
import { AccordionItemCard } from "./accordion";

export function SectionIndexPrimary() {
    return (
        <Stack
            as="section"
            bg={"#A6AE4F"}
            width={"100%"}
            height={"720px"}
            paddingX={20}
            paddingBottom={10}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"70px"}
        >
            <TitlePage title={"Família Inu"} size={"42px"} color={"#FFFFFF"} />
            <HStack
                // bg={"black"}
                width={"100%"}
                paddingTop={12}
                justifyContent={"space-between"}
            >
                <ArticleIndexPrimary
                    text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    text2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."}
                ></ArticleIndexPrimary>
                <Image src={"/imgIndex.png"} alt={"Vitória e Sayuri"} width={450} height={457} w="100%" align="flex-end" />
            </HStack>
        </Stack>
    )
}

export function SectionIndexReview() {
    return (
        <Stack
            as="section"
            width={"100%"}
            height={"700px"}
            paddingX={10}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <TitleSection title={"Avaliações"} size={"42px"} />
            <HStack
                width={"100%"}
                paddingTop={12}
                justifyContent={"space-between"}
            >
                <CardReview icon1={<IconCard />} icon2={<IconCard />} icon3={<IconCard />} icon4={<IconCard />} icon5={<IconCard />}
                    title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."}
                />
                <CardReview icon1={<IconCard />} icon2={<IconCard />} icon3={<IconCard />} icon4={<IconCard />} icon5={<IconCard opacity={0.5} />}
                    title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."}
                />
                <CardReview icon1={<IconCard />} icon2={<IconCard />} icon3={<IconCard />} icon4={<IconCard opacity={0.5} />} icon5={<IconCard opacity={0.5} />}
                    title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."}
                />
            </HStack>

        </Stack>
    )
}

export function SectionIndexDaily() { //precisa fazer o carossel
    return (
        <Stack
            as="section"
            width={"100%"}
            height={"700px"}
            paddingX={10}
            paddingBottom={10}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <TitleSection title={"Um pouco dos nossos dias"} size={"42px"} />
            <ArticleDaily src={"/daily_photos/sayuri.png"} alt={"Sayuri"} widthImg={1005} heightImg={372}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."}
            />
        </Stack>
    )
}

export function SectionAbout() {
    return (
        <Stack
            as="section"
            // bg={"pink"}
            width={"100%"}
            height={"720px"}
            paddingX={20}
            paddingBottom={10}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"70px"}
        >
            <TitlePage title={"Sobre"} size={"42px"} color={"#CB4817"} />
            <HStack
                // bg={"blue"}
                width={"90%"}
                height={"450px"}
                paddingTop={12}
                justifyContent={"space-between"}
            >
                <Stack
                    bg={"#F2933C"}
                    width={"45%"}
                    height={"100%"}
                    borderRadius={"16px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    paddingX={8}
                >
                    <TitleCard title={"Vitória Alexandre"} size={"32px"} />
                    <Text text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "} size={"24px"} color={"#FFFFFF"} w={"100%"} />
                </Stack>
                <Stack
                    bg={"#F2933C"}
                    width={"45%"}
                    height={"100%"}
                    borderRadius={"16px"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    paddingX={8}
                >
                    <TitleCard title={"Venha conhecer nosso trabalho!"} size={"28px"} />
                    <TitleCard title={"Entre em contato conosco"} size={"32px"} />
                    <IconSocialCard />
                </Stack>
            </HStack>
        </Stack>
    )
}

export function SectionFAQ() {
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
        >
            <TitleSection title={"Perguntas Frequentes"} size={"42px"} />

            <Accordion allowToggle
                width={"60%"}
                paddingTop={4}
            >
                <AccordionItemCard title={"Como faço para reservar uma hospedagem para meu pet?"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "}/>
                <AccordionItemCard title={"Quais tipos de animais vocês aceitam?"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "}/>
                <AccordionItemCard title={"Como é a alimentação dos pets durante a hospedagem?"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "}/>
                <AccordionItemCard title={"Meu pet tem necessidades especiais. Vocês podem acomodá-lo?"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "}/>
                <AccordionItemCard title={"Como posso entrar em contato em caso de emergência?"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "}/>
            </Accordion>
        </Stack>
    )
}