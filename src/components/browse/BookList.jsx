import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services/openlibrary.js";
import noCoverAvailable from "../../assets/noCoverAvailable.png";
import line2 from "../../assets/line2.png";

function BookList() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("old");
  const [grid, setGrid] = useState(true);

  const [inputPage, setInputPage] = useState("");

  const limit = 15;

  // const queryClient = useQueryClient();

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["books", page, limit, sort],
    queryFn: () => fetchBooks({ page, limit, sort }),
  });

  const handleJumpToPage = (e) => {
    e.preventDefault(); // Prevent page refresh

    const pageNum = Number(inputPage); // Convert input to number
    const total = data?.totalPages || 1;

    // Validate: is it a number? is it between 1 and totalPages?
    if (pageNum >= 1 && pageNum <= total) {
      setPage(pageNum); // Jump to the page
      setInputPage(""); // Clear the input
    } else {
      // Optional: show error message
      alert(`Please enter a number between 1 and ${total}`);
      setInputPage(""); // Clear the input
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500">
        <h2>Error: {error.message}'n Please try again later.</h2>
      </div>
    );
  }

  const { books, totalItems, totalPages } = data;

  const renderBooks = () => {
    return books?.map((book, index) => (
      <div
        key={index}
        className={`bg-[#EEE8DE] p-5 shadow-xl rounded text-center ${grid ? "" : "mb-2"}`}
      >
        {book ? (
          <div
            className={`${grid ? "" : "flex justify-start items-start gap-2"}`}
          >
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className={`rounded w-50 h-70 border border-black ${grid ? "mx-auto" : ""}`}
              />
            ) : (
              <img
                src={noCoverAvailable}
                alt="No Cover Available"
                className={`rounded w-50 h-70 border border-black ${grid ? "mx-auto" : ""}`}
              />
            )}
            <div className={`${grid ? "" : "flex flex-col items-start"}`}>
              <h3
                className="font-bold text-sm lg:text-lg line-clamp-1 cursor-default"
                title={book.title}
              >
                {book.title || "Unknown Title"}
              </h3>
              {book.first_publish_year > 0 && (
                <p className="text-sm lg:text-md text-gray-600">
                  {book.first_publish_year}
                </p>
              )}
              <p className="text-sm lg:text-md text-gray-600 line-clamp-1">
                {book.author_name?.[0] || "Unknown Author"}
              </p>
              <img
                src={line2}
                alt="Line Divider"
                className={`py-2 w-30 ${grid ? "mx-auto" : ""}`}
              />
              <a
                href={`https://openlibrary.org/books/${book.cover_edition_key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm lg:text-lg"
              >
                View Details
              </a>
            </div>
          </div>
        ) : (
          <span className="text-gray-300 text-sm">Empty slot</span>
        )}
      </div>
    ));
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((old) => old - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((old) => old + 1);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1); // Reset to first page when sort changes
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header Upper */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <h2 className="text-4xl">All Works</h2>
        {/* Grid/List */}
        <div className="border border-black rounded-lg overflow-hidden">
          <button
            className={`cursor-pointer px-3 py-1.5 ${grid ? "bg-black text-white" : ""}`}
            onClick={() => {
              setGrid(true);
            }}
          >
            ⊞ Grid
          </button>
          <button
            className={`cursor-pointer px-3 py-1.5 ${grid ? "" : "bg-black text-white"}`}
            onClick={() => {
              setGrid(false);
            }}
          >
            ☰ List
          </button>
        </div>
      </div>
      {/* Header Bottom */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <h1 className="text-2xl font-bold italic">
          Books Published from 1440 to 1929
        </h1>
        {/* Sort dropdown */}
        <select
          value={sort}
          onChange={(e) => handleSortChange(e)}
          className="border rounded-lg px-3 py-1.5 text-sm"
        >
          <option value="old">Sort by: 📅 Oldest First</option>
          <option value="new">Sort by: 🆕 Newest First</option>
          <option value="title">Sort by: 📚 Title (A-Z)</option>
        </select>
      </div>

      {/* Total books count */}
      <div className="text-sm text-gray-500 mb-4">
        Total: {totalItems} books
        {isFetching && (
          <span className="ml-2 text-blue-500">(Updating...)</span>
        )}
      </div>

      <div
        className={`
        block
        ${grid ? "grid grid-col-1 tablet:grid-cols-3 desktop:grid-cols-5 gap-4" : ""}
        `}
      >
        {renderBooks()}
      </div>

      {/* Pagination bar */}
      <div className="flex justify-end items-center mt-6 py-4 border-t">
        <div className="flex gap-2">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>

          {/* <form onSubmit={handleJumpToPage} className="flex items-center gap-1">
            <input
              type="text"
              value={inputPage}
              placeholder={String(page)} // Shows current page as placeholder
              className="w-12 text-center border rounded px-1 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Jump to page number"
            />
          </form> */}

          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookList;
