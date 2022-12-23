import MoviesSection from '../Components/Home/ContentSection/MoviesSection';
import SeriesSection from '../Components/Home/ContentSection/SeriesSection';
import HeroSection from '../Components/Home/HeroSection/HeroSection';

const Home = () => {
  return (
    <section id="home" className="bg-slate-900">
      <div className="bg-gradient-to-r from-slate-700 via-slate-800/30 to-slate-800">
        <HeroSection />
        <MoviesSection />
        <SeriesSection />
      </div>
    </section>
  );
};

export default Home;
