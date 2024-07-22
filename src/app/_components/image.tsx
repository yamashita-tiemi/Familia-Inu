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