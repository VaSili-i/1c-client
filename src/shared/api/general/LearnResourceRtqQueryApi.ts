import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type ResourceTvP } from 'shared/types/entities/learnTypes';

const learnResourceRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllLearnResource: build.query<ResourceTvP[], undefined>({
      query: () => ({
        url: 'resource'
      })
    }),
    addLearnResource: build.mutation<string, Partial<ResourceTvP>>({
      query: (learnResource) => ({
        method: 'POST',
        url: 'resource',
        body: learnResource
      })
    })
  })
});

export const { useGetAllLearnResourceQuery, useAddLearnResourceMutation } = learnResourceRtqQueryApi;
