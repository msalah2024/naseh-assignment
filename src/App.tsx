import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import LawFirmSection from "./components/LawFirmSection";
import JoinUsSection from "./components/JoinUsSection";
import CommunitySection from "./components/CommunitySection";
import FaqSection from "./components/FaqSection";
function App() {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <ServicesSection />
            <LawFirmSection />
            <JoinUsSection />
            <CommunitySection />
            <FaqSection />
        </div>
    );
}

export default App;
