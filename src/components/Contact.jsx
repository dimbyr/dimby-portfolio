import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from './Section';
// ============================================================================
const Contact = ({ info }) => (
    <Section id="contact" title="Get In Touch" icon={<Mail />}>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-lg mb-4">I'm always open to discussing new projects, research, or opportunities.</p>
            <a href={`mailto:${info.email}`} className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Say Hello
            </a>
            <div className="mt-6 text-gray-600">
                <p className="flex items-center justify-center mb-2"><MapPin size={16} className="mr-2"/>{info.address}</p>
                <p className="flex items-center justify-center"><Phone size={16} className="mr-2"/>{info.phone}</p>
            </div>
        </div>
    </Section>
);


export default Contact;