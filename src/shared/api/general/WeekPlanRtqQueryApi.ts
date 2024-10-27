import { rtkQueryApi } from 'shared/api/config/rtkQuery';

const weekPlanRtqQueryApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getAllWeekPlan: build.query<any[], undefined>({
      query: () => ({
        url: 'reports'
      })
    })
  })
});

export const { useGetAllWeekPlanQuery } = weekPlanRtqQueryApi;
