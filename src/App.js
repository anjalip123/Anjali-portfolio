
import Navbar from "./components/NavBar/navBar"
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skill from "./components/Skills/skill";
import Experience from "./components/Experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Contacts from "./components/Contacts/contacts";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Experience/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
