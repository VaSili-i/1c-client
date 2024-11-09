import React, { type ReactElement } from 'react';

const key = 'updatable';

interface NotificationProps {
  message: string;
  description: string;
}

export const Notification = ({ message, description }: NotificationProps): ReactElement => {
  //const [api, contextHolder] = notification.useNotification();

  return (
    <>
      <button>Importen</button>
    </>
  );
};


