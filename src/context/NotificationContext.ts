import { createContext } from "react";
import type { NotificationContextType } from "../types/Notification";

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
