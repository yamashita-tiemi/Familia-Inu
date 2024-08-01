import { AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { TitleAccordion, TitleCard } from "./tittle";

interface AccordionItemCardProps {
    title: string
    text: string
}

export function AccordionItemCard({ title, text }: AccordionItemCardProps) {
    return (
        <AccordionItem
            marginY={4}
        >
            <h2>
                <AccordionButton
                    bg={"#6C722B"}
                    color={"#FFFFFF"}
                    minHeight={"60px"}
                    borderRadius={"6px"}
                >
                    <Box as='span' flex='1' textAlign='left'>
                        <TitleAccordion title={title}/>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {text}
            </AccordionPanel>
        </AccordionItem>
    )
}