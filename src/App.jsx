import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import FeaturesSection from "./components/FeaturesSection";
// import DesignSection from "./components/DesignSection";
import CustomerSection from "./components/CustomerSection";
 

 const App = () => {
  return(
    <div>
      <Navbar />
      {/* <Hero /> */}
      <CompanyLogo />
      <FeaturesSection />
      {/* <DesignSection /> */}
      <CustomerSection />
    </div>
  )
 }

 export default App;