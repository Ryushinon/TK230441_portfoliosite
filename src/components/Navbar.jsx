import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['hero', 'philosophy', 'works', 'skills', 'roadmap'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'hero', label: 'Home' },
        { id: 'philosophy', label: 'Philosophy' },
        { id: 'works', label: 'Works' },
        { id: 'skills', label: 'Skills' },
        { id: 'roadmap', label: 'Roadmap' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <a href="#hero" className="navbar__logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                    <span className="navbar__logo-text">VFX</span>
                    <span className="navbar__logo-dot"></span>
                </a>

                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
