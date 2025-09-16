import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import Section from './Section';

const Publications = ({ publications }) => (
  <Section id="publications" title="Publications" icon={<BookOpen />}>
    <ul className="space-y-4">
      {publications?.map((pub, index) => (
        <li key={index} className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm font-medium text-gray-500">{pub.year}</p>
          <p className="font-semibold text-gray-800 mt-1">"{pub.title}"</p>
          <p className="text-sm text-gray-600 mt-1">{pub.authors}</p>
          <p className="text-sm text-gray-600 italic mt-1">{pub.journal}</p>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-semibold"
          >
            {pub.link} 
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Publications;
