import { DateTime } from 'luxon';

export function getTimeFormat(time?: string): string {
  const formattedDate = DateTime.fromISO(time ?? '').toFormat('dd.MM.yyyy');
  return formattedDate;
}
