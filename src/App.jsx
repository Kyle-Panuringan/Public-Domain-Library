import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import BrowsePage from "./pages/BrowsePage"

function App() {

  return (
    <div className="font-library font-bold text-lg">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/browse" element={<BrowsePage />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
