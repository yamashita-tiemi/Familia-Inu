'use client';

import { Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import Footer from "@/app/_components/footer"
import { NavbarAdmin } from "@/app/_components/navbar"
import { SectionPerfil } from "../../_components/section"
import { ViewPet, ViewTutor } from "@/app/_components/view"
// import { Button } from "@/app/_components/button"
import { cadastro } from "@/app/cadastro/cadastro-service"
import React, { useState } from "react"
import { TitleButton, TitleSection } from "@/app/_components/tittle";
import { ButtonTutorPet } from "@/app/_components/button";
import { Label } from "@/app/_components/label";


export default function Perfil() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [porte, setPorte] = useState('');
    const [cor, setCor] = useState('');
    const [observacao, setObservacao] = useState('');

    const registrarPet = async () => {
        try {
            const pet = {
                nome,
                raca,
                porte,
                cor,
                observacao
            };

            await cadastro(pet); // Se houver uma função de cadastro
            console.log("Pet registrado:", pet);

            // Limpar os campos após o registro
            setNome('');
            setRaca('');
            setPorte('');
            setCor('');
            setObservacao('');
        } catch (error) {
            console.error("Erro ao registrar pet:", error);
        }
    };
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
                            <ButtonTutorPet title={"Tutor"} href={"/perfil/tutor"} w="50%"></ButtonTutorPet>
                            <ButtonTutorPet title={"Pets"} href={"/perfil/pets"} w="50%"></ButtonTutorPet>
                        </HStack>
                        {/* <ViewPet /> */}
                        <Stack
                            width={"60%"}
                            alignItems={"center"}
                            marginTop={16}
                        >
                            <Stack
                                width={"100%"}
                            >
                                <TitleSection title={"Nome"} size={"32px"} />
                                <Label text={"Raça"} content={"teste"} />
                                <Label text={"Cor"} content={"teste"} />
                                <Label text={"Porte"} content={"teste"} />
                                <Label text={"Observacões"} content={"teste"} />
                            </Stack>
                            <HStack
                                width={"100%"}
                                justifyContent={"space-between"}
                                marginTop={5}
                            >
                                <Button 
                                    bg={"#CB4817"}
                                    _hover={{ bg: "#F2933C" }} 
                                    minWidth={"100px"}
                                    onClick={onOpen}
                                >
                                    <Box
                                        borderRadius={"16px"}
                                        color='offWhite'
                                        width={"100%"}
                                    >
                                        <HStack justifyContent={"center"}>
                                            <TitleButton title={"Novo pet"} size={"16px"} />
                                        </HStack>
                                    </Box>
                                </Button>
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
                            </HStack>
                        </Stack>
                    </Stack>

                </HStack>

                {/* ------------------modal-------------- */}
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader bg="#6C722B" color="#FFFFFF">Adicionar novo pet</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6} bg="#6C722B">
                            <HStack spacing={4} marginY={2}>
                                <FormControl>
                                    <FormLabel color="#FFFFFF">Nome do Pet:</FormLabel>
                                    <Input
                                        name="nome"
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                        bg="#FBF2EC"
                                        borderColor="#A6AE4F"
                                        _placeholder={{ color: '#A6AE4F' }}
                                        _focus={{ borderColor: "#CB4817" }}
                                        placeholder='Nome do pet'
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel color="#FFFFFF">Porte:</FormLabel>
                                    <Input
                                        name="porte"
                                        value={porte}
                                        onChange={(event) => setPorte(event.target.value)}
                                        bg="#FBF2EC"
                                        borderColor="#A6AE4F"
                                        _placeholder={{ color: '#A6AE4F' }}
                                        _focus={{ borderColor: "#CB4817" }}
                                        placeholder='Porte'
                                    />
                                </FormControl>
                            </HStack>
                            <HStack spacing={4} marginY={2}>
                                <FormControl>
                                    <FormLabel color="#FFFFFF">Raça:</FormLabel>
                                    <Input
                                        name="raca"
                                        value={raca}
                                        onChange={(event) => setRaca(event.target.value)}
                                        bg="#FBF2EC"
                                        borderColor="#A6AE4F"
                                        _placeholder={{ color: '#A6AE4F' }}
                                        _focus={{ borderColor: "#CB4817" }}
                                        placeholder='Raça'
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel color="#FFFFFF">Cor:</FormLabel>
                                    <Input
                                        name="cor"
                                        value={cor}
                                        onChange={(event) => setCor(event.target.value)}
                                        bg="#FBF2EC"
                                        borderColor="#A6AE4F"
                                        _placeholder={{ color: '#A6AE4F' }}
                                        _focus={{ borderColor: "#CB4817" }}
                                        placeholder='Cor'
                                    />
                                </FormControl>
                            </HStack>
                            <FormControl>
                                <FormLabel color="#FFFFFF">Observações:</FormLabel>
                                <Input
                                    name="observacao"
                                    value={observacao}
                                    onChange={(event) => setObservacao(event.target.value)}
                                    bg="#FBF2EC"
                                    borderColor="#A6AE4F"
                                    _placeholder={{ color: '#A6AE4F' }}
                                    _focus={{ borderColor: "#CB4817" }}
                                    height="100px"
                                    as="textarea"
                                    placeholder='Observações'
                                />
                            </FormControl>
                            <FormControl>
                                <Button
                                    margin="0 auto"
                                    bg="#CB4817"
                                    color="white"
                                    width="100%"
                                    _hover={{ bg: "#F2933C" }}
                                    onClick={registrarPet} // Chama a função de registro ao clicar
                                >
                                    Registrar
                                </Button>
                            </FormControl>

                        </ModalBody>
                    </ModalContent>
                </Modal >
            </Stack >

            <Footer />
        </>
    )
}