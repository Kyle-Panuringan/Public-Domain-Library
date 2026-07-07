import icon from "../../assets/icon.png";
import line2 from "../../assets/line2.png";
import theTempest from "../../assets/theTempest.png";
import prideAndPrejudice from "../../assets/prideAndPrejudice.png";
import treasureIsland from "../../assets/treasureIsland.png";
import dracula from "../../assets/dracula.png";
import theThreeMusketeers from "../../assets/theThreeMusketeers.png";
import { Link } from "react-router-dom";

const books = [
  {
    image: theTempest,
    name: "The Tempest",
    edition: "1611",
    author: "William Shakespeaere",
    url: "https://standardebooks.org/ebooks/william-shakespeare/the-tempest/text/single-page",
  },
  {
    image: prideAndPrejudice,
    name: "Pride and Prejudice",
    edition: "1813",
    author: "Jane Austen",
    url: "https://standardebooks.org/ebooks/jane-austen/pride-and-prejudice/text/single-page",
  },
  {
    image: treasureIsland,
    name: "Treasure island",
    edition: "1880",
    author: "Robert Louis Stevenson",
    url: "https://standardebooks.org/ebooks/robert-louis-stevenson/treasure-island/text/single-page",
  },
  {
    image: dracula,
    name: "Dracula",
    edition: "1897",
    author: "Bram Stoker",
    url: "https://standardebooks.org/ebooks/bram-stoker/dracula/text/single-page",
  },
  {
    image: theThreeMusketeers,
    name: "The Three Musketeers",
    edition: "1844",
    author: "Alexandre Dumas",
    url: "http://standardebooks.org/ebooks/alexandre-dumas/the-three-musketeers/william-robson/text/single-page",
  },
];

function FeaturedBooks() {
  return (
    <section className="text-center bg-[#EDE6DB] uppercase p-5">
      <h2 className="tracking-widest text-2xl">Featured Authors</h2>
      <img src={line2} alt="Line Divider" className="w-50 text mx-auto" />

      <ul
        className="flex justify-start lg:justify-center gap-5 py-5 px-4
                  overflow-x-auto gap-3 py-5 px-4 snap-x snap-mandatory scroll-smooth"
      >
        {books.map((book) => (
          <li
            key={book.fname + book.lname}
            className="
                          min-w-[280px] 
                          md:min-w-0 md:w-64 lg:w-72
                          snap-start
                        "
          >
            <img
              src={book.image}
              className="shadow-lg bg-neutral-primary-soft mx-auto"
            />
            <h3 className="text-md tracking-widest pt-2">{book.name}</h3>
            <h3 className="text-md tracking-widest">{book.edition}</h3>
            <h4 className="text-md tracking-widest pb-2">{book.author}</h4>
            <img src={line2} alt="Line Divider" className="w-30 text mx-auto" />
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 py-2"
            >
              Read
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/browse"
        className="text-slate-950 rounded text-base border border-amber-400 
                    px-6 py-2 w-fit inline-block hover:bg-black hover:text-amber-400 transition-colors inline-flex items-center gap-5"
      >
        <img src={icon} alt="Icon" className="w-5 h-5" />
        <Link to="/browse" className="lg:text-2xl">
          View All Books
        </Link>
        <img src={icon} alt="Icon" className="w-5 h-5" />
      </a>
    </section>
  );
}

export default FeaturedBooks;
