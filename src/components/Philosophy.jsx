import { useEffect, useRef } from 'react';
import { philosophyData } from '../data/content';
import './Philosophy.css';

const Philosophy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('philosophy--visible');
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
        <section id="philosophy" className="philosophy section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Philosophy</h2>

                <div className="philosophy__content">
                    <blockquote className="philosophy__quote">
                        <span className="philosophy__quote-mark">"</span>
                        <p className="philosophy__main-message">
                            {philosophyData.mainMessage}
                        </p>
                        <span className="philosophy__quote-mark philosophy__quote-mark--end">"</span>
                    </blockquote>

                    <p className="philosophy__description">
                        {philosophyData.description}
                    </p>

                    <div className="philosophy__points">
                        {philosophyData.keyPoints.map((point, index) => (
                            <div
                                key={index}
                                className="philosophy__point"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="philosophy__point-number">0{index + 1}</div>
                                <h3 className="philosophy__point-title">{point.title}</h3>
                                <p className="philosophy__point-description">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="philosophy__bg-line philosophy__bg-line--1"></div>
            <div className="philosophy__bg-line philosophy__bg-line--2"></div>
        </section>
    );
};

export default Philosophy;
