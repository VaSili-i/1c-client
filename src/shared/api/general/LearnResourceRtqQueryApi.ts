import { rtkQueryApi } from 'shared/api/config/rtkQuery';

import { type LearnResourceTp } from 'shared/types/entities/learnTypes';

const learnResourceRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllLearnResource: build.query<LearnResourceTp[], undefined>({
      query: () => ({
        url: 'learn/resource'
      })
    }),
    addLearnResource: build.mutation<string, Partial<LearnResourceTp>>({
      query: (learnResource) => ({
        method: 'POST',
        url: 'learn/resource',
        body: learnResource
      })
    })
  })
});

export const { useGetAllLearnResourceQuery, useAddLearnResourceMutation } = learnResourceRtqQueryApi;
