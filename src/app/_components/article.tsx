import { Stack } from "@chakra-ui/react"
import { TextIndex } from "./text"
import { Button } from "./button"

interface ArticleIndexPrimaryProps {
    text1: string
    text2: string
}

export function ArticleIndexPrimary({ text1, text2 }:ArticleIndexPrimaryProps) {
    return(
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
                <TextIndex text={text1} size={"28px"} color={"#FFFFFF"}/>
                <TextIndex text={text2} size={"28px"} color={"#FFFFFF"}/>
            </Stack>
            <Button title={"Agende aqui"} href={"/agenda"} w="50%"></Button>
        </Stack>
    )
}