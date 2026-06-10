import Categories from "../components/Categories"
import FeaturedAuthors from "../components/FeaturedAuthors"
import FeaturedBooks from "../components/FeaturedBooks"
import Hero from "../components/Hero"

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