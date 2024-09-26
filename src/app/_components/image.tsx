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
            width={"7%"}
        >
            <Stack as="picture" align={"center"}>
                <NextImage src={src} alt={alt} width={width} height={height} />
            </Stack>
        </Link>
    )
}

interface ImageFooterProps {
    src: string
    alt: string
    width: number
    height: number
    w?: string
}

export function ImageFooter({ src, alt, width, height, w }: ImageFooterProps) {
    return (
        <Link as={NextLink} href="/"
            width={w}
            borderRadius={"16px"}
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

interface ImageDailyProps {
    src: string
    alt: string
    width: number
    height: number
    align?: string
    w?: string
    py?: string
    mx?: string
}

export function ImageDaily({ src, alt, width, height, align, w, py, mx }: ImageDailyProps) {
    return (
        <Stack
            as="picture"
            w={w}
            align={align}
            minWidth={"80px"}
            paddingY={py}
            marginX={mx}
            borderRadius={"16px"}
            alignItems={"center"}
        >
            <NextImage 
                src={src} 
                alt={alt} 
                width={width} 
                height={height} 
                layout="responsive" // Torna a imagem responsiva
                objectFit="cover" // Ajusta o recorte da imagem
            />
        </Stack>
    )
}