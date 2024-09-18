import { Stack, Heading, Input, Button } from '@chakra-ui/react';

export function LoginForm() {
    return (
        <Stack
            width="60%"
            minHeight="100vh"
            padding={8}
            spacing={6}
            justifyContent="center"
            alignItems="center"
            bg="#FBF2EC"
        >
            <Heading
                textAlign="center"
                size="lg"
                color="#6C722B"
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
                bg="#CB4817"
                color="white"
                variant="solid"
                width="400px"
                _hover={{ bg: "#F2933C" }}// Laranja mais claro ao passar o mouse
            >
                Entrar
            </Button>
        </Stack>
    );
}
