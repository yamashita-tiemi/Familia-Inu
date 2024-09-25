import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export function ExplanatorySection() {
    return (
        <Flex
            width="45%"
            bg="#6C722B"
            padding={8}
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            direction="column"
            zIndex={1}>
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
                href="/cadastroTutor"
                bg="#CB4817"
                color="white"
                variant="solid"
                width="400px"
                _hover={{ bg: "#F2933C" }} 
            >
                Cadastre-se
            </Button>
        </Flex>
    );
}


export default ExplanatorySection;