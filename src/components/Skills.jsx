import { useEffect, useRef } from 'react';
import { skillsData } from '../data/content';
import './Skills.css';

// SVG Icons for software
const SoftwareIcons = {
    unity: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.4 17.8l-6.8-4 3.4-5.8H18l-7.6 9.8zm2.8-12L10 12l3.2 6.2 6.4-8.4-6.4-3.8v-.2l.2.2zm-3.8 5.8L6.2 6l7.6.2 3.6 3.6H9.4zM21.6 2.4L12 0 2.4 2.4 0 12l2.4 9.6L12 24l9.6-2.4L24 12l-2.4-9.6z" />
        </svg>
    ),
    unreal: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5c-5.8 0-10.5-4.7-10.5-10.5S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm3.8-15.3c-.9 0-1.7.3-2.3.9-.6-.6-1.4-.9-2.3-.9-1.9 0-3.5 1.6-3.5 3.5v6.1h1.8v-6.1c0-1 .8-1.7 1.7-1.7.9 0 1.7.8 1.7 1.7v6.1h1.8v-6.1c0-1 .8-1.7 1.7-1.7.9 0 1.7.8 1.7 1.7v6.1h1.8v-6.1c-.1-1.9-1.7-3.5-3.6-3.5z" />
        </svg>
    ),
    maya: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm8.4 16.8L12 21.6l-8.4-4.8V7.2L12 2.4l8.4 4.8v9.6z" />
        </svg>
    ),
    blender: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zm0-8a3 3 0 110 6 3 3 0 010-6zM6.5 12.5a6 6 0 1112 0 6 6 0 01-12 0zM2 12.5h5M0 9l5 3.5L0 16" />
        </svg>
    ),
    photoshop: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2H7.2v3.63h1.35c.41 0 .81-.06 1.18-.21.34-.13.64-.35.88-.64.24-.31.36-.71.36-1.22 0-.5-.12-.88-.36-1.16a1.87 1.87 0 00-.76-.2zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-8.22 13.02c-.5.4-1.08.68-1.73.84-.65.16-1.35.25-2.13.25H5.59v4.15H3.3V6.19h4.72c.79 0 1.5.09 2.14.26.65.18 1.21.45 1.69.83.5.39.88.89 1.14 1.5.27.62.4 1.36.4 2.22 0 .87-.15 1.61-.46 2.23-.3.62-.73 1.1-1.28 1.5-.01-.01-.02.02-.02.03-.06.05-.06.05-.1.06zm5.19 5.24c-.81 0-1.47-.05-1.98-.14v-2.3c.25.05.48.09.71.12.24.03.48.04.73.04.71 0 1.24-.13 1.59-.38.36-.26.54-.7.54-1.33v-.11c-.19.26-.44.47-.75.63-.31.16-.72.25-1.22.25-.68 0-1.26-.14-1.75-.42a2.88 2.88 0 01-1.14-1.19c-.27-.51-.41-1.11-.41-1.81 0-.73.15-1.37.46-1.91.31-.54.74-.96 1.28-1.25.55-.29 1.17-.44 1.88-.44.51 0 .96.1 1.35.3.21.1.39.23.55.38v-.45h2.12v6.25c0 .73-.12 1.36-.36 1.88-.24.52-.58.943-1.01 1.27-.43.32-.93.56-1.5.71-.57.15-1.17.22-1.79.22l-.3-.02zm1.65-5.41c.25-.29.38-.69.38-1.19 0-.5-.13-.89-.39-1.17-.26-.28-.63-.42-1.1-.42-.48 0-.86.14-1.13.42-.27.28-.4.67-.4 1.17 0 .5.13.9.39 1.19.26.29.64.44 1.13.44.48 0 .86-.15 1.12-.44z" />
        </svg>
    ),
    aftereffects: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM11.17 17.27H8.94l-.93-2.92H4.85l-.88 2.92H1.8l3.91-11.08h1.63l3.83 11.08zm5.8-.14c-.15.07-.38.13-.69.17-.31.04-.63.06-.96.06-.67 0-1.2-.13-1.58-.4-.39-.27-.65-.69-.79-1.28-.14-.59-.21-1.38-.21-2.38V9.7h-.95V7.86h.95V5.32h2.2v2.54h1.67V9.7H15.94v3.45c0 .8.04 1.39.12 1.76.08.37.23.62.44.76.22.14.52.21.91.21.18 0 .36-.01.55-.04.19-.02.36-.05.51-.08l.5 1.37z" />
        </svg>
    ),
    embergen: (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    ),
};

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('skills--visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills__grid">
                    {skillsData.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="skills__item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skills__icon">
                                {SoftwareIcons[skill.icon] || <span>{skill.name[0]}</span>}
                            </div>
                            <div className="skills__info">
                                <div className="skills__header">
                                    <span className="skills__name">{skill.name}</span>
                                    <span className="skills__level">{skill.level}%</span>
                                </div>
                                <div className="skills__bar">
                                    <div
                                        className="skills__bar-fill"
                                        style={{ '--skill-level': `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
