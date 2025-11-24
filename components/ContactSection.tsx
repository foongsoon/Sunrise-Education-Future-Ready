import React from 'react';
import { Phone, Mail, MapPin, Globe, Facebook, MessageCircle } from 'lucide-react';
import { ContentStrings, Language } from '../types';
import { CONTACT_DETAILS } from '../constants';

interface ContactProps {
  text: ContentStrings['contact'];
  lang: Language;
}

export const ContactSection: React.FC<ContactProps> = ({ text, lang }) => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Info Column */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{text.title}</h2>
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{text.address}</h4>
                  <a href={CONTACT_DETAILS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors">
                    {CONTACT_DETAILS.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-green-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{text.phone}</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <span className="text-gray-600">{CONTACT_DETAILS.phone}</span>
                     <a href={CONTACT_DETAILS.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-600 font-semibold hover:underline">
                       <MessageCircle size={16} /> WhatsApp
                     </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{text.email}</h4>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-600 hover:text-blue-600">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-indigo-500">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Web</h4>
                  <a href={`http://${CONTACT_DETAILS.website}`} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600">
                    {CONTACT_DETAILS.website}
                  </a>
                </div>
              </div>

            </div>

             <div className="mt-10">
                <h4 className="font-bold text-gray-900 mb-4">{text.followUs}</h4>
                <a href={CONTACT_DETAILS.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  <Facebook size={20} />
                  SunriseResourceCentre
                </a>
             </div>
          </div>

          {/* Map Column (Placeholder/Embed) */}
          <div className="h-full min-h-[300px] bg-white rounded-2xl shadow-xl p-2 border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.032606558661!2d101.4402633!3d3.0061996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc530000000001%3A0x0!2zNsKwMDAnMjIuMyJOIDEwMcKwMjYnMjUuMCJF!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{border:0, borderRadius: '1rem'}} 
              allowFullScreen={true} 
              loading="lazy"
              title="Sunrise Education Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sunrise Education. {lang === 'en' ? 'All rights reserved.' : '版权所有。'}
          </p>
        </div>
      </div>
    </footer>
  );
};