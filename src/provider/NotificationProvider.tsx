import { useState, useEffect, useRef, type ReactNode } from "react";
import type {
  NotificationType,
  Notification,
} from "../types/Notification";
import { NotificationContext } from "../context/NotificationContext";

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      clearNotification();
    }, 3000);
  };

  const clearNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
