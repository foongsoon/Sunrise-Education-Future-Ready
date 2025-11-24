import React, { useState } from 'react';
import { Menu, X, Globe, Sun } from 'lucide-react';
import { Language, ContentStrings } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  text: ContentStrings['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'cn' : 'en');
  };

  const navLinks = [
    { label: text.home, href: "#home" },
    { label: text.programs, href: "#programs" },
    { label: text.funZone, href: "#ai-zone" },
    { label: text.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-orange-500 p-2 rounded-full text-white">
              <Sun size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-gray-800 tracking-tight leading-none">SUNRISE</span>
              <span className="text-xs font-semibold text-orange-500 tracking-widest uppercase">Education</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-orange-200 transition-colors"
              >
                <Globe size={18} />
                {lang === 'en' ? '中文' : 'English'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="w-full text-left flex items-center gap-2 text-orange-600 px-3 py-2 rounded-md text-base font-medium bg-orange-50"
            >
              <Globe size={18} />
              {lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};