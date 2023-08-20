import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/App.css';
import Header from "./js/Header"
import About from "./js/About"
import Contacts from "./js/Contacts"
import Projects from "./js/Projects"
import Home from "./js/Home"


const App = () => {
  return (
    <Router>
          <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;
