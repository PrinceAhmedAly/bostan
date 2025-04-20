import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsMounted(false), 500);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isMounted && (
        <div className={`
          fixed inset-0 z-50 bg-white 
          transition-opacity duration-500 
          ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <LoadingScreen />
        </div>
      )}

      {/* Main App Content */}
      {!isLoading && (
        <Router>
          <div className="flex flex-col min-h-screen">
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;