import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from './Section';
// ============================================================================
const Publications = ({ publications }) => (
    <Section id="publications" title="Publications" icon={<BookOpen />}>
        <ul className="space-y-4">
            {publications.map((pub, index) => (
                <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm font-medium text-gray-500">{pub.year}</p>
                    <p className="font-semibold text-gray-800 mt-1">"{pub.title}"</p>
                    <p className="text-sm text-gray-600 mt-1">{pub.authors}</p>
                    <p className="text-sm text-gray-600 italic mt-1">{pub.journal}</p>
                </li>
            ))}
        </ul>
    </Section>
);

export default Publications;