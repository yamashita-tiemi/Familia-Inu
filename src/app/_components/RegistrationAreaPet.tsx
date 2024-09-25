'use client';

import { Stack, Button, Box } from '@chakra-ui/react';
import { PetForm } from './PetForm';

const RegistrationAreaPet = () => {

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
            <PetForm />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RegistrationAreaPet;
