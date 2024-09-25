'use client';

import { Box, Heading, Stack } from '@chakra-ui/react';
import { Navbar } from '../_components/navbar';
import Footer from '../_components/footer';
import HospedagemItem from '../_components/HospedagemItem';

interface Hospedagem {
  id: string;
  titulo: string;
  data: string; // Formato original da data
  status: string;
  pet: string; 
  tutor: string;
}

interface MinhasHospedagensProps {
  hospedagens?: Hospedagem[];
}

const MinhasHospedagens = ({ hospedagens = [] }: MinhasHospedagensProps) => {
  // Hospedagem fictícia para exibição
  const hospedagensComPlaceholder = hospedagens.length > 0 ? hospedagens : [
    {
      id: '1',
      titulo: 'Hospedagem de Teste 1',
      data: '2024-09-25', 
      status: 'Confirmada',
      pet: 'Rex',  
      tutor: 'Vitoria',  
    },
    {
      id: '2',
      titulo: 'Hospedagem de Teste 2',
      data: '2024-09-25', 
      status: 'Confirmada',
      pet: 'Rex', 
      tutor: 'Vitoria',  
    },
    {
      id: '3',
      titulo: 'Hospedagem de Teste 3',
      data: '2024-09-25', 
      status: 'Confirmada',
      pet: 'Rex',  
      tutor: 'Vitoria',  
    },
  ];

  // Função para formatar a data
  const formatarData = (dataString: string) => {
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
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
        <Heading mb={6} color="#CB4817">Minhas Hospedagens</Heading>
        <Stack spacing={4} width="100%">
          {hospedagensComPlaceholder.map((hospedagem) => (
            <HospedagemItem 
              key={hospedagem.id} 
              hospedagem={hospedagem} 
              formatarData={formatarData} // Passando a função como prop
            />
          ))}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default MinhasHospedagens;
