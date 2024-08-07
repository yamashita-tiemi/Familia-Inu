'use client';

import { Box, Stack, Input, FormControl, FormLabel, HStack, Heading, Button } from '@chakra-ui/react';

interface TutorFormProps {
  tutor: {
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    senha: string;
  };
  onTutorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TutorForm = ({ tutor, onTutorChange }: TutorFormProps) => {
  return (
    <Box bg="#6C722B" p={6} borderRadius="md" maxWidth="600px" mx="auto" boxShadow="lg">
      <Heading fontWeight="normal" fontSize="2xl" mb={4} textAlign="left" color="#FBF2EC" >Tutor</Heading>
      <Stack spacing={4}>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="#FFFFFF">Nome:</FormLabel>
            <Input
              name="nome"
              value={tutor.nome}
              onChange={onTutorChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF">Telefone:</FormLabel>
            <Input
              name="telefone"
              type="tel"
              value={tutor.telefone}
              onChange={onTutorChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
        </HStack>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="#FFFFFF">E-mail:</FormLabel>
            <Input
              name="email"
              type="email"
              value={tutor.email}
              onChange={onTutorChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF">Senha:</FormLabel>
            <Input
              name="senha"
              type="password"
              value={tutor.senha}
              onChange={onTutorChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel color="#FFFFFF">Endereço:</FormLabel>
          <Input
            name="endereco"
            value={tutor.endereco}
            onChange={onTutorChange}
            bg="#FBF2EC"
            borderColor="#A6AE4F"
            _placeholder={{ color: '#A6AE4F' }}
            _focus={{ borderColor: "#CB4817" }}
          />
        </FormControl>
      </Stack>
    </Box>
  );
};
