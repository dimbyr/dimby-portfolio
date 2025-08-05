import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from './Section';
import TimelineItem from './TimelineItem';
// ============================================================================
const Experience = ({ experiences }) => (
    <Section id="experience" title="Professional Experience" icon={<Briefcase />}>
        <div>
            {experiences.map((exp, index) => (
                <TimelineItem key={index} date={exp.date} title={exp.title} subtitle={exp.company} location={exp.location} description={exp.description} />
            ))}
        </div>
    </Section>
);


export default Experience;