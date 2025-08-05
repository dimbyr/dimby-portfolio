import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
// ============================================================================
const Hero = ({ info }) => (
    <section id="home" className="text-center mb-20 scroll-mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {info.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-2">{info.title}</p>
        <p className="text-lg text-gray-500 italic mt-6 max-w-2xl mx-auto">{info.quote}</p>
        <div className="flex justify-center space-x-6 mt-8">
            <a href={`https://linkedin.com/in/${info.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition duration-300"><Linkedin size={28} /></a>
            <a href={`https://github.com/${info.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300"><Github size={28} /></a>
            <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-red-500 transition duration-300"><Mail size={28} /></a>
            <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-green-500 transition duration-300"><Phone size={28} /></a>
        </div>
    </section>
);

export  default Hero;