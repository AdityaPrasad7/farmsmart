import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Form from './pages/Form';
import Result from './pages/Result';
import AIScan from './pages/AIScan';

export default function App() {
  const [step, setStep] = useState('home'); // home, form, result, aiscan
  const [recommendationData, setRecommendationData] = useState(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e8f1e9]">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/bg.png" alt="Farmland" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf9]/90 via-[#f8faf9]/60 to-[#f8faf9]/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar setStep={setStep} />

        <main className="max-w-4xl mx-auto p-6 pt-8 w-full flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            
            {step === 'home' && (
              <Home key="home" setStep={setStep} />
            )}
            
            {step === 'form' && (
              <Form 
                key="form" 
                onRecommendationReady={(data) => {
                  setRecommendationData(data);
                  setStep('result');
                }}
              />
            )}
            
            {step === 'result' && (
              <Result 
                key="result" 
                setStep={setStep} 
                recommendationData={recommendationData} 
              />
            )}
            
            {step === 'aiscan' && (
              <AIScan key="aiscan" setStep={setStep} />
            )}

          </AnimatePresence>
        </main>

        <footer className="py-12 text-center mt-auto">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
             Farmsmart AI • Premium Edition
           </p>
        </footer>
      </div>
    </div>
  );
}