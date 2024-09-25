import { HStack, Stack } from "@chakra-ui/react"
import Footer from "@/app/_components/footer"
import { NavbarAdmin } from "@/app/_components/navbar"
import { SectionPerfil } from "../../_components/section"
import { ViewPet, ViewTutor } from "@/app/_components/view"
import { Button } from "@/app/_components/button"


export default function Perfil() {
    return(
        <>
            <NavbarAdmin/>

            <Stack
                width={"100%"}
                alignItems={"center"}
            >
                {/* <SectionPerfil/> */}
                <HStack
                    as="section"
                    bg={"#FFFFFF"}
                    width={"90%"}
                    minHeight={"620px"}
                    marginBottom={10}
                    marginTop={"70px"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    borderRadius={10}
                >
                    {/* for para mais de uma pet */}
                    <Stack
                        height={"100%"}
                        width={"85%"}
                        alignItems={"center"}
                    >
                        <HStack
                            width={"100%"}
                            height={"80px"}
                        >
                            <Button title={"Tutor"} href={"/perfil/tutor"} w="50%"></Button>
                            <Button title={"Pets"} href={"/perfil/pets"} w="50%"></Button>
                        </HStack>
                        <ViewPet/>
                    </Stack>
                    
                </HStack>
            </Stack>

            <Footer/>
        </>
    )
}