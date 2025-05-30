import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function TriggerButton() {
  const context = useContext(NotificationContext);

  if (!context) return null;

  const { showNotification } = context;

  return (
    <button
      onClick={() => showNotification("This is a message from the main content!", "info")}
      className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 cursor-pointer"
    >
      Trigger
    </button>
  );
}
