'use client';

import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast } from "@chakra-ui/react"
import Footer from "@/app/_components/footer"
import { NavbarAdmin } from "@/app/_components/navbar"
import { SectionPerfil } from "../../_components/section"
import { ViewPet, ViewTutor } from "@/app/_components/view"
// import { cadastro } from "@/app/cadastro/cadastro-service"
import React, { useEffect, useState } from "react"
import { TitleButton, TitleSection } from "@/app/_components/tittle";
import { ButtonTutorPet } from "@/app/_components/button";
import { Label } from "@/app/_components/label";
import { cadastroPet, getPetsCliente } from "../perfil-service";
import { Icon } from "@/app/_components/image";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { AiFillPlusCircle } from 'react-icons/ai'


export default function Perfil() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [porte, setPorte] = useState('');
    const [sexo, setSexo] = useState('');
    const [observacao, setObservacao] = useState('');

    useEffect(() => {
        carregarPets()
    }, []);

    const toast = useToast();

    const showToast = (text: string, status: any) => {
        toast({
            position: "bottom",
            title: text,
            status: status,
            duration: 5000,
            isClosable: true,
        })
    }


    async function carregarPets() {
        console.log("asdfsd")
        console.log(await getPetsCliente());
    }

    const registrarPet = async () => {
        try {
            const pet = {
                name: nome,
                breed: raca,
                type: porte,
                sex: sexo,
                comment: observacao
            };

            let res = await cadastroPet(pet); // Se houver uma função de cadastro
            console.log("Pet registrado:", pet, res);
            showToast("Pet registrado com sucesso", "success");

            // Limpar os campos após o registro
            setNome('');
            setRaca('');
            setPorte('');
            setSexo('');
            setObservacao('');
        } catch (error) {
            console.error("Erro ao registrar pet:", error);
            showToast("Não foi possivel registrar pet", "error");
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
                    // bg={"#FFFFFF"}
                    width={"95%"}
                    minHeight={"620px"}
                    marginBottom={10}
                    marginTop={"70px"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    borderRadius={10}
                    bg={"#d0d599"}
                >
                    <Stack width={"100%"} alignItems={"center"}>
                        <HStack
                            width={"98%"}
                            height={"80px"}
                            marginBottom={10}
                        >
                            <ButtonTutorPet title={"Tutor"} href={"/perfil/tutor"} w="50%" bg={"#FFFFFF"} color={"#CB4817"}></ButtonTutorPet>
                            <ButtonTutorPet title={"Pets"} href={"/perfil/pets"} w="50%" bg={"#CB4817"} color={"#FFFFFF"}></ButtonTutorPet>
                        </HStack>
                        <Stack width={"95%"} justifyContent={"flex-end"}>
                            <Button
                                bg={"#CB4817"}
                                _hover={{ bg: "#F2933C" }}
                                // minWidth={"100px"}
                                onClick={onOpen}
                                width={"10%"}
                            >
                                <Box
                                    borderRadius={"16px"}
                                    color='#FFFFFF'
                                    width={"100%"}
                                >
                                    <HStack justifyContent={"center"}>
                                        {/* <AiFillPlusCircle width={"40px"} /> */}
                                        <Icon width={"60%"} colorBg={"none"} color={"#FFFFFF"} href={""}>
                                            <AiFillPlusCircle size={24} />
                                        </Icon>
                                        <TitleButton title={"Novo pet"} size={"16px"} />
                                    </HStack>
                                </Box>
                            </Button>
                        </Stack>
                        <TableContainer
                            bg={"#FFFFFF"}
                            width={"95%"}
                        >
                            <Table variant='striped' color="#FFFFFF">
                                <Thead bg={"#6C722B"}>
                                    <Tr>
                                        <Th color={"#FFFFFF"} fontSize={"18px"} width={"18%"} textAlign={"center"}>Nome</Th>
                                        <Th color={"#FFFFFF"} fontSize={"18px"} width={"16%"} textAlign={"center"}>Raça</Th>
                                        <Th color={"#FFFFFF"} fontSize={"18px"} width={"16%"} textAlign={"center"}>Porte</Th>
                                        <Th color={"#FFFFFF"} fontSize={"18px"} width={"10%"} textAlign={"center"}>Sexo</Th>
                                        <Th color={"#FFFFFF"} fontSize={"18px"} width={"18%"} textAlign={"center"}>Observações</Th>
                                        <Th color={"#FFFFFF"} fontSize={"18px"} width={"28%"} textAlign={"center"}></Th>
                                    </Tr>
                                </Thead>
                                <Tbody overflow={"scroll"}>
                                    <Tr>
                                        <Td textAlign={"center"}>{nome}</Td>
                                        <Td textAlign={"center"}>{raca}</Td>
                                        <Td textAlign={"center"}>{porte}</Td>
                                        <Td textAlign={"center"}>{sexo}</Td>
                                        <Td textAlign={"center"}>{observacao}</Td>
                                        <Td textAlign={"center"}>
                                            <HStack justifyContent={"center"}>
                                                {/* faezr uma funcao pra pegar o id de qual pet escolhido e chamar depois abrir o modal */}
                                                <Button onClick={onOpenEdit} bg={"none"}>
                                                    <Icon width={"40px"} colorBg={"#ffa133"} color={"#FFFFFF"} href={""}>
                                                        <BiSolidPencil size={28} />
                                                    </Icon>
                                                </Button>
                                                <Button onClick={onOpenDelete} bg={"none"}>
                                                    <Icon width={"40px"} colorBg={"#D00"} color={"#FFFFFF"} href={""}>
                                                        <FaTrash size={20} />
                                                    </Icon>
                                                </Button>
                                            </HStack>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td textAlign={"center"}>{nome}</Td>
                                        <Td textAlign={"center"}>{raca}</Td>
                                        <Td textAlign={"center"}>{porte}</Td>
                                        <Td textAlign={"center"}>{sexo}</Td>
                                        <Td textAlign={"center"}>{observacao}</Td>
                                        <Td textAlign={"center"}>
                                            <HStack justifyContent={"center"}>
                                                <Button onClick={function () { }} bg={"none"}>
                                                    <Icon width={"40px"} colorBg={"#ffa133"} color={"#FFFFFF"} href={""}>
                                                        <BiSolidPencil size={28} />
                                                    </Icon>
                                                </Button>
                                                <Button onClick={function () { }} bg={"none"}>
                                                    <Icon width={"40px"} colorBg={"#D00"} color={"#FFFFFF"} href={""}>
                                                        <FaTrash size={20} />
                                                    </Icon>
                                                </Button>
                                            </HStack>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
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
                                    <FormLabel color="#FFFFFF">Sexo:</FormLabel>
                                    <Input
                                        name="sexo"
                                        value={sexo}
                                        onChange={(event) => setSexo(event.target.value)}
                                        bg="#FBF2EC"
                                        borderColor="#A6AE4F"
                                        _placeholder={{ color: '#A6AE4F' }}
                                        _focus={{ borderColor: "#CB4817" }}
                                        placeholder='sexo'
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

                {/* ------------------modal editar-------------- */}
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpenEdit}
                    onClose={onCloseEdit}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader bg="#6C722B" color="#FFFFFF">Editar pet</ModalHeader>
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
                                    <FormLabel color="#FFFFFF">Sexo:</FormLabel>
                                    <Input
                                        name="sexo"
                                        value={sexo}
                                        onChange={(event) => setSexo(event.target.value)}
                                        bg="#FBF2EC"
                                        borderColor="#A6AE4F"
                                        _placeholder={{ color: '#A6AE4F' }}
                                        _focus={{ borderColor: "#CB4817" }}
                                        placeholder='sexo'
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
                                    type="submit"
                                >
                                    Salvar
                                </Button>
                            </FormControl>

                        </ModalBody>
                    </ModalContent>
                </Modal >
                {/* -------------- modal delete ------------------ */}
                <Modal isOpen={isOpenDelete} onClose={onCloseDelete} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody pb={12} pt={16} bg="#6C722B">
                            <Heading
                                as="p"
                                fontSize={"24px"}
                                fontWeight={400}
                                color={"#FFFFFF"}
                                w={"90%"}
                            >
                                {"Tem certeza que deseja excluir?"}
                            </Heading>
                        </ModalBody>
                        <ModalFooter bg="#6C722B">
                            <Button colorScheme='gray' mr={3}>
                                Cancelar
                            </Button>
                            <Button colorScheme='red' mr={3}>
                                Excluir
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack >

            <Footer />
        </>
    )
}