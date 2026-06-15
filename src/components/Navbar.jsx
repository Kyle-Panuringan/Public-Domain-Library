import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <header className="flex items-center justify-around border-b border-[#E5AB14] p-4 bg-slate-950 text-amber-100">
        <a href="/" className="flex item-center justify-center">
            <img src={logo} alt="Public Domain Library Logo" className="w-30 h-auto"/>
            <div className="flex item-center justify-center flex-col">
                <div className="text-[#E5AB14] flex flex-col">
                    <span className="text-xl uppercase tracking-wide -mb-2">Public Domain</span>
                    <span className="font-bold text-4xl uppercase tracking-wider">Library</span>
                </div>
                <span>Timeless works, for everyone.</span>
            </div>
        </a>

        <nav className="flex items-center gap-6"> 
            <ul className="flex gap-6 items-center ">
                <li><a href="">Home</a></li>
                <li><a href="">Browse</a></li>
                <li><a href="">Authors</a></li>
                <li><a href="">About</a></li>
            </ul>

            <form className="border border-white">
                <input type="search" name="" id="" className="border border-black"/>
                <button>Search</button>
            </form>
        </nav>        
    </header>
  )
}

export default Navbar