import { Stack } from "@chakra-ui/react"
import { Text, TextIndex } from "./text"
import { Button } from "./button"
import { ImageDaily } from "./image"

interface ArticleIndexPrimaryProps {
    text1: string
    text2: string
}

export function ArticleIndexPrimary({ text1, text2 }: ArticleIndexPrimaryProps) {
    return (
        <Stack
            // bg={"pink"}
            height={"100%"}
            justifyContent={"space-between"}
        >
            <Stack
                // bg={"blue"}
                as="article"
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                height={"55%"}
            >
                <TextIndex text={text1} size={"28px"} color={"#FFFFFF"} />
                <TextIndex text={text2} size={"28px"} color={"#FFFFFF"} />
            </Stack>
            <Button title={"Agende aqui"} href={"/agenda"} w="50%"></Button>
        </Stack>
    )
}

interface ArticleDailyProps {
    src: string
    alt: string
    widthImg: number
    heightImg: number
    text: string
}

export function ArticleDaily({ src, alt, widthImg, heightImg, text }:ArticleDailyProps) {
    return (
        <Stack
            paddingTop={10}
            width={"70%"}
            borderRadius={"16px"}
        >
            <ImageDaily src={src} alt={alt} width={widthImg} height={heightImg} w="100%"/>
            <Stack
                bg={"#CB4817"}
                width={"100%"}
                height={"80px"}
                position={"relative"}
                top={"-10px"}
                borderRadius={"0 0 16px 16px"}
            >
                <Text text={text} size={"24px"} color={"#FFFFFF"} padding={2}/>
            </Stack>
        </Stack>
    )
}