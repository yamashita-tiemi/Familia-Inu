'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, useColorModeValue, Text, ChakraProvider, extendTheme } from '@chakra-ui/react';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

interface CalendarComponentProps {
  onDateRangeChange: (start: Date | null, end: Date | null) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onDateRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const primaryColor = useColorModeValue('orange.500', 'orange.300');
  const hoverColor = useColorModeValue('orange.100', 'orange.800');
  const selectColor = useColorModeValue('orange.400', 'orange.900'); // Cor laranja fixa para o intervalo

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

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bgColor} color={textColor} p={4} borderRadius="md" boxShadow="md" height="600px">
        <Calendar
          localizer={localizer}
          selectable
          onSelectSlot={handleSelectSlot}
          style={{ height: '100%' }}
          defaultView="month"
          views={['month']}
          popup
          dayPropGetter={dayStyleGetter}
          messages={{
            allDay: 'Todo o dia',
            previous: 'Anterior',
            next: 'Próximo',
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            agenda: 'Agenda',
            showMore: (total) => `+ Mais ${total}`
          }}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </Box>
      <Box mt={4}>
        <Text>Data de Check-in: {selectedRange.start ? moment(selectedRange.start).format('DD/MM/YYYY') : 'Não selecionada'}</Text>
        <Text>Data de Check-out: {selectedRange.end ? moment(selectedRange.end).format('DD/MM/YYYY') : 'Não selecionada'}</Text>
        <Text mt={2} fontSize="sm" color="gray.600">
          A hospedagem conta como entrada às 12:00 (meio-dia) da data de check-in e saída às 12:00 (meio-dia) da data de check-out.
        </Text>
      </Box>
    </ChakraProvider>
  );
};

const CustomToolbar = ({ label }: { label: string }) => {
  return (
    <Box mb={4} textAlign="center">
      <Text fontSize="xl" fontWeight="bold">{label}</Text>
    </Box>
  );
};

export default CalendarComponent;
