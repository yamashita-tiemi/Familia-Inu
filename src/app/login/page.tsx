import { Flex, Stack, Button, Heading, Input, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Navbar from '../_components/navbar';
import '../globals.css';

export function LoginPage() {
    return (
        <>
            <Navbar />
            <Stack
                spacing={0}
                paddingStart={0}
                align="center"
                maxWidth="100%"
                margin="0 auto"
                bg="#A6AE4F"
                minHeight="100vh"
                direction="row"
            >
                {/* Seção explicativa */}
                <Flex
                    width="40%"
                    bg="#6C722B"
                    padding={8}
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    direction="column"
                    zIndex={1} // Garante que fique "por cima" da outra seção
                >
                    <Heading
                        textAlign="center"
                        color="#FFFFFF"
                        size="lg"
                        marginBottom={5}
                    >
                        Por que se cadastrar?
                    </Heading>
                    <Text
                        color="#FFFFFF"
                        fontSize="lg"
                        textAlign="center"
                        marginBottom={6}
                    >
                        O cadastro no nosso sitePet é essencial para receber atualizações, ofertas especiais e aproveitar todos os recursos disponíveis para você e seu pet.
                        Junte-se à família Inu e faça parte de uma comunidade dedicada ao bem-estar dos nossos amigos de quatro patas!
                    </Text>
                    <Button
                        as={NextLink}
                        href="/cadastro"
                        bg="var(--red)"
                        color="white"
                        variant="solid"
                        width="400px"
                        _hover={{ bg: "var(--orange)" }} // Laranja mais claro ao passar o mouse
                    >
                        Cadastre-se
                    </Button>
                </Flex>

                {/* Seção do formulário */}
                <Stack
                    width="60%"
                    minHeight="100vh"
                    padding={8}
                    spacing={6}
                    justifyContent="center"
                    alignItems="center"
                    bg="#FFFFFF"
                >
                    <Heading
                        textAlign="center"
                        color="var(--green-dark)"
                        size="lg"
                    >
                        Faça o Login
                    </Heading>
                    <Stack spacing={4} width="100%" maxWidth="400px" margin="0 auto">
                        <Input
                            placeholder="Email"
                            size="lg"
                            borderColor="#A6AE4F"
                            _placeholder={{ color: '#A6AE4F' }}
                            _focus={{ borderColor: "#CB4817" }} // Cor laranja ao focar no campo
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            size="lg"
                            borderColor="#A6AE4F"
                            _placeholder={{ color: '#A6AE4F' }}
                            _focus={{ borderColor: "#CB4817" }} // Cor laranja ao focar no campo
                        />
                    </Stack>
                    <Button
                        bg="var(--red)"
                        color="white"
                        variant="solid"
                        width="400px"
                        _hover={{ bg: "var(--orange)" }}// Laranja mais claro ao passar o mouse
                    >
                        Entrar
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default LoginPage;
