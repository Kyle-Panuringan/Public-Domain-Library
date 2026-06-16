
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
    const [searchClose, setSearchClose] = useState(true);
    const [menuClose, setMenuClose] = useState(true);

    const menuRef = useRef(null);

    useEffect(()=>{
        if (menuClose) return;

        function handleClickOutside(event){
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setMenuClose(true);
            }
        }

        document.addEventListener("mousedown",handleClickOutside);

        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
        }
    },[menuClose]);

    return (
        <header ref={menuRef} className="flex items-center border-b border-[#E5AB14] p-4 bg-slate-950 text-amber-100
            justify-between lg:justify-evenly relative 
        ">
            {/* LEFT SIDE */}
            <a href="/" className="flex items-center justify-center">
                <img src={logo} alt="Public Domain Library Logo" 
                    className="
                        w-10 lg:w-30 
                        h-10 lg:h-auto
                    "
                />
                <div className="flex items-center justify-center flex-col">
                    <div className="text-[#E5AB14] flex gap-1 uppercase
                    flex-col
                    ">
                        <span className="-mb-2 text-xs lg:text-xl lg:tracking-wide">Public Domain</span>
                        <span className="font-bold tracking-widest text-xl lg:text-4xl">Library</span>
                    </div>
                    <span className="hidden lg:block">Timeless works, for everyone.</span>
                </div>
            </a>

            {/* RIGHT SIDE */}
            <div className="flex gap-1 lg:hidden">
                {searchClose 
                ?
                    <div>
                        <button onClick={()=>{setSearchClose(false)}}>🔍</button>
                        <button className="w-5" onClick={()=>{setMenuClose(!menuClose)}}>{menuClose ? "☰" : "✕"}</button>
                    </div>
                :
                    <div className="flex">
                        <form className="lg:block">
                            <input 
                                type="search" name="" id="" placeholder="Search..." 
                                className="border border-black bg-white placeholder:italic placeholder-gray-500 px-2 text-black rounded w-25 sm:w-auto"
                            />
                            <button>🔍</button>
                        </form>  
                        <button className="w-5" onClick={()=>{setSearchClose(true)}}>✕</button>
                    </div>
                }  
            </div>

            <div
                
                className={`
                    ${menuClose ? 'hidden':'block'}
                    absolute lg:static
                    lg:flex items-center gap-6 
                    bg-slate-950 top-full right-0 p-2 text-center
                    border-l border-b border-r border-[#E5AB14] lg:border-none             
            `}>
                <nav> 
                    <ul className="
                        items-center gap-6 
                        lg:flex 
                        text-[#E5AB14]
                        uppercase
                    ">
                        <li><a href="">Home</a></li>
                        <li><a href="">Browse</a></li>
                        <li><a href="">Categories</a></li>
                        <li><a href="">Authors</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>        
                <form className="hidden lg:block">
                    <input 
                        type="search" name="" id="" placeholder="Search..." 
                        className="border border-black bg-white placeholder:italic placeholder-gray-500 px-2 text-black rounded"
                    />
                    <button>🔍</button>
                </form>
            </div>
        </header>
    )
}

export default Navbar