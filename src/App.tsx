import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Timeline } from './components/Timeline';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WannaDos } from './components/WannaDos';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Background3D } from './components/Background3D';
import { ThemeToggle } from './components/ThemeToggle';
import { ContactCard } from './components/ContactCard';

function App() {
  return (
    <>
      <ThemeToggle />
      <ContactCard />
      <Background3D />
      <CustomCursor />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <main>
          <Hero />
          <AboutMe />
          <Timeline />
          <FeaturedProjects />
          <WannaDos />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
