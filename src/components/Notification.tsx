// components/Notification.tsx
import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { IoIosAlert } from "react-icons/io";
import { BiSolidErrorAlt } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

export default function Notification() {
  const context = useContext(NotificationContext);

  if (!context) return null;

  const { notification, clearNotification } = context;

  if (!notification) return null;

  const { message, type } = notification;

  const styles = {
    success: {
      bg: "bg-green-500",
      icon: <FaCheckCircle size={20} />,
    },
    error: {
      bg: "bg-red-500",
      icon: <BiSolidErrorAlt size={20} />,
    },
    info: {
      bg: "bg-blue-500",
      icon: <IoIosAlert size={20} />,
    },
  };

  const current = styles[type];

  return (
    <div className={`${current.bg} flex justify-between items-center text-white gap-4 border-2 p-3 text-center fixed top-0 right-0`}>
      {current.icon}
      <span>{message}</span>
      <button onClick={clearNotification} className="cursor-pointer hover:text-gray-200">X</button>
    </div>
  );
}
