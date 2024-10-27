import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type ResourceAnswerTP } from 'shared/types/entities/learnTypes';

const resourceAnswerRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllResource: build.query<ResourceAnswerTP[], undefined>({
      query: () => ({
        url: 'resource/link/answer'
      }),
      providesTags: ['resourceAnswer']
    })
  })
});

export const { useGetAllResourceQuery } = resourceAnswerRtqQueryApi;
