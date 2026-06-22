import Categories from "../components/home/Categories"
import FeaturedAuthors from "../components/home/FeaturedAuthors"
import FeaturedBooks from "../components/home/FeaturedBooks"
import Hero from "../components/home/Hero"

function HomePage() {
  return (
    <main>
        <Hero/>
        <FeaturedAuthors/>
        <Categories/>
        <FeaturedBooks/>
    </main>
  )
}

export default HomePage