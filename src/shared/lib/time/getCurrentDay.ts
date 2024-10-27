import { DateTime } from 'luxon';

export function getCurrentDay(): string {
  const now = DateTime.local();
  const formattedDate = now.toFormat('dd.MM.yyyy');

  return formattedDate;
}
