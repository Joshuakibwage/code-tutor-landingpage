import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import FeaturesSection from "./components/FeaturesSection";
import DesignSection from "./components/DesignSection";
 

 const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <FeaturesSection />
      <DesignSection />
    </div>
  )
 }

 export default App;