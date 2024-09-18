// src/app/_components/TutorForm.tsx

'use client';

import { Box, Stack, Input, FormControl, FormLabel, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const TutorForm = () => {
  const [tutor, setTutor] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTutor({ ...tutor, [name]: value });
  };

  return (
    <Box bg="#F2933C" padding={8} borderRadius="md" width="100%">
      <Text fontSize="3xl" mb={4} textAlign="left" color="#CB4817">Tutor</Text>
      <Stack spacing={4}>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="black">Nome:</FormLabel>
            <Input 
              name="nome"
              value={tutor.nome}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="black">Telefone:</FormLabel>
            <Input 
              name="telefone"
              type="tel"
              value={tutor.telefone}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
        </HStack>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="black">E-mail:</FormLabel>
            <Input 
              name="email"
              type="email"
              value={tutor.email}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="black">Senha:</FormLabel>
            <Input 
              name="senha"
              type="password"
              value={tutor.senha}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel color="black">Endereço:</FormLabel>
          <Input 
            name="endereco"
            value={tutor.endereco}
            onChange={handleChange}
            bg="#FBF2EC"
          />
        </FormControl>
      </Stack>
    </Box>
  );
};
