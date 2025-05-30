import { useContext } from "react";
import { Link } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";

export default function NotFound() {
  const context = useContext(NotificationContext);

  if (!context) throw new Error("NotificationContext is missing");

  const { showNotification } = context;

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Page not found</p>
      <Link
        to="/"
        className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
      >
        Go Home
      </Link>
      <button
      className="px-6 py-2 mt-5 bg-teal-600 rounded hover:bg-teal-700 text-white transition cursor-pointer"
        onClick={() => showNotification("Error from NotFound Page!", "error")}
      >Call Notify</button>
    </div>
  );
}
