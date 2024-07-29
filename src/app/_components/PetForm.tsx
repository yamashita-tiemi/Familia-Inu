// src/app/_components/PetForm.tsx

'use client';

import { Box, Stack, Input, FormControl, FormLabel, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const PetForm = () => {
  const [pet, setPet] = useState({
    nome: '',
    raca: '',
    porte: '',
    cor: '',
    observacao: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  };

  return (
    <Box bg="#F2933C" padding={8} borderRadius="md" width="100%">
      <Text fontSize="3xl" mb={4} textAlign="left" color="#CB4817">Pet</Text>
      <Stack spacing={4}>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="black">Nome do Pet:</FormLabel>
            <Input 
              name="nome"
              value={pet.nome}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="black">Porte:</FormLabel>
            <Input 
              name="porte"
              value={pet.porte}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
        </HStack>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="black">Raça:</FormLabel>
            <Input 
              name="raca"
              value={pet.raca}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="black">Cor:</FormLabel>
            <Input 
              name="cor"
              value={pet.cor}
              onChange={handleChange}
              bg="#FBF2EC"
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel color="black">Observações:</FormLabel>
          <Input 
            name="observacao"
            value={pet.observacao}
            onChange={handleChange}
            bg="#FBF2EC"
            height="100px"
            as="textarea"
          />
        </FormControl>
      </Stack>
    </Box>
  );
};
