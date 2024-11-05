import React, { createContext, useState } from 'react';

// Tạo Context cho thông báo
export const NotificationContext = createContext();

// Component bao bọc để cung cấp Context
export const NotificationProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Hàm hiển thị thông báo
  const showSuccessNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        notificationMessage,
        showSuccessNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};