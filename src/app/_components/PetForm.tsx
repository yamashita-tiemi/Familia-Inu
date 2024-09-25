// components/PetForm.tsx

'use client';

import { Box, Stack, Input, FormControl, FormLabel, HStack, Heading, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { cadastro } from '../cadastro/cadastro-service'; // Ajuste o caminho conforme necessário

export const PetForm = () => {
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
    <Box bg="#6C722B" p={6} borderRadius="md" maxWidth="600px" mx="auto" boxShadow="lg">
      <Heading fontWeight="normal" fontSize="2xl" mb={4} textAlign="left" color="#FBF2EC">Pet</Heading>
      <Stack spacing={4}>
        <HStack spacing={4}>
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
            />
          </FormControl>
        </HStack>
        <HStack spacing={4}>
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
          />
        </FormControl>
        <FormControl>
          <Button 
            margin="0 auto"
            bg="#CB4817" 
            color="white" 
            width="28em" 
            _hover={{ bg: "#F2933C" }} 
            onClick={registrarPet} // Chama a função de registro ao clicar
          >
            Registrar
          </Button>
        </FormControl>
      </Stack>
    </Box>
  );
};