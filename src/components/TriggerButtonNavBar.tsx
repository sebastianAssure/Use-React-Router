import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function TriggerButtonNavbar() {
  const context = useContext(NotificationContext);

  if (!context) return null;

  const { showNotification } = context;

  return (
    <button
      onClick={() => showNotification("This is a message from the navbar!", "success")}
      className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Notify from Navbar
    </button>
  );
}
