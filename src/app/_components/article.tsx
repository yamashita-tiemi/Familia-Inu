import { Stack } from "@chakra-ui/react"
import { Text, TextIndex, TextIndexBold } from "./text"
import { Button } from "./button"
import { ImageDaily } from "./image"

interface ArticleIndexPrimaryProps {
    text1: string
    text2: string
    text3: string
}

export function ArticleIndexPrimary({ text1, text2, text3 }: ArticleIndexPrimaryProps) {
    return (
        <Stack
            height={"100%"}
            justifyContent={"space-between"}
        >
            <Stack
                as="article"
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                height={"55%"}
                width={"80%"}

            >
                <TextIndexBold text={text1} size={"35px"} color={"#FFFFFF"} />
                <TextIndex text={text2} size={"20px"} color={"#FFFFFF"} />
                <TextIndex text={text3} size={"20px"} color={"#FFFFFF"} />
            </Stack>
            <Button title={"Agende aqui"} href={"/login"} w="30%"></Button>
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
                <Text weight={400} text={text} size={"18px"} color={"#FFFF"} paddingX={2} align="justify"/>
            </Stack>
        </Stack>
    )
}