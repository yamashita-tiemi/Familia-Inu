import { HStack } from "@chakra-ui/react"
import Footer from "../_components/footer"
import { NavbarAdmin } from "../_components/navbar"
import { SectionPerfil } from "../_components/section"

export default function Perfil() {
    return(
        <>
            <NavbarAdmin/>

            <SectionPerfil/>

            <Footer/>
        </>
    )
}