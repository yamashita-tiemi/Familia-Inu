import { HStack, Stack } from "@chakra-ui/react";
import { ArticleIndexPrimary } from "./article";
import { TitleSection, TitleSectionReview } from "./tittle";
import { Image } from "./image";
import { CardReview } from "./card";
import { IconCard } from "./icon";

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
        >
            <TitleSection title={"Família Inu"} size={"42px"} color={"#FFFFFF"}></TitleSection>
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
                <Image src={"/imgIndex.png"} alt={"Vitória e Sayuri"} width={450} height={457} w="100%" align="flex-end"></Image>
            </HStack>
        </Stack>
    )
}

export function SectionIndexReview() {
    return (
        <Stack
            as="section"
            width={"100%"}
            height={"720px"}
            paddingX={10}
            paddingBottom={10}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <TitleSectionReview title={"Avaliações"} size={"42px"}></TitleSectionReview>
            <HStack
                width={"100%"}
                paddingTop={12}
                justifyContent={"space-between"}
            >
                <CardReview title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."} icon1={<IconCard/>} icon2={<IconCard/>} icon3={<IconCard/>} icon4={<IconCard/>} icon5={<IconCard opacity={0.5}/>}/>
                <CardReview title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."} icon1={<IconCard/>} icon2={<IconCard/>} icon3={<IconCard/>} icon4={<IconCard/>} icon5={<IconCard/>}/>
                <CardReview title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."} icon1={<IconCard/>} icon2={<IconCard/>} icon3={<IconCard/>} icon4={<IconCard opacity={0.5}/>} icon5={<IconCard opacity={0.5}/>}/>
            </HStack>
            
        </Stack>
    )
}