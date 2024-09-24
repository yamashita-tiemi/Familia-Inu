'use client';

import { Box, Stack, Input, FormControl, FormLabel, HStack, Heading, Button } from '@chakra-ui/react';
import { useState } from 'react';
import {cadastro} from '../cadastro/cadastro-service';

interface TutorFormProps {
  tutor: {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
  };
  onTutorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function TutorForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    
    async function cadastroUsuario() { 
        const tutor = {
            name: nome, 
            email, 
            number: telefone, 
            password: senha
        }
    
        await cadastro(tutor);
    } 
    

  return (
    <Box bg="#6C722B" p={6} borderRadius="md" maxWidth="600px" mx="auto" boxShadow="lg">
      <Heading fontWeight="normal" fontSize="2xl" mb={4} textAlign="left" color="#FBF2EC" >Tutor</Heading>
      <Stack spacing={4} onSubmit={cadastroUsuario}>
        <HStack spacing={4}>
          <FormControl>
            <FormLabel color="#FFFFFF">Nome:</FormLabel>
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
            <FormLabel color="#FFFFFF">Telefone:</FormLabel>
            <Input
              name="telefone"
              type="tel"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              bg="#FBF2EC"
              borderColor="#A6AE4F"
              _placeholder={{ color: '#A6AE4F' }}
              _focus={{ borderColor: "#CB4817" }}
            />
          </FormControl>
        </HStack>
        <FormControl>
        <Button 
          margin="0 auto"
          bg="#CB4817" 
          color="white" 
          width="20em" 
          _hover={{ bg: "#F2933C" }} 
          onClick={cadastroUsuario}
        >
          Registrar
        </Button>
        </FormControl>
      </Stack>
    </Box>
  );
};
