/*
import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import { ConfigProvider, TimePicker } from 'antd';

const format = 'HH:mm';

interface CustomTimePickerProps {
  label: string;
  changeValue: (value: Record<string, string>) => void;
  className?: string;
  value?: string;
  name?: string;
}

export const CustomTimePicker = (props: CustomTimePickerProps): ReactElement => {
  const { label, changeValue, className, value, name } = props;
  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {}
        }
      }}>
      <TimePicker defaultValue={dayjs('12:00', format)} format={format} />
    </ConfigProvider>
  );
};
*/
