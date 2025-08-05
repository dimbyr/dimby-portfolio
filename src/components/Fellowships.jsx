import React from 'react';
import { Award } from 'lucide-react';
import Section from './Section';
// ============================================================================
const Fellowships = ({ fellowships }) => (
    <Section id="fellowships" title="Fellowships & Scholarships" icon={<Award />}>
        <ul className="space-y-4">
            {fellowships.map((fellow, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">&#10148;</span>
                    <div>
                        <p className="font-semibold text-gray-800">{fellow.name} <span className="text-sm font-normal text-gray-500">({fellow.years})</span></p>
                        <p className="text-sm text-gray-600">{fellow.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </Section>
);

export default Fellowships;