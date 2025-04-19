import { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import AwarenessMethods from './components/AwarenessMethods';
import BodySafetyEducation from './components/BodySafetyEducation';
import SpecialNeedsBoundaries from './components/SpecialNeedsBoundaries';
import SpecialNeedsQA from './components/SpecialNeedsQA';
import { SiStoryblok } from 'react-icons/si';
import StoryOne from './components/StoryOne';
import StoryTwo from './components/StoryTwo';
import Ending from './components/Ending';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      setTimeout(() => setIsMounted(false), 500); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isMounted && (
        <div className={`
          fixed inset-0 z-50 bg-white 
          transition-opacity duration-500 
          ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <LoadingScreen />
        </div>
      )}

      {/* nav menu */}
      {/* <NavBar /> */}
      {/* hero section */}
      {!isLoading && <HeroSection />}
      {/* sections layout */}
      <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <AwarenessMethods />
      <BodySafetyEducation />
      <SpecialNeedsBoundaries />
      <SpecialNeedsQA />
      <StoryOne />
      <StoryTwo />
      <Ending />
      <Footer />
      </div>
      
    </>
  );
}

export default App;