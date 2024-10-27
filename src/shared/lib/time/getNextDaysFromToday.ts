import { DateTime } from 'luxon';

export function getNextDaysFromToday(countDays: number): string[] {
  const currentDate = DateTime.local();

  const sevenDaysArray = [];

  for (let i = 0; i < countDays; i++) {
    const date = currentDate.plus({ days: i });
    const formattedDate = date.toFormat('yyyy-MM-dd');
    sevenDaysArray.push(formattedDate);
  }

  return sevenDaysArray;
}
