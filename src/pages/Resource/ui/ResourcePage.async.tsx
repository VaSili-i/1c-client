import { lazy } from 'react';

export const ResourcePageAsync = lazy(async () => await import('./ResourcePage'));
