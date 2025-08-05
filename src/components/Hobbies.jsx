import React from 'react';
import { Coffee } from 'lucide-react';
import Section from './Section';
// ============================================================================
const Hobbies = ({ hobbies }) => (
    <Section id="hobbies" title="Hobbies" icon={<Coffee />}>
        <div className="flex flex-wrap gap-3">
            {hobbies.map(hobby => <span key={hobby} className="bg-gray-200 text-gray-800 text-md font-medium px-4 py-2 rounded-lg">{hobby}</span>)}
        </div>
    </Section>
);

export default Hobbies;