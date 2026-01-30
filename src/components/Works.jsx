import { useState, useEffect, useRef } from 'react';
import { worksData, categories } from '../data/content';
import './Works.css';

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [filteredWorks, setFilteredWorks] = useState(worksData);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (activeCategory === 'ALL') {
            setFilteredWorks(worksData);
        } else {
            setFilteredWorks(worksData.filter(work => work.category === activeCategory));
        }
    }, [activeCategory]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('works--visible');
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
        <section id="works" className="works section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Works</h2>

                {/* Category Filter */}
                <div className="works__filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`works__filter-btn ${activeCategory === category ? 'works__filter-btn--active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Works Grid */}
                <div className="works__grid">
                    {filteredWorks.map((work, index) => (
                        <article
                            key={work.id}
                            className="works__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="works__card-image">
                                <img src={work.thumbnail} alt={work.title} loading="lazy" />
                                <div className="works__card-overlay">
                                    <span className="works__card-view">View Project</span>
                                </div>
                            </div>
                            <div className="works__card-content">
                                <span className="works__card-category">{work.category}</span>
                                <h3 className="works__card-title">{work.title}</h3>
                                <p className="works__card-description">{work.description}</p>
                                <div className="works__card-tags">
                                    {work.tags.map((tag, i) => (
                                        <span key={i} className="works__card-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
