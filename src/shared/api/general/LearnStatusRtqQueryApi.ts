import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type StatusTvP } from 'shared/types/entities/learnTypes';

const learnTypeRtqQueryApi = rtkQueryApi.injectEndpoints?.({
  endpoints: (build) => ({
    getAllLearnStatus: build.query<StatusTvP[], undefined>({
      query: () => ({
        url: 'resource/status'
      })
    })
  })
});

export const { useGetAllLearnStatusQuery } = learnTypeRtqQueryApi;
