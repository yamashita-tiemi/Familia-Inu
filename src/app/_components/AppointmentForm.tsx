import React, { useState, useEffect } from 'react';
import { Stack, Input, Button, Text, Textarea, Box } from '@chakra-ui/react';

interface AppointmentFormProps {
  startDate: Date | null;
  endDate: Date | null;
  tutorName: string;
  petName: string;
  onDateChange: (start: Date, end: Date) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ startDate, endDate, tutorName, petName, onDateChange }) => {
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
      bg="#FFF"
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
        <Input value={petName} readOnly placeholder="Nome do Pet" />

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
          bg="#CB4817"
          color="white"
          _hover={{ bg: "#F2933C" }}
        >
          Agendar
        </Button>
      </Stack>
    </Box>
  );
};

export default AppointmentForm;
