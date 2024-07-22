import { Heading } from "@chakra-ui/react"

interface TextIndexProps {
    text: string
    size: string
    color: string
}

export function TextIndex({ text, size, color }: TextIndexProps) {
    return (
        <Heading
            as="p"
            fontSize={size}
            fontWeight={600}
            color={color}
            w={"90%"}
        >
            {text}
        </Heading>
    )
}