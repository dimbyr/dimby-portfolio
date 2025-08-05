import React from 'react';
import { Code } from 'lucide-react';
import Section from './Section';
// ============================================================================
const Skills = ({ skills }) => (
    <Section id="skills" title="Skills" icon={<Code />}>
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.webDev.map(skill => <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>)}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.aiMl.map(skill => <span key={skill} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>)}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Programming & Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.programming.map(skill => <span key={skill} className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>)}
                </div>
            </div>
             <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Spoken Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.languages.map(skill => <span key={skill} className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>)}
                </div>
            </div>
        </div>
    </Section>
);

export default Skills;