'use client';

import { Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import Footer from "@/app/_components/footer"
import { NavbarAdmin } from "@/app/_components/navbar"
import { SectionPerfil } from "../../_components/section"
import { ViewTutor } from "@/app/_components/view"
import { TitleSection, TitleButton } from "@/app/_components/tittle"
import { Label } from "@/app/_components/label"
import { ButtonTutorPet } from "@/app/_components/button"
import React, { useEffect, useState } from "react"
import { editarPerfil, getPerfil } from "../perfil-service";


export default function Perfil() {
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    useEffect(() => {
        carregarPerfil()
    }, []);


    async function carregarPerfil() {
        const perfil = await getPerfil();
        console.log(perfil);
        if(perfil){
            setNome(perfil.data.name);
            setEmail(perfil.data.email);
            setTelefone(perfil.data.number);

            //Precisa de uma solucao melhor
            localStorage.setItem("USERID", perfil.data.id);
        }
    }
    
    const registrarTutor = async () => {
        try {
            const tutor = {
                name: nome,
                email,
                number: telefone,
            };

            console.log(await editarPerfil(tutor)); // Se houver uma função de cadastro
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
                    // bg={"#FFFFFF"}
                    bg={"#d0d599"}
                    width={"95%"}
                    minHeight={"620px"}
                    marginBottom={10}
                    marginTop={"70px"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    borderRadius={10}
                >
                    <Stack
                        height={"100%"}
                        width={"100%"}
                        alignItems={"center"}
                    >
                        <HStack
                            width={"98%"}
                            height={"80px"}
                        >
                            <ButtonTutorPet title={"Tutor"} href={"/perfil/tutor"} w="50%" bg={"#CB4817"} color={"#FFFFFF"}></ButtonTutorPet>
                            <ButtonTutorPet title={"Pets"} href={"/perfil/pets"} w="50%" bg={"#FFFFFF"} color={"#CB4817"}></ButtonTutorPet>
                        </HStack>
                        {/* <ViewTutor/> */}
                        <Stack
                            // bg={"gray"}
                            width={"60%"}
                            alignItems={"center"}
                            marginTop={16}
                        >
                            <TitleSection title={nome} size={"32px"} />
                            <Stack
                                width={"100%"}
                            >
                                <Label text={"Nome"} content={nome} />
                                <Label text={"Email"} content={email} />
                                <Label text={"Telefone"} content={telefone} />
                                {/*<Label text={"Endereço"} content={"teste"} />*/}
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