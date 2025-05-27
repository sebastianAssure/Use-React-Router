import { books } from "../data/Books";
import { Link } from "react-router-dom";

export const BookList = () => {
  return (
      <div className="grid gap-4 sm:grid-cols-2">
        {books.map((book) => (
          <div className="flex justify-center border rounded-xl p-8 shadow hover:shadow-lg transition bg-white">
            <Link to={`/books/${book.id}`}>
              <h3 className="text-xl font-semibold text-teal-600 hover:underline">
                {book.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">by {book.author}</p>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {book.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
  );
}
