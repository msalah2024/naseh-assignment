import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
function App() {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <ServicesSection />
        </div>
    );
}

export default App;
