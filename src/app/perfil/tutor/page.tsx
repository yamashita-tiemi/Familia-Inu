'use client';

import { Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import Footer from "@/app/_components/footer"
import { NavbarAdmin } from "@/app/_components/navbar"
import { SectionPerfil } from "../../_components/section"
import { ViewTutor } from "@/app/_components/view"
import { TitleSection, TitleButton } from "@/app/_components/tittle"
import { Label } from "@/app/_components/label"
import { ButtonTutorPet } from "@/app/_components/button"
import React, { useState } from "react"


export default function Perfil() {
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    const registrarTutor = async () => {
        try {
            const tutor = {
                nome,
                email,
                telefone,
                endereco,
            };

            // await cadastro(pet); // Se houver uma função de cadastro
            console.log("Registro sucesso:", tutor);

            // Limpar os campos após o registro
            setNome('');
            setEmail('');
            setTelefone('');
            setEndereco('');
        } catch (error) {
            console.error("Erro ao registrar:", error);
        }
    }
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
                                marginTop={5}
                            >
                                {/* <Button title={"Editar"} href={""}></Button> */}
                                <Button
                                    bg={"#CB4817"}
                                    _hover={{ bg: "#F2933C" }}
                                    minWidth={"100px"}
                                    onClick={onOpenEdit}
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

                {/* ------------------modal editar-------------- */}
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpenEdit}
                    onClose={onCloseEdit}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader bg="#6C722B" color="#FFFFFF">Editar perfil</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6} bg="#6C722B">
                            {/* <HStack spacing={4} marginY={2}> */}
                            <FormControl>
                                <FormLabel color="#FFFFFF" marginY={2}>Nome:</FormLabel>
                                <Input
                                    name="nome"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                    bg="#FBF2EC"
                                    borderColor="#A6AE4F"
                                    _placeholder={{ color: '#A6AE4F' }}
                                    _focus={{ borderColor: "#CB4817" }}
                                    placeholder='Nome'
                                />
                                {/* </FormControl>
                                <FormControl> */}
                                <FormLabel color="#FFFFFF" marginY={2}>Email:</FormLabel>
                                <Input
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    bg="#FBF2EC"
                                    borderColor="#A6AE4F"
                                    _placeholder={{ color: '#A6AE4F' }}
                                    _focus={{ borderColor: "#CB4817" }}
                                    placeholder='Email'
                                />
                                <FormLabel color="#FFFFFF" marginY={2}>Telefone:</FormLabel>
                                <Input
                                    name="telefone"
                                    value={telefone}
                                    onChange={(event) => setTelefone(event.target.value)}
                                    bg="#FBF2EC"
                                    borderColor="#A6AE4F"
                                    _placeholder={{ color: '#A6AE4F' }}
                                    _focus={{ borderColor: "#CB4817" }}
                                    placeholder='Telefone'
                                />
                                <FormLabel color="#FFFFFF" marginY={2}>Endereco:</FormLabel>
                                <Input
                                    name="endereco"
                                    value={endereco}
                                    onChange={(event) => setEndereco(event.target.value)}
                                    bg="#FBF2EC"
                                    borderColor="#A6AE4F"
                                    _placeholder={{ color: '#A6AE4F' }}
                                    _focus={{ borderColor: "#CB4817" }}
                                    // height="100px"
                                    // as="textarea"
                                    placeholder='Endereco'
                                />
                                <Button
                                    margin="0 auto"
                                    bg="#CB4817"
                                    color="white"
                                    width="100%"
                                    _hover={{ bg: "#F2933C" }}
                                    onClick={registrarTutor} // Chama a função de registro ao clicar
                                    type="submit"
                                    marginTop={2}
                                >
                                    Salvar
                                </Button>
                            </FormControl>

                        </ModalBody>
                    </ModalContent>
                </Modal >
            </Stack>

            <Footer />
        </>
    )
}