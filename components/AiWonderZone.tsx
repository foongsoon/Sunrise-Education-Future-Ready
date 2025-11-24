import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { ContentStrings, Language } from '../types';
import { generateWonderfulContent } from '../services/geminiService';

interface AiProps {
  text: ContentStrings['aiSection'];
  lang: Language;
}

export const AiWonderZone: React.FC<AiProps> = ({ text, lang }) => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    const result = await generateWonderfulContent(lang);
    setContent(result);
    setIsLoading(false);
    setHasGenerated(true);
  };

  return (
    <section id="ai-zone" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background stars effect simplified */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-purple-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
          <Sparkles size={14} />
          {lang === 'en' ? 'Powered by AI' : 'AI 驱动'}
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {text.title}
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {text.desc}
        </p>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 min-h-[200px] flex flex-col items-center justify-center mb-8 shadow-2xl">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <RefreshCw className="animate-spin text-purple-400" size={40} />
              <p className="text-gray-400 animate-pulse">{lang === 'en' ? 'Conjuring magic...' : '正在施展魔法...'}</p>
            </div>
          ) : content ? (
            <p className="text-2xl font-medium leading-relaxed font-serif italic text-purple-100">
              "{content}"
            </p>
          ) : (
            <p className="text-gray-500 text-lg italic">
              {text.placeholder}
            </p>
          )}
        </div>

        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-purple-600/30 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
        >
          {hasGenerated ? (lang === 'en' ? 'Another One!' : '再来一个！') : text.button}
          <Sparkles size={20} />
        </button>
      </div>
    </section>
  );
};