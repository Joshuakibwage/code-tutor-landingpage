import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import FeaturesSection from "./components/FeaturesSection";
 

 const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <FeaturesSection />
    </div>
  )
 }

 export default App;