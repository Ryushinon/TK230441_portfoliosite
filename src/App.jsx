import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Works from './components/Works';
import Skills from './components/Skills';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

import './styles/glitch.css';
import './styles/neon.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Philosophy />
                <Works />
                <Skills />
                <Roadmap />
            </main>
            <Footer />
        </div>
    );
}

export default App;
