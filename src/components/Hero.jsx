import { useEffect, useState } from 'react';
import { profileData } from '../data/content';
import './Hero.css';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const scrollToWorks = () => {
        const element = document.getElementById('works');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            {/* Video Background */}
            <div className="hero__video-container">
                <video
                    className="hero__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://picsum.photos/1920/1080?grayscale"
                >
                    {/* Replace with actual demo reel video */}
                    <source src="/videos/demoreel.mp4" type="video/mp4" />
                </video>
                <div className="hero__overlay"></div>
                <div className="hero__noise"></div>
                <div className="hero__scanlines"></div>
            </div>

            {/* Content */}
            <div className={`hero__content ${loaded ? 'hero__content--loaded' : ''}`}>
                <h1 className="hero__title glitch" data-text={profileData.name}>
                    {profileData.name}
                </h1>
                <p className="hero__subtitle">{profileData.title}</p>
                <div className="hero__line"></div>
                <p className="hero__tagline">{profileData.subtitle}</p>

                <button className="hero__cta btn" onClick={scrollToWorks}>
                    View Works
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll-indicator">
                <span className="hero__scroll-text">Scroll</span>
                <div className="hero__scroll-line"></div>
            </div>

            {/* Corner Decorations */}
            <div className="hero__corner hero__corner--tl"></div>
            <div className="hero__corner hero__corner--tr"></div>
            <div className="hero__corner hero__corner--bl"></div>
            <div className="hero__corner hero__corner--br"></div>
        </section>
    );
};

export default Hero;
