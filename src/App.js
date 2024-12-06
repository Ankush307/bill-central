import './App.css';
import Header from './common/Header';
import Hero from './components/home/Hero';
import heroBg from './assets/image/webp/hero-bg.webp';

function App() {
  return (
    <div className="!bg-no-repeat bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${heroBg})` }}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
