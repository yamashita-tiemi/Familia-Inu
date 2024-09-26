import { Heading } from "@chakra-ui/react";

interface TextIndexProps {
    text: string;
    size: string;
    color: string;
    margin?: string;
}

export function TextIndex({ text, size, color, margin }: TextIndexProps) {
    return (
        <Heading
            as="p"
            fontSize={size}
            fontWeight={400}
            color={color}
            w="90%"
            mb={4}
            margin={margin}
        >
            {text}
        </Heading>
    );
}

export function TextIndexBold({ text, size, color }: TextIndexProps) {
    return (
        <Heading
            as="p"
            fontSize={size}
            fontWeight={600}
            color={color}
            w="90%"
            pb={10}
        >
            {text}
        </Heading>
    );
}

interface TextCardProps {
    text: string;
    size: string;
    w?: string;
}

export function TextCard({ text, size, w = "100%" }: TextCardProps) {
    return (
        <Heading
            as="p"
            fontSize={size}
            fontWeight={400}
            color="#FFFFFF"
            textShadow="4px 4px 15px rgba(0, 0, 0, 0.45)"
            w={w}
        >
            {text}
        </Heading>
    );
}

interface TextProps {
    text: string;
    size: string;
    color: string;
    paddingX?: number;
    paddingY?: number;
    w?: string;
    weight?: number;
    align?: "left" | "center" | "right" | "justify";
}

export function Text({ text, size, color, paddingX = 0, paddingY = 0, w = "100%", weight, align }: TextProps) {
    return (
        <Heading
            as="p"
            fontSize={size}
            fontWeight={weight}
            color={color}
            w={w}
            px={paddingX}
            py={paddingY}
            textAlign={align}
        >
            {text}
        </Heading>
    );
}
