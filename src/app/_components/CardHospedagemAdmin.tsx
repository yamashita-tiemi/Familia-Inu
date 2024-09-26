import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface Hospedagem {
  id: string;
  titulo: string;
  data: string;
  status: string;
  pet: string;
  tutor: string;
}

interface CardHospedagemAdminProps {
  hospedagem: Hospedagem;
  formatarData: (dataString: string) => string;
  confirmarHospedagem: (id: string) => void;
  recusarHospedagem: (id: string) => void;
}

const CardHospedagemAdmin = ({ hospedagem, formatarData, confirmarHospedagem, recusarHospedagem }: CardHospedagemAdminProps) => {
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
    </Box>
  );
};

export default CardHospedagemAdmin;
