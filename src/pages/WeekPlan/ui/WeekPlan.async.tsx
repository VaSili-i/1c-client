import { lazy } from 'react';

export const WeekPlanAsync = lazy(async () => await import('./WeekPlan'));
