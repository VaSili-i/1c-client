import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkQueryApi = createApi({
  reducerPath: 'rtkApi',

  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token != null) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    }
  }),

  endpoints: (build) => ({}),
  tagTypes: ['todo', 'repeat', 'learnType', 'habit', 'resource', 'resourceAnswer', 'user']
});
