
import { Box, Text, Button } from '@chakra-ui/react';

interface Hospedagem {
  id: string;
  titulo: string;
  data: string;
  status: string;
  pet: string;
  tutor: string;
}

interface CardHospedagemUserProps {
  hospedagem: Hospedagem;
  formatarData: (dataString: string) => string;
}

const CardHospedagemUser = ({ hospedagem, formatarData }: CardHospedagemUserProps) => {
  return (
    <Box 
      key={hospedagem.id} 
      p={4} 
      borderWidth="1px" 
      borderRadius="md" 
      bg="white" 
      borderColor="#CB4817" 
      width="100%" 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center"
    >
      <Text fontWeight="bold" color="#CB4817">{hospedagem.titulo}</Text>
      <Text color="#6C722B">Data: {formatarData(hospedagem.data)}</Text>
      <Text color="#6C722B">Tutor: {hospedagem.tutor}</Text>
      <Text color="#6C722B">Pet: {hospedagem.pet}</Text>
      <Text color="#F2933C">Status: {hospedagem.status}</Text>
      <Button colorScheme="teal" bg="#CB4817" _hover={{ bg: '#F2933C' }}>Cancelar</Button>
    </Box>
  );
};

export default CardHospedagemUser;
