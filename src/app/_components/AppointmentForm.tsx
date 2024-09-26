'use client';

import React, { useState, useEffect } from 'react';
import { Stack, Input, Button, Text, Textarea, Box, Select } from '@chakra-ui/react';
import moment from 'moment';

interface AppointmentFormProps {
  startDate: Date | null;
  endDate: Date | null;
  tutorName: string;
  selectedPet: string; // Alterado para um único pet selecionado
  petOptions: string[]; // Opções de pets disponíveis
  onDateChange: (start: Date, end: Date) => void;
  onPetChange: (selectedPet: string) => void; // Função para atualizar o pet selecionado
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ startDate, endDate, tutorName, selectedPet, petOptions, onDateChange, onPetChange }) => {
  const [localStartDate, setLocalStartDate] = useState<string>(startDate ? startDate.toLocaleDateString('pt-BR') : '');
  const [localEndDate, setLocalEndDate] = useState<string>(endDate ? endDate.toLocaleDateString('pt-BR') : '');

  useEffect(() => {
    setLocalStartDate(startDate ? startDate.toLocaleDateString('pt-BR') : '');
    setLocalEndDate(endDate ? endDate.toLocaleDateString('pt-BR') : '');
  }, [startDate, endDate]);

  const handleDateChange = (type: 'start' | 'end', value: string) => {
    const date = moment(value, 'DD/MM/YYYY').toDate();
    if (type === 'start') {
      setLocalStartDate(value);
      onDateChange(date, endDate || date);
    } else {
      setLocalEndDate(value);
      onDateChange(startDate || date, date);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Box
      as="form"
      bg="white"
      padding={8}
      borderRadius="md"
      boxShadow="md"
      width="100%"
      maxWidth="500px"
      margin="0 auto"
      onSubmit={handleSubmit}
    >
      <Stack spacing={4}>
        <Text fontWeight="bold">Nome do Tutor</Text>
        <Input value={tutorName} readOnly placeholder="Nome do Tutor" />

        <Text fontWeight="bold">Nome do Pet</Text>
        <Select value={selectedPet} onChange={(e) => onPetChange(e.target.value)} placeholder="Selecione um Pet">
          {petOptions.map((pet) => (
            <option key={pet} value={pet}>
              {pet}
            </option>
          ))}
        </Select>

        <Text fontWeight="bold">Data de Entrada</Text>
        <Input
          type="text"
          value={localStartDate}
          onChange={(e) => handleDateChange('start', e.target.value)}
          placeholder="Data de Entrada"
        />

        <Text fontWeight="bold">Data de Saída</Text>
        <Input
          type="text"
          value={localEndDate}
          onChange={(e) => handleDateChange('end', e.target.value)}
          placeholder="Data de Saída"
        />

        <Text fontWeight="bold">Observação</Text>
        <Textarea placeholder="Observação" />

        <Button
          type="submit"
          bg="var(--orange1)"
          color="white"
          _hover={{ bg: "var(--orange2)" }}
        >
          Agendar
        </Button>
      </Stack>
    </Box>
  );
};

export default AppointmentForm;