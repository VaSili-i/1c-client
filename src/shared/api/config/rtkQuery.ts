import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: __API__,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');

    if (token != null) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }
});

// Обернем базовый запрос для перехвата ошибки 401
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Перенаправление на страницу авторизации
    window.location.href = '/login';
  }

  return result;
};

export const rtkQueryApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: baseQueryWithReauth, // Используем обернутую функцию
  endpoints: (build) => ({}),
  tagTypes: ['todo', 'repeat', 'learnType', 'habit', 'resource', 'resourceAnswer', 'user']
});
