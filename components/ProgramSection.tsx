import React from 'react';
import { BookMarked, GraduationCap } from 'lucide-react';
import { ContentStrings } from '../types';

interface ProgramProps {
  text: ContentStrings['programs'];
}

export const ProgramSection: React.FC<ProgramProps> = ({ text }) => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Primary Card */}
          <div className="group relative bg-orange-50 rounded-3xl p-8 transition-all hover:bg-orange-100 hover:shadow-xl border border-orange-100">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookMarked size={120} className="text-orange-500" />
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-orange-500">
              <BookMarked size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{text.primary}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{text.primaryDesc}</p>
            <ul className="space-y-3">
              {['English', 'Mathematics', 'Science', 'Arts & Crafts'].map((subject, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Card */}
          <div className="group relative bg-blue-50 rounded-3xl p-8 transition-all hover:bg-blue-100 hover:shadow-xl border border-blue-100">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={120} className="text-blue-500" />
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-500">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{text.secondary}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{text.secondaryDesc}</p>
            <ul className="space-y-3">
               {['Physics', 'Chemistry', 'Biology', 'Business Studies', 'Accounting'].map((subject, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};