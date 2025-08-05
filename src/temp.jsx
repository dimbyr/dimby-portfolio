import React, { useState } from 'react';
import { Linkedin, Github, Phone, Mail, MapPin, Award, BookOpen, Briefcase, Code, Coffee, Mic, Star, GitBranch, ArrowRight, Menu, X } from 'lucide-react';

// ============================================================================
// data.js
// In a real project, this would be a separate file: `src/data.js`
// ============================================================================



// ============================================================================
// components/Section.jsx
// Imports needed for this file:
// 

// ============================================================================
// components/TimelineItem.jsx
// Imports needed for this file:

// ============================================================================
// components/Header.jsx
// Imports needed for this file:

// ============================================================================
// components/Hero.jsx
// Imports needed for this file:


// ============================================================================
// components/About.jsx
// Imports needed for this file:


// ============================================================================
// components/Experience.jsx
// Imports needed for this file:

// ============================================================================
// components/Education.jsx
// Imports needed for this file:


// ============================================================================
// components/Projects.jsx
// Imports needed for this file:


// ============================================================================
// components/Conferences.jsx
// Imports needed for this file:


// ============================================================================
// components/Fellowships.jsx
// Imports needed for this file:


// ============================================================================
// components/Publications.jsx
// Imports needed for this file:


// ============================================================================
// components/Skills.jsx
// Imports needed for this file:


// ============================================================================
// components/Hobbies.jsx
// Imports needed for this file:

// ============================================================================
// components/Contact.jsx
// Imports needed for this file:

// ============================================================================
// components/Footer.jsx
// Imports needed for this file:


// ============================================================================
// App.jsx (Main Component)
// Imports needed for this file:
// import React, { useState } from 'react';
// import { personalInfo, experiences, education, projects, conferences, fellowships, publications, skills, hobbies, navLinks } from './data';
// import Header from './components/Header';
// import Hero from './components/Hero';
// ... etc for all components
// ============================================================================
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const smoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="bg-gray-50 font-sans text-gray-700">
            <Header 
                name={personalInfo.name} 
                navLinks={navLinks} 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                smoothScroll={smoothScroll}
            />

            <main className="container mx-auto px-6 py-12 md:py-20">
                <Hero info={personalInfo} />
                <About profile={personalInfo.profile} />
                <Experience experiences={experiences} />
                <Education education={education} />
                <Projects projects={projects} />
                
                <div className="grid md:grid-cols-2 gap-16">
                    <Conferences conferences={conferences} />
                    <Fellowships fellowships={fellowships} />
                </div>

                <Publications publications={publications} />
                <Skills skills={skills} />
                <Hobbies hobbies={hobbies} />
                <Contact info={personalInfo} />
            </main>

            <Footer name={personalInfo.name} />
        </div>
    );
};

export default App;
