'use client';

import { Box, Stack, Input, FormControl, FormLabel, HStack, Heading, Button } from '@chakra-ui/react';

interface PetFormProps {
  pet: {
    nome: string;
    raca: string;
    porte: string;
    cor: string;
    observacao: string;
  };
  onPetChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const PetForm = ({ pet, onPetChange }: PetFormProps) => {
  return (
    <Box bg="#6C722B" p={6} borderRadius="md" maxWidth="600px" mx="auto" boxShadow="lg">
      <Heading fontWeight="normal" fontSize="2xl" mb={4} textAlign="left" color="#FBF2EC" >Pet</Heading>
      <Stack spacing={4}>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="#FFFFFF">Nome do Pet:</FormLabel>
            <Input
              name="nome"
              value={pet.nome}
              onChange={onPetChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF">Porte:</FormLabel>
            <Input
              name="porte"
              value={pet.porte}
              onChange={onPetChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
        </HStack>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="#FFFFFF">Raça:</FormLabel>
            <Input
              name="raca"
              value={pet.raca}
              onChange={onPetChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#FFFFFF">Cor:</FormLabel>
            <Input
              name="cor"
              value={pet.cor}
              onChange={onPetChange}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel color="#FFFFFF">Observações:</FormLabel>
          <Input
            name="observacao"
            value={pet.observacao}
            onChange={onPetChange}
            bg="#FBF2EC"
            borderColor="#A6AE4F"
            _placeholder={{ color: '#A6AE4F' }}
            _focus={{ borderColor: "#CB4817" }}
            height="100px"
            as="textarea"
          />
        </FormControl>
      </Stack>
    </Box>
  );
};
