import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type PriorityTvP } from 'shared/types/entities/learnTypes';

const levelRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllLevel: build.query<PriorityTvP[], undefined>({
      query: () => ({
        url: 'resource/priority',
        transformResponse: (response: any) => response.data.map(({ name, id }: { name: string; id: string }) => ({ id, name }))
      })
    })
  })
});

export const { useGetAllLevelQuery } = levelRtqQueryApi;
