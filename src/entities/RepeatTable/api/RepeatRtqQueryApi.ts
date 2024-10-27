import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type RepeatLearnTp } from 'shared/types/entities/learnTypes';

const todoRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllRepeat: build.query<RepeatLearnTp[], undefined>({
      query: () => ({
        url: 'learn/repeat'
      }),
      providesTags: ['repeat']
    })
  })
});

export const { useGetAllRepeatQuery } = todoRtqQueryApi;
