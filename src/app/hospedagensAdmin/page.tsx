'use client';

import { Box, Heading, Stack, Button, Flex } from '@chakra-ui/react';
import { Navbar } from '../_components/navbar';
import Footer from '../_components/footer';
import HospedagemItem from '../_components/HospedagemItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';

interface Hospedagem {
  id: string;
  titulo: string;
  data: string; 
  status: string;
  pet: string;  
  tutor: string; 
}

const HospedagensAdmin = () => {
  const [hospedagens, setHospedagens] = useState<Hospedagem[]>([
    {
      id: '1',
      titulo: 'Hospedagem de Teste 1',
      data: '2024-09-25', 
      status: 'Pendente',
      pet: 'Rex',  
      tutor: 'João Silva', 
    },
    {
      id: '2',
      titulo: 'Hospedagem de Teste 2',
      data: '2024-09-26', 
      status: 'Pendente',
      pet: 'Bella',  
      tutor: 'Maria Oliveira', 
    },
    {
      id: '3',
      titulo: 'Hospedagem de Teste 3',
      data: '2024-09-27', 
      status: 'Pendente',
      pet: 'Max',  
      tutor: 'Carlos Pereira', 
    },
  ]);

  const formatarData = (dataString: string) => {
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const confirmarHospedagem = (id: string) => {
    setHospedagens(prev =>
      prev.map(hospedagem =>
        hospedagem.id === id ? { ...hospedagem, status: 'Confirmada' } : hospedagem
      )
    );
    // Aqui você pode adicionar a lógica para confirmar a hospedagem 
  };

  const recusarHospedagem = (id: string) => {
    setHospedagens(prev =>
      prev.map(hospedagem =>
        hospedagem.id === id ? { ...hospedagem, status: 'Recusada' } : hospedagem
      )
    );
    // Aqui você pode adicionar a lógica para recusar a hospedagem 
  };

  return (
    <>
      <Navbar />
      <Box 
        bg="#d7dca1" 
        minHeight="100vh" 
        padding={8} 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        marginTop="70px"
      >
        <Heading mb={6} color="#CB4817">Todas as Hospedagens</Heading>
        <Stack spacing={4} width="100%">
          {hospedagens.map((hospedagem) => (
            <Flex key={hospedagem.id} justifyContent="space-between" alignItems="center">
              <HospedagemItem 
                hospedagem={hospedagem} 
                formatarData={formatarData}
              />
              <Flex>
                <Button 
                  colorScheme="green" 
                  onClick={() => confirmarHospedagem(hospedagem.id)} 
                  variant="ghost"
                  aria-label="Confirmar"
                >
                  <FontAwesomeIcon icon={faCheckCircle} color="#6C722B" size="xl" />
                </Button>
                <Button 
                  colorScheme="red" 
                  onClick={() => recusarHospedagem(hospedagem.id)} 
                  variant="ghost"
                  aria-label="Recusar"
                >
                  <FontAwesomeIcon icon={faTimesCircle} color="#F2933C" size="xl" />
                </Button>
              </Flex>
            </Flex>
          ))}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default HospedagensAdmin;