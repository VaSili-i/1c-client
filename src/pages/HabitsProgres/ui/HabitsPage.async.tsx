import { lazy } from 'react';

export const HabitsPageAsync = lazy(async () => await import('./Habits'));
