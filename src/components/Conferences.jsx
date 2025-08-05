import React from 'react';
import { Mic } from 'lucide-react';
import Section from './Section';
// ============================================================================
const Conferences = ({ conferences }) => (
    <Section id="conferences" title="Conferences & Workshops" icon={<Mic />}>
        <ul className="space-y-4">
            {conferences.map((conf, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">&#10148;</span>
                    <div>
                        <p className="font-semibold text-gray-800">{conf.event} <span className="text-sm font-normal text-gray-500">({conf.date})</span></p>
                        <p className="text-sm text-gray-600">{conf.location}</p>
                        <p className="text-sm text-gray-600 italic">{conf.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </Section>
);

export default Conferences;