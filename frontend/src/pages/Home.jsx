import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </div>
  );
}