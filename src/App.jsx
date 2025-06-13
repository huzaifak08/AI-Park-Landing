import style from "./App.module.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import AppFeatures from "./components/features/Features";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <AppFeatures />
      <Contact />
    </div>
  );
}

export default App;
