import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Footer from './components/Footer';
import SpiderAnimation from './components/SpiderAnimation';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-neo-yellow selection:text-black">
      <SpiderAnimation />
      <MusicPlayer />
      <Navbar />
      
      <main>
        <Hero />
        <Mission />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
