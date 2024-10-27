import { type Dayjs } from 'dayjs';

export const getDateInFormatTwoNumber = (value: Dayjs): string => {
  // Use padStart to ensure day and month are two digits with leading zero
  const targetDate = `${value.date()}`.padStart(2, '0');
  const targetMonth = `${value.month() + 1}`.padStart(2, '0');

  return `${targetDate}.${targetMonth}`;
};
