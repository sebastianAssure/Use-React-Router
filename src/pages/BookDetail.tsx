import { useNavigate, useParams } from "react-router-dom";
import { books } from "../data/Books";
import { useEffect } from "react";

export default function BookDetail() {
  const { id } = useParams<string>();
  const book = books.find((b) => b.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!book) {
      navigate('/not-found');
    }
  }, [book, navigate]);

  
  if (!book) return null;

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col items-center border rounded-xl p-8 shadow hover:shadow-lg transition bg-white">
        <h3 className="text-xl font-semibold text-teal-600">
          {book.title}
        </h3>
        <p className="text-sm text-gray-700 mt-1">by {book.author}</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {book.description}
        </p>
      </div>
    </div>
  );
}
