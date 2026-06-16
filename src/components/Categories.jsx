import icon from "../assets/icon.png";
import line2 from "../assets/line2.png";
const categories = [
  {
    image: "#",
    name: "Mystery"
  },
  {
    image: "#",
    name: "Fantasy"
  },
  {
    image: "#",
    name: "Romance"
  },
  {
    image: "#",
    name: "Horror"
  },
  {
    image: "#",
    name: "History"
  },
  {
    image: "#",
    name: "Poetry"
  },
];

function Categories() {
  return (
    <section className="bg-slate-950 text-amber-100 p-5 text-center">
        <h2 className="tracking-widest text-2xl text-amber-400 uppercase">Browse by category</h2>
        <img src={line2} alt="Line Divider" className="w-50 text mx-auto"/>
        <ul>
            {
              categories.map(category =>(
                <li>
                  <img src="" alt="" />
                  <h3 className="uppercase">{category.name}</h3>
                </li>
              ))
            }
        </ul>
        <a href="/browse" 
            className="text-amber-400 rounded text-base border border-amber-400 uppercase
            px-6 py-2 w-fit inline-block hover:bg-amber-400 hover:text-slate-950 transition-colors inline-flex items-center gap-5">
            <span className="lg:text-2xl uppercase">View all category</span>
            <img src={icon} alt="Icon" className="w-5 h-5"/>
        </a>
    </section>
  )
}

export default Categories