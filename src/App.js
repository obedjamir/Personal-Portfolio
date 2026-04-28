import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Publications } from "./components/Publications";
import { AIProjects } from "./components/AIProjects";
import { GamesDev } from "./components/GamesDev";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Publications />
      <AIProjects />
      <GamesDev />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
