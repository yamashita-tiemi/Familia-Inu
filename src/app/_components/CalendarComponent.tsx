import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importar a localidade em português
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('pt-br'); // Definir a localidade para português
const localizer = momentLocalizer(moment);

interface CalendarComponentProps {
  startDate: Date | null;
  endDate: Date | null;
  onDateRangeChange: (start: Date, end: Date) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ startDate, endDate, onDateRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date } | null>(null);

  useEffect(() => {
    if (startDate && endDate) {
      setSelectedRange({ start: startDate, end: endDate });
    }
  }, [startDate, endDate]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const startDate = moment(start).startOf('day').toDate();
    const endDate = moment(end).startOf('day').toDate();

    // Se a data final for anterior à inicial, troca
    if (moment(endDate).isBefore(startDate)) {
      setSelectedRange({ start: endDate, end: startDate });
    } else {
      setSelectedRange({ start: startDate, end: endDate });
    }

    onDateRangeChange(startDate, endDate);
  };

  const dayStyleGetter = (date: Date) => {
    if (selectedRange) {
      if (date.getTime() === selectedRange.start.getTime()) {
        return { style: { backgroundColor: 'rgba(203, 72, 23, 0.8)', color: 'white' } };
      }
      if (date.getTime() === selectedRange.end.getTime()) {
        return { style: { backgroundColor: 'rgba(203, 72, 23, 0.8)', color: 'white' } };
      }
      if (date >= selectedRange.start && date <= selectedRange.end) {
        return { style: { backgroundColor: 'rgba(203, 72, 23, 0.3)' } };
      }
    }
    if (moment(date).isSame(moment(), 'day')) {
      return { style: { backgroundColor: 'rgba(203, 72, 23, 0.2)' } };
    }
    return {};
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
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
        toolbar={false} // Remove o cabeçalho padrão
      />
    </div>
  );
};

export default CalendarComponent;
