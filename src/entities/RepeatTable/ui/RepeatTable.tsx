import React from 'react';
import type { Dayjs } from 'dayjs';
import { type CalendarProps, ConfigProvider, Badge, Calendar } from 'antd';
import cls from './RepeatTable.module.scss';
import { useGetAllRepeatQuery } from 'entities/RepeatTable/api/RepeatRtqQueryApi';
import { type RepeatTp } from 'shared/types/entities/learnTypes';
import { getDateInFormatTwoNumber } from 'shared/lib/time/getDateInFormaTwoNumber';

const getListData = (value: Dayjs): RepeatTp[] => {
  const daysEvents = useGetAllRepeatQuery(undefined).data ?? [];
  const targetDay = daysEvents.find((day: any) => day.timeRepeat?.startsWith(getDateInFormatTwoNumber(value)));
  return targetDay?.repeatList ?? [];
};

const getMonthData = (value: Dayjs): number | null => {
  return value.month() === 8 ? 1394 : null;
};

export const RepeatTable: React.FC = () => {
  const monthCellRender = (value: Dayjs): React.ReactNode | null => {
    const num = getMonthData(value);
    return num != null ? (
      <div className={`notes-month ${cls.RepeatTable}`}>
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs): React.ReactNode => {
    const listData = getListData(value);
    console.log(listData);
    return (
      <ul className={`events ${cls.RepeatTable}`}>
        {listData.map((item) => (
          <li key={item.name}>
            <ConfigProvider
              theme={{
                components: {
                  Badge: {
                    colorText: 'var(--main-color)'
                  }
                }
              }}>
              <Badge color={'var(--main-color)'} className={cls.Bange} status={'success'} text={item.name} />
            </ConfigProvider>
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    return info.type === 'date' ? dateCellRender(current) : info.type === 'month' ? monthCellRender(current) : info.originNode;
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Calendar: {
            fullBg: 'var(--up-bg-color)',
            colorText: 'var(--main-color)',
            itemActiveBg: 'var(--reverse-main-color)',
            colorBgContainer: 'var(--main-color)',
            colorFillSecondary: 'var(--delete-color)',
            colorSplit: 'var(--reverse-secondary-color)',
            colorTextTertiary: 'var(--reverse-secondary-color)',
            colorTextLightSolid: 'var(--reverse-secondary-color)',
            colorTextHeading: 'var(--reverse-secondary-color)',
            colorTextDisabled: 'var(--reverse-secondary-color)'
          }
        }
      }}>
      <Calendar className={cls.RepeatTable} cellRender={cellRender} />
    </ConfigProvider>
  );
};
