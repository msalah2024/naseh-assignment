import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import LawFirmSection from "./components/LawFirmSection";
import JoinUsSection from "./components/JoinUsSection";
import CommunitySection from "./components/CommunitySection";
import FaqSection from "./components/FaqSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import Footer from "./components/Footer";
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
            <WhyChooseUsSection />
            <Footer />
        </div>
    );
}

export default App;
