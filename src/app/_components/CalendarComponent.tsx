import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, useColorModeValue, Text, ChakraProvider, extendTheme, HStack, Button, Flex } from '@chakra-ui/react';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

interface CalendarComponentProps {
  onDateRangeChange: (start: Date | null, end: Date | null) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onDateRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });
  const [currentDate, setCurrentDate] = useState(new Date());

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const primaryColor = useColorModeValue('orange.500', 'orange.300');
  const hoverColor = useColorModeValue('orange.100', 'orange.800');
  const selectColor = useColorModeValue('orange.400', 'orange.900');

  const theme = extendTheme({
    styles: {
      global: {
        '.rbc-day-bg': {
          _hover: {
            backgroundColor: hoverColor,
          },
        },
        '.selected-start': {
          backgroundColor: primaryColor,
          color: 'white',
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
        },
        '.selected-end': {
          backgroundColor: primaryColor,
          color: 'white',
          borderTopRightRadius: '50%',
          borderBottomRightRadius: '50%',
        },
        '.selected-interval': {
          backgroundColor: selectColor,
        },
        '.today': {
          backgroundColor: 'rgba(203, 72, 23, 0.2)',
        },
        '.past-date': {
          backgroundColor: 'gray.200',
          pointerEvents: 'none',
        },
      },
    },
  });

  useEffect(() => {
    onDateRangeChange(selectedRange.start, selectedRange.end);
  }, [selectedRange, onDateRangeChange]);

  const handleSelectSlot = ({ start }: { start: Date }) => {
    const selectedDate = moment(start).startOf('day').toDate();
    const today = moment().startOf('day');

    if (moment(selectedDate).isBefore(today)) {
      return; // Ignore dates before today
    }

    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: selectedDate, end: null });
    } else {
      if (moment(selectedDate).isSameOrAfter(selectedRange.start)) {
        setSelectedRange(prev => ({ start: prev.start, end: selectedDate }));
      } else {
        setSelectedRange(prev => ({ start: selectedDate, end: prev.start }));
      }
    }
  };

  const dayStyleGetter = (date: Date) => {
    const baseStyle = {
      style: {
        transition: 'all 0.2s',
        cursor: 'pointer',
      },
    };

    const classNames = [];
    const today = moment().startOf('day');

    if (moment(date).isBefore(today)) {
      classNames.push('past-date');
    }

    if (selectedRange.start && selectedRange.end) {
      if (moment(date).isSame(selectedRange.start, 'day')) {
        classNames.push('selected-start');
      }
      if (moment(date).isSame(selectedRange.end, 'day')) {
        classNames.push('selected-end');
      }
      if (moment(date).isBetween(selectedRange.start, selectedRange.end, null, '[]')) {
        classNames.push('selected-interval');
      }
    } else if (selectedRange.start && moment(date).isSame(selectedRange.start, 'day')) {
      classNames.push('selected-start');
    }
    
    if (moment(date).isSame(today, 'day')) {
      classNames.push('today');
    }

    return {
      ...baseStyle,
      className: classNames.join(' ')
    };
  };

  const handleNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'months').toDate());
  };

  const handlePrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'months').toDate());
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bgColor} color={textColor} p={4} borderRadius="md" boxShadow="md" height="600px" overflow="hidden">
        
        <Flex justifyContent="space-between" mb={4}>
          <Button onClick={handlePrevMonth} color="white" _hover={{ bg: "var(--orange2)" }} bg="#CB4817" >Mês Anterior</Button>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">{moment(currentDate).format('MMMM YYYY')}</Text>
          <Button onClick={handleNextMonth} color="white" _hover={{ bg: "var(--orange2)" }} bg="#CB4817" >Próximo Mês</Button>
        </Flex>

        <Box style={{ height: 'calc(100% - 70px)', overflowY: 'auto' }}> {/* Ajuste a altura do calendário */}
          <Calendar
            localizer={localizer}
            selectable
            onSelectSlot={handleSelectSlot}
            style={{ height: '100%', overflowX: 'hidden' }} // Adicione overflowX para evitar rolagem horizontal
            defaultView="month"
            views={['month']}
            date={currentDate}
            popup
            dayPropGetter={dayStyleGetter}
            components={{
              toolbar: () => null 
            }}
            messages={{
              allDay: 'Todo o dia',
              previous: 'Anterior',
              next: 'Próximo',
              today: '',
              month: 'Mês',
              week: 'Semana',
              day: 'Dia',
              agenda: 'Agenda',
              showMore: (total) => `+ Mais ${total}`
            }}
          />
        </Box>
      </Box>
      
      <Box mt={4}>
        <Text mt={2} fontSize={12.8}>
          A hospedagem conta como entrada às 12:00 (meio-dia) da data de check-in e saída às 12:00 (meio-dia) da data de check-out.
        </Text>
        <HStack spacing={4} fontSize={10} color="gray.600">
          <Text>Check-in: {selectedRange.start ? moment(selectedRange.start).format('DD/MM/YYYY') : 'Não selecionada'}</Text>
          <Text>Check-out: {selectedRange.end ? moment(selectedRange.end).format('DD/MM/YYYY') : 'Não selecionada'}</Text>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default CalendarComponent;