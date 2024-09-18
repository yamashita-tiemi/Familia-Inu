import Footer from "../_components/footer"
import {Navbar} from "../_components/navbar"
import { SectionAbout, SectionFAQ } from "../_components/section"

export default function Sobre() {
    return(
        <>
            <Navbar/>
            <SectionAbout/>
            <SectionFAQ/>
            <Footer/>
        </>
    )
}