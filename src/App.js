import "./App.css"
import Home from "./PortfolioContainer/Home/Home";
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import Navigation from './components/Navigation';
import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Contact />
      <Navigation />
      <Resume />

    </div>
  );
}

export default App;
