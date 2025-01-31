import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import LawFirmSection from "./components/LawFirmSection";
function App() {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <ServicesSection />
            <LawFirmSection />
        </div>
    );
}

export default App;
