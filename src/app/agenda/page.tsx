'use client';

import React, { useState } from 'react';
import { Stack, Box, Flex } from '@chakra-ui/react';
import Navbar from '../_components/navbar';
import AppointmentForm from '../_components/AppointmentForm';
import CalendarComponent from '../_components/CalendarComponent';
import Footer from '../_components/footer';

const AgendaPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [tutorName, setTutorName] = useState("João Silva"); // Simulação do nome do tutor
  const [petName, setPetName] = useState("Rex"); // Simulação do nome do pet

  const handleDateRangeChange = (start: Date, end: Date) => {
    setStartDate(start);
    setEndDate(end);
  };

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
          spacing={10}
        >
          <Box width="50%" height="100%">
            <CalendarComponent
              startDate={startDate}
              endDate={endDate}
              onDateRangeChange={handleDateRangeChange}
            />
          </Box>
          <Box width="50%" height="100%">
            <AppointmentForm
              startDate={startDate}
              endDate={endDate}
              tutorName={tutorName}
              petName={petName}
              onDateChange={handleDateRangeChange}
            />
          </Box>
        </Flex>
      </Stack>
      <Footer/>
    </>
  );
};

export default AgendaPage;
