import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type LearnStatusTp } from 'shared/types/entities/learnTypes';

const learnTypeRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllLearnStatus: build.query<LearnStatusTp[], undefined>({
      query: () => ({
        url: 'learn/status'
      })
    })
  })
});

export const { useGetAllLearnStatusQuery } = learnTypeRtqQueryApi;
