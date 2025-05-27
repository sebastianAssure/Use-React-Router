import { BookList } from "../components/BookList";

export default function Books() {
  return (
    <>
    <div className="flex flex-col items-center gap-5 my-5">
      <h2 className="text-3xl font-bold">Books</h2>
      <BookList></BookList>
      </div>
    </>
  );
}
