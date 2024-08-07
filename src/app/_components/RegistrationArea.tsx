'use client';

import { Stack, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { TutorForm } from './TutorForm';
import { PetForm } from './PetForm';

const RegistrationArea = () => {
  const [tutor, setTutor] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
  });

  const [pet, setPet] = useState({
    nome: '',
    raca: '',
    porte: '',
    cor: '',
    observacao: '',
  });

  const handleTutorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTutor({ ...tutor, [name]: value });
  };

  const handlePetChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode fazer a submissão dos dados dos formulários
    console.log('Tutor Data:', tutor);
    console.log('Pet Data:', pet);
  };

  return (
    <Stack 
      spacing={10} 
      padding={8} 
      align="center" 
      maxWidth="100%" 
      margin="0 auto" 
      bg="#d7dca1"
      minHeight="100vh"
    >
      <Box 
        width="100%" 
        color="white" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      ></Box>

      {/* Área de Registro */}
      <Stack 
        spacing={8} 
        width="80%" 
        bg="#d7dca1" 
        paddingTop={20}
      >
        <Stack direction={["column", "row"]} spacing={4}>
          <TutorForm tutor={tutor} onTutorChange={handleTutorChange} />
          <PetForm pet={pet} onPetChange={handlePetChange} />
        </Stack>
        <Button 
          margin="0 auto"
          bg="#CB4817" 
          color="white" 
          width="20em" 
          _hover={{ bg: "#F2933C" }} 
          onClick={handleSubmit}
        >
          Registrar
        </Button>
      </Stack>
    </Stack>
  );
};

export default RegistrationArea;
