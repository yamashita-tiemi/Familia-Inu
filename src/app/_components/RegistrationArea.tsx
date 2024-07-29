// src/app/_components/RegistrationArea.tsx

'use client';

import { Stack, Button, Heading } from '@chakra-ui/react';
import { TutorForm } from './TutorForm';
import { PetForm } from './PetForm';

const RegistrationArea = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Stack 
      spacing={8} 
      padding={8} 
      align="center" 
      maxWidth="100%" 
      margin="0 auto" 
      bg="#A6AE4F" 
      minHeight="100vh"
    >
      <Heading textAlign="center" color="#CB4817">Cadastre-se</Heading>
      <Stack direction={["column", "row"]} spacing={4} width="80%">
        <TutorForm />
        <PetForm />
      </Stack>
      <Button 
        bg="#CB4817" 
        color="white" 
        width="20em" 
        _hover={{ bg: "#F2933C" }} // Optional: change color on hover
        onClick={handleSubmit}
      >
        Registrar
      </Button>
    </Stack>
  );
};

export default RegistrationArea;
