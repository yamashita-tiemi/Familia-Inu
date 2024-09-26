// pages/agenda.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { Stack, Box, Flex } from '@chakra-ui/react';
import { Navbar } from '../_components/navbar';
import AppointmentForm from '../_components/AppointmentForm';
import CalendarComponent from '../_components/CalendarComponent';
import Footer from '../_components/footer';
import { validateAdmin, validateUser } from '../service/user-auth-service';

const AgendaPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  // Simulação dos dados do usuário logado
  const tutorName = "João Silva"; // Nome do tutor logado
  const petOptions = ["Rex", "Bella", "Max"]; // Pets cadastrados pelo tutor

  useEffect(() => {
    verificaTokenUsuario();
  }, []); 

  const handleDateRangeChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  async function verificaTokenUsuario(){
    const token = localStorage.getItem("TOKEN");
    if(!token){
      alert("Token da sessão expirou. Faça login novamente.");
      window.location.href = '/login';
    }

    try {
      const res = await validateUser();
      console.log("RESPONSE USER:", res)
    } catch (error) {
      console.error(error);
      alert("Token da sessão expirou. Faça login novamente.");
      window.location.href = '/login';
    }
  }

  return (
    <>
      <Navbar />
      <Stack
        spacing={0}
        align="center"
        maxWidth="100%"
        margin="0 auto"
        bg="#A6AE4F"
        minHeight="100vh"
        paddingTop="70px" // Para garantir que o conteúdo não fique oculto atrás da navbar fixa
      >
        <Flex
          direction="row"
          width="100%"
          padding={10}
          bg="#F9F3EC"
          borderRadius="md"
          boxShadow="md"
        >
          <Box width="50%" height="100%">
            <CalendarComponent
              onDateRangeChange={handleDateRangeChange}
            />
          </Box>
          <Box width="50%" height="100%">
            <AppointmentForm
              startDate={startDate}
              endDate={endDate}
              tutorName={tutorName}
              petName="" // Inicialmente vazio ou pode ser preenchido com uma opção padrão
              petOptions={petOptions} // Passando as opções de pets
              onDateChange={handleDateRangeChange}
            />
          </Box>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};

export default AgendaPage;