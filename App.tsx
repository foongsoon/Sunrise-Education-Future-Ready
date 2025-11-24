import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramSection } from './components/ProgramSection';
import { AiWonderZone } from './components/AiWonderZone';
import { ContactSection } from './components/ContactSection';
import { FEATURES, TEXT_CONTENT } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = TEXT_CONTENT[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} text={t.nav} />
      
      <main>
        <HeroSection text={t.hero} lang={lang} />
        
        {/* Features Strip */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`p-4 rounded-full mb-3 ${feature.color}`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="font-bold text-gray-800">
                    {lang === 'en' ? feature.titleEn : feature.titleCn}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProgramSection text={t.programs} />
        
        <AiWonderZone text={t.aiSection} lang={lang} />
        
        <ContactSection text={t.contact} lang={lang} />
      </main>
    </div>
  );
}

export default App;