import BookList from "./BookList";

function Content() {
  return (
    <div className="p-9 flex">
      <div className="m-6 p-4 border border-amber-500">
        {/* Browse By */}
        <div>
          <h2 className="uppercase">Browse by</h2>
          <ul>
            <li>
              <button>Button</button>
            </li>
            <li>
              <button>Button</button>
            </li>
            <li>
              <button>Button</button>
            </li>
          </ul>
        </div>
        {/* Filter By */}
        <div>
          <h2 className="uppercase">Filter By</h2>

          <h3 className="uppercase">Language</h3>
          <button>Button</button>

          <h3 className="uppercase">Author</h3>
          <button>Button</button>

          <h3 className="uppercase">Publication Date</h3>
          <button>Button</button>
        </div>
      </div>
      {/* Books */}
      <div className="p-4 border border-black w-full">
        <BookList />
      </div>
    </div>
  );
}

export default Content;
