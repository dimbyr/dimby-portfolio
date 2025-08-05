import React from 'react';
import { GitBranch, ArrowRight } from 'lucide-react';
import Section from './Section';
// ============================================================================
const Projects = ({ projects }) => (
    <Section id="projects" title="Projects" icon={<GitBranch />}>
        <div className="grid md:grid-cols-1 gap-8">
            {projects.map((proj, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-medium text-gray-500">{proj.year}</p>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">{proj.title}</h3>
                    <p className="mt-2 text-gray-600">{proj.description}</p>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                        View on GitHub <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>
            ))}
        </div>
    </Section>
);

export default Projects;