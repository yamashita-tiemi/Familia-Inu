import { HStack, Stack } from "@chakra-ui/react";
import { ArticleIndexPrimary } from "./article";
import { TitleSection } from "./tittle";
import { Image } from "./image";

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
            <TitleSection title={"Família Inu"} size={"42px"}></TitleSection>
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