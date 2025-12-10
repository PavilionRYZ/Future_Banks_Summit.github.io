import Navbar from './components/layout/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import AgendaSection from './components/AgendaSection';
import SponsorsSection from './components/SponsorsSection';
import TopicsSection from './components/TopicsSection';
import RegistrationForm from './components/RegistrationForm';
import ContactSection from './components/ContactSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <TopicsSection />
      <SpeakersSection />
      <AgendaSection />
      <SponsorsSection />
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
