import { rtkQueryApi } from 'shared/api/config/rtkQuery';

import { type LearnResourceTp } from 'shared/types/entities/learnTypes';

const learnMasteringRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMastering: build.query<LearnResourceTp[], undefined>({
      query: () => ({
        url: 'learn/mastering'
      })
    })
  })
});

export const { useGetAllMasteringQuery } = learnMasteringRtqQueryApi;
