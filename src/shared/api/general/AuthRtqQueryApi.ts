import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type UserLogTp } from 'shared/types/entities/authTypes';

const habitRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, UserLogTp>({
      query: (user) => ({
        method: 'POST',
        url: 'auth/login',
        body: user
      }),
      invalidatesTags: ['user']
    })
  })
});

export const { useLoginMutation } = habitRtqQueryApi;
