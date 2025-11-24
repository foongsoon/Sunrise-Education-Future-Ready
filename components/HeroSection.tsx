import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ContentStrings, Language } from '../types';

interface HeroProps {
  text: ContentStrings['hero'];
  lang: Language;
}

export const HeroSection: React.FC<HeroProps> = ({ text, lang }) => {
  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-200 opacity-30 blob-shape blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 opacity-30 blob-shape blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              {lang === 'en' ? 'Welcome to Sunrise' : '欢迎来到旭日教育'}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              {text.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                {lang === 'en' ? 'Future Ready' : '成就未来'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {text.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
              >
                {text.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#ai-zone"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-orange-600 bg-white border-2 border-orange-100 rounded-full hover:border-orange-200 hover:bg-orange-50 transition-all"
              >
                {lang === 'en' ? 'Wonderful Content' : '更多丰富内容'}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/400/500?random=1" 
                  alt="Student learning" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
                />
                <img 
                  src="https://picsum.photos/400/500?random=2" 
                  alt="Classroom fun" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-2xl text-center">
                <p className="font-bold text-3xl text-blue-600">IGCSE</p>
                <p className="text-sm font-medium text-gray-500">Cambridge Syllabus</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};