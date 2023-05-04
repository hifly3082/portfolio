import './App.css';
import 'boxicons';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className='App'>
      <>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Portfolio />
          <Skills />
          <Qualification />
          {/* <Services /> */}
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </>
    </div>
  );
}

export default App;
