import { HStack, Icon, Stack } from "@chakra-ui/react";
import { TitleCard } from "./tittle";
import { TextCard } from "./text"
import { IconCard } from "./icon";

interface CardReviewProps {
    title: string
    text: string
    icon1: any
    icon2: any
    icon3: any
    icon4: any
    icon5: any
    w?: string
}

export function CardReview({ title, text, icon1, icon2, icon3, icon4, icon5, w }: CardReviewProps) {
    return (
        <Stack
            bg={"#F2933C"}
            height={"400px"}
            boxShadow={"4px 4px 10px 0px rgba(0, 0, 0, 0.25)"}
            borderRadius={"16px"}
            align={"center"}
            justifyContent={"space-evenly"}
            width={"25%"}
            padding={8}
        >
            <Stack
                width={"80%"}
                height={"25%"}
                justifyContent={"space-around"}
            >
                <TitleCard title={title} size={"28px"} />
                <HStack
                    width={"90%"}
                    justifyContent={"space-evenly"}
                >
                    {icon1}
                    {icon2}
                    {icon3}
                    {icon4}
                    {icon5}
                </HStack>
            </Stack>
            <TextCard text={text} size={"18px"} />
        </Stack>
    )
}