import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type UserLogTp, type UserTp } from 'shared/types/entities/authTypes';

const habitRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, UserLogTp>({
      query: (user) => ({
        method: 'POST',
        url: 'auth/login',
        body: user
      }),
      invalidatesTags: ['user']
    }),
    registration: build.mutation<any, UserTp>({
      query: (user) => ({
        method: 'POST',
        url: 'auth/register',
        body: user
      }),
      invalidatesTags: ['user']
    })
  })
});

export const { useLoginMutation, useRegistrationMutation } = habitRtqQueryApi;
