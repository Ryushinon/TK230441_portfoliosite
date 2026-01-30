import { useEffect, useRef } from 'react';
import { roadmapData } from '../data/content';
import './Roadmap.css';

// Icons for roadmap milestones
const MilestoneIcons = {
    pivot: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 3L3 21M3 3l18 18" />
        </svg>
    ),
    learn: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    ),
    research: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
        </svg>
    ),
    career: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    ),
};

const Roadmap = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('roadmap--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="roadmap" className="roadmap section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Roadmap</h2>
                <p className="roadmap__subtitle">大学生活からエフェクトデザイナーへの道のり</p>

                <div className="roadmap__timeline">
                    <div className="roadmap__line"></div>

                    {roadmapData.map((milestone, index) => (
                        <div
                            key={index}
                            className={`roadmap__item ${index % 2 === 0 ? 'roadmap__item--left' : 'roadmap__item--right'}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="roadmap__content">
                                <span className="roadmap__year">{milestone.year}</span>
                                <h3 className="roadmap__title">{milestone.title}</h3>
                                <p className="roadmap__description">{milestone.description}</p>
                            </div>
                            <div className="roadmap__node">
                                <div className="roadmap__icon">
                                    {MilestoneIcons[milestone.icon]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
