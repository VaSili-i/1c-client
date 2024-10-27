import React, { type ReactElement } from 'react';
import { Button, notification } from 'antd';

const key = 'updatable';

interface NotificationProps {
  message: string;
  description: string;
}

export const Notification = ({ message, description }: NotificationProps): ReactElement => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (): void => {
    api.open({
      key,
      message,
      description
    });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Importen
      </Button>
    </>
  );
};


