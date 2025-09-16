import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Conferences from './components/Conferences';
import Fellowships from './components/Fellowships';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

// App.jsx

import {
  personalInfo,
  navLinks,
  experiences,
  education,
  projects,
  conferences,
  fellowships,
  publications,
  skills,
  hobbies
} from './data';

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
                
                {/* <div className="grid md:grid-cols-2 gap-16"> */}
                    <Conferences conferences={conferences} />
                    <Fellowships fellowships={fellowships} />
                {/* </div> */}

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


