import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div>
        <p className="text-center p-2 border-b border-amber-400 italic">
          <span>
            "Books are legacies that a great genius leaves to mankind, 
            which are delivered down from generation to generation, 
            as presents to the posterity of those who are yet unborn."
          </span><br />
          <span>— Joseph Addison</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around items-center">
        <nav>
          <ul className="flex gap-3">
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </nav>

        <img src={logo} alt="Public Domain Library Logo" 
                            className="w-10 lg:w-20 h-10 lg:h-auto"
        />

        <p>{new Date().getFullYear()} Public Domain Library</p>
      </div>
    </footer>
  )
}

export default Footer