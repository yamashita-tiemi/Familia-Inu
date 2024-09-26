import { Heading, HStack, Stack } from "@chakra-ui/react";
import { Text } from "./text";

interface LabelProps {
    text: string;
    content: string;
}

export function Label({ text, content }:LabelProps) {
    return (
        <HStack
            padding={2}
            border={"1px solid #CB4817"}
            borderRadius={"10px"}
            width={"100%"}
            bg={"#ffffffbd"}
        >
            <Heading
                fontSize={"20px"}
                minWidth={"15%"}
                paddingLeft={5}
            >
                {text}:
                
            </Heading>
            <Heading 
                fontSize={"20px"}
                fontWeight={"regular"}
                paddingLeft={2}
            >
                {content}
            </Heading>
        </HStack>
    )
}