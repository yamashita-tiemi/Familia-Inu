import { Link, Stack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextImage from 'next/image';

interface ImageNavbarProps {
    src: string
    alt: string
    width: number
    height: number
}

export function ImageNavbar({ src, alt, width, height }: ImageNavbarProps) {
    return (
        <Link as={NextLink} href="/"
            width={"10%"}
        >
            <Stack as="picture" align={"center"}>
                <NextImage src={src} alt={alt} width={width} height={height} />
            </Stack>
        </Link>
    )
}

interface ImageProps {
    src: string
    alt: string
    width: number
    height: number
    align?: string
    w?: string
    py?: string
    mx?: string
}

export function Image({ src, alt, width, height, align, w, py, mx }: ImageProps) {
    return (
        <Stack
            as="picture"
            w={w}
            align={align}
            minWidth={"80px"}
            paddingY={py}
            marginX={mx}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>
    )
}