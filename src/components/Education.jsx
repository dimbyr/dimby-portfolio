import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from './Section';
import TimelineItem from './TimelineItem';
// ============================================================================
const Education = ({ education }) => (
    <Section id="education" title="Education" icon={<BookOpen />}>
        <div>
            {education.map((edu, index) => (
                <TimelineItem key={index} date={edu.date} title={edu.degree} subtitle={edu.institution} location={edu.location} description={edu.description} />
            ))}
        </div>
    </Section>
);

export default Education;