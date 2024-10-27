import React, { memo } from 'react';
import { Collapse, ConfigProvider } from 'antd';
import { VStack } from 'shared/ui/Stack';
import { Content } from 'shared/ui/Stack/stackConfig';
import { useGetAllWeekPlanQuery } from 'shared/api/general/WeekPlanRtqQueryApi';

const text = (text: string): any => <p style={{ paddingLeft: 24 }}>{text}</p>;
const WeekPlan: React.FC = () => {
  const { data: items } = useGetAllWeekPlanQuery(undefined);

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            colorTextHeading: 'var(--main-color)',
            colorText: 'var(--secondary-color)',
            headerBg: 'var(--up-bg-color)'
          }
        }
      }}>
      <VStack style={{ height: '100%' }} max justify={Content.START}>
        <Collapse
          items={items?.map((item) => ({ ...item, children: text(item.children) }))}
          bordered={false}
          defaultActiveKey={['1']}
        />
      </VStack>
    </ConfigProvider>
  );
};

export default memo(WeekPlan);
