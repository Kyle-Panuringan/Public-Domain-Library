import hero from "../assets/hero.png";

function Hero() {
  return (
<section 
  style={{ 
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
  className="min-h-screen px-20 flex flex-col gap-2 justify-center"
>
  <div className="max-w-2xl">
    <span className="text-white text-sm tracking-wider block">
      WELCOME TO THE
    </span>
    <h1 className="text-white">
      <div className="text-4xl md:text-5xl text-[#E5AB14]">Public Domain</div>
      <div className="text-6xl md:text-7xl font-bold">Library</div>
    </h1>
    <p className="text-white text-base md:text-lg max-w-md mt-4">
      A curated collection of timeless works from history's greatest minds.
      <br />
      Read, explore, and be inspired.
    </p>
    <a href="/browse" className="text-white text-base border border-white px-6 py-2 w-fit inline-block mt-6 hover:bg-white hover:text-slate-950 transition-colors">
      Browse Collection
    </a>
  </div>
</section>
  )
}

export default Hero