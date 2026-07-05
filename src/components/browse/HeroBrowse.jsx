import heroBrowse from "../../assets/heroBrowse.png";
import line2 from "../../assets/line2.png";

function HeroBrowse() {
  return (
        <section 
          style={{ 
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,.0),
                rgba(0,0,0,.0)
              ),
              url(${heroBrowse})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className=" 
            bg-no-repeat 
            w-full
            flex
            items-center
            sm:px-10
            lg:px-30
            xl:px-90
          "
        >
          <div className="text-white text-center p-4 mx-auto">
            <h1 className="text-center text-7xl">Browse Works</h1>
            <img src={line2} alt="Line Divider" className="w-100 md:h-auto mx-auto"/>
            <p className="text-center">
              A curated collection of timeless works from history's greatest minds. Read, explore, and be inspired.
            </p>
          </div>
        </section>
  )
}

export default HeroBrowse