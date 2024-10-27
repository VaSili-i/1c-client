import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type ResourceTP } from 'shared/types/entities/learnTypes';

const resourceAnswerRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllResourceLink: build.query<ResourceTP[], undefined>({
      query: () => ({
        url: 'resource/link'
      }),
      providesTags: ['resource']
    })
  })
});

export const { useGetAllResourceLinkQuery } = resourceAnswerRtqQueryApi;
