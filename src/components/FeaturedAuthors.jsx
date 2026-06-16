import icon from "../assets/icon.png";
import line2 from "../assets/line2.png";
import williamShakespeare from "../assets/WilliamShakespeare.jpg";
import janeAusten from "../assets/JaneAusten.jpg";
import charlesDickens from "../assets/CharlesDickens.jpg";
import markTwain from "../assets/MarkTwain.jpg";
import ralphWaldoEmerson from "../assets/RalphWaldoEmerson.jpg";
import johnBurroughs from "../assets/JohnBurroughs.jpg";

const authors = [
  {
    image: williamShakespeare,
    fname: "William",
    lname: "Shakespeare",
    lifespan: "1564–1616"
  },
  {
    image: janeAusten,
    fname: "Jane",
    lname: "Austen",
    lifespan: "1775–1817"
  },
  {
    image: charlesDickens,
    fname: "Charles",
    lname: "Dickens",
    lifespan: "1812–1870"
  },
  {
    image: markTwain,
    fname: "Mark",
    lname: "Twain",
    lifespan: "1835–1910"
  },
  {
    image: ralphWaldoEmerson,
    fname: "Ralph Waldo",
    lname: "Emerson",
    lifespan: "1803–1882"
  },
  {
    image: johnBurroughs,
    fname: "John",
    lname: "Burroughs",
    lifespan: "1837–1921"
  },
]

function FeaturedAuthors() {
  return (
    <section className="text-center bg-orange-100 uppercase p-5">
        <h2 className="tracking-widest text-2xl">Featured Authors</h2>
        <img src={line2} alt="Line Divider" className="w-50 text mx-auto"/>
        <ul className="flex items-center justify-center gap-3 py-5 px-10">
            {authors.map(author => (
              <li key={author.fname+author.lname} className="shadow-lg bg-neutral-primary-soft block max-w-sm border border-slate-950 rounded shadow-xs w-100">
                <img src={author.image} className=""/>
                <h3 className="text-2xl tracking-widest">
                  <span>{author.fname}</span><br />
                  <span>{author.lname}</span>
                </h3>
                <img src={line2} alt="Line Divider" className="w-30 text mx-auto"/>
                <p>{author.lifespan}</p>
              </li>
            ))}
        </ul>
        <a href="/browse" 
            className="text-slate-950 rounded text-base border border-amber-400 
            px-6 py-2 w-fit inline-block mt-6 hover:bg-black hover:text-amber-400 transition-colors inline-flex items-center gap-5">
            <span className="text-2xl">View All Authors</span>
            <img src={icon} alt="Icon" className="w-5 h-5"/>
          </a>
    </section>
  )
}

export default FeaturedAuthors