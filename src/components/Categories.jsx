import icon from "../assets/icon.png";
import line2 from "../assets/line2.png";
import mystery from "../assets/mystery.png";
import fantasy from "../assets/fantasy.png";
import romance from "../assets/romance.png";
import horror from "../assets/horror.png";
import history from "../assets/history.png";
import poetry from "../assets/poetry.png";

const categories = [
  {
    image: mystery,
    name: "Mystery"
  },
  {
    image: fantasy,
    name: "Fantasy"
  },
  {
    image: romance,
    name: "Romance"
  },
  {
    image: horror,
    name: "Horror"
  },
  {
    image: history,
    name: "History"
  },
  {
    image: poetry,
    name: "Poetry"
  },
];

function Categories() {
  return (
    <section className="bg-slate-950 text-amber-100 p-5 text-center">
        <h2 className="tracking-widest text-2xl text-amber-100 uppercase">Browse by category</h2>
        <img src={line2} alt="Line Divider" className="w-50 text mx-auto"/>
        <ul className="flex justify-start lg:justify-center py-5 px-4
            overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {
              categories.map(category =>(
                <li key={category.name} className="border-r border-amber-100 last:border-r-0 min-w-[240px] flex flex-col items-center gap-2">
                  <img src={category.image} alt={category.name} className="w-20 h-auto text-amber-400" />
                  <h3 className="uppercase text-amber-400">{category.name}</h3>
                  <a href="#" className="underline underline-offset-4">View Works</a>
                </li>
              ))
            }
        </ul>
        <a href="/browse" 
            className="text-amber-100 rounded text-amber-100 border border-amber-400 uppercase
            px-6 py-2 w-fit inline-block hover:bg-white hover:text-slate-950 transition-colors inline-flex items-center gap-5">
            <img src={icon} alt="Icon" className="w-5 h-5"/>
            <span className="lg:text-2xl uppercase">View all category</span>
            <img src={icon} alt="Icon" className="w-5 h-5"/>
        </a>
    </section>
  )
}

export default Categories