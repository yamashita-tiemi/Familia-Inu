import { Box, Button, HStack, Stack } from "@chakra-ui/react"
import Footer from "@/app/_components/footer"
import { NavbarAdmin } from "@/app/_components/navbar"
import { SectionPerfil } from "../../_components/section"
import { ViewTutor } from "@/app/_components/view"
import { TitleSection, TitleButton } from "@/app/_components/tittle"
import { Label } from "@/app/_components/label"
import { ButtonTutorPet } from "@/app/_components/button"


export default function Perfil() {
    return (
        <>
            <NavbarAdmin />

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
                    <Stack
                        height={"100%"}
                        width={"85%"}
                        alignItems={"center"}
                    >
                        <HStack
                            width={"100%"}
                            height={"80px"}
                        >
                            <ButtonTutorPet title={"Tutor"} href={"/perfil/tutor"} w="50%"></ButtonTutorPet>
                            <ButtonTutorPet title={"Pets"} href={"/perfil/pets"} w="50%"></ButtonTutorPet>
                        </HStack>
                        {/* <ViewTutor/> */}
                        <Stack
                            // bg={"gray"}
                            width={"60%"}
                            alignItems={"center"}
                            marginTop={16}
                        >
                            <TitleSection title={"Nome"} size={"32px"} />
                            <Stack
                                width={"100%"}
                            >
                                <Label text={"Nome"} content={"teste"} />
                                <Label text={"Email"} content={"teste"} />
                                <Label text={"Telefone"} content={"teste"} />
                                <Label text={"Endereço"} content={"teste"} />
                            </Stack>
                            <Stack
                                width={"100%"}
                                alignItems={"flex-end"}
                            >
                                {/* <Button title={"Editar"} href={""}></Button> */}
                                <Button
                                    bg={"#CB4817"}
                                    _hover={{ bg: "#F2933C" }}
                                    minWidth={"100px"}
                                >
                                    <Box
                                        borderRadius={"16px"}
                                        color='offWhite'
                                        width={"100%"}
                                    >
                                        <HStack justifyContent={"center"}>
                                            <TitleButton title={"Editar"} size={"16px"} />
                                        </HStack>
                                    </Box>
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>

                </HStack>
            </Stack>

            <Footer />
        </>
    )
}