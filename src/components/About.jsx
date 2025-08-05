import React from 'react';
import { Star } from 'lucide-react';
import Section from './Section';
// ============================================================================
const About = ({ profile }) => (
    <Section id="about" title="About Me" icon={<Star />}>
        <p className="text-lg leading-relaxed">{profile}</p>
    </Section>
);

export default About;

