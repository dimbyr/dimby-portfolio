import React from 'react';
import { Menu, X } from 'lucide-react';
// ============================================================================
const Header = ({ name, navLinks, isMenuOpen, setIsMenuOpen, smoothScroll }) => (
    <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#home" onClick={smoothScroll} className="text-2xl font-bold text-gray-800">
                {name}
            </a>
            <nav className="hidden md:flex space-x-6">
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={smoothScroll} className="text-gray-600 hover:text-blue-600 transition duration-300">{link.label}</a>
                ))}
            </nav>
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden bg-white py-2">
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={smoothScroll} className="block text-center py-2 px-4 text-gray-600 hover:bg-gray-100">{link.label}</a>
                ))}
            </div>
        )}
    </header>
);


export default Header;