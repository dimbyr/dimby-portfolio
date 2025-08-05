import React from 'react';
// ============================================================================
const Footer = ({ name }) => (
    <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-1">Built with React & Tailwind CSS</p>
    </footer>
);
export default Footer;