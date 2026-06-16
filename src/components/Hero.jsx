import hero from "../assets/hero.png";
import icon from "../assets/icon.png";
import line1 from "../assets/line1.png";

function Hero() {
  return (
<section 
  style={{ 
    backgroundImage: `
      linear-gradient(
        rgba(0,0,0,.2),
        rgba(0,0,0,.2)
      ),
      url(${hero})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
  className="
    min-h-screen
    bg-cover 
    bg-center 
    bg-no-repeat 
    h-screen 
    w-full
    flex
    items-center
    sm:px-10
    lg:px-30
    xl:px-90
  "
>
  <div className="p-4">
    <span className="text-amber-400 text-xl tracking-wider block ">
      WELCOME TO THE
    </span>
    <h1 className="text-white">
      <span className="text-4xl md:text-7xl">Public Domain</span><br />
      <span className="text-6xl md:text-8xl tracking-wider">Library</span>
    </h1>
    <img src={line1} alt="Line Divider" className="w-100 md:h-auto pt-5"/>
    <p className="text-white text-xl max-w-md mt-4">
      A curated collection of timeless works from history's greatest minds. Read, explore, and be inspired.
    </p>
    <a href="/browse" 
      className="uppercase text-amber-400 rounded text-base border border-amber-400 
      px-6 py-2 w-fit inline-block mt-6 hover:bg-white hover:text-slate-950 transition-colors inline-flex items-center gap-5">
      <span>Browse Collection</span>
      <img src={icon} alt="Icon" className="w-5 h-5"/>
    </a>
  </div>
</section>
  )
}

export default Hero