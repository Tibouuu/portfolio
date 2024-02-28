import logo from './logo.svg';
import './App.css';
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import {Link, Route, Routes} from "react-router-dom";
import Projects from "./Projects/Projects";
import Project from "./Projects/Project";
import One from "./Projects/One";

function App() {
  return (
    <div className="App font-book">
      <Menu />
        <Routes>
            <Route exact={true} path="/" element={<Home />}></Route>
            <Route exact={true} path="/Project/:id" element={<One />}></Route>
            <Route exact={true} path="/realisations" element={<Projects />}></Route>
        </Routes>
        <footer className="p-[24px] flex sm:flex-row flex-col justify-between border-grey border-t-[1px]">
            <div className="flex flex-col">
                <img className="mb-[48px] h-[64px] inline" src="/img/name.svg"/>
                    <div className="mb-[24px] inline-block text-center sm:text-left"><a href="#accueil" className="relative pb-[8px] font-nav uppercase text-grey font-light transition-all duration-250 hover:tracking-h3 after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:bg-grey after:hover:w-full after:absolute after:left-0 after:bottom-0 after:h-[0.5px]">Accueil</a>
                    </div>
                    <div className="mb-[24px] inline-block text-center sm:text-left"><a href="#a-propos"
                                                               className="relative pb-[8px] font-nav uppercase text-grey font-light transition-all duration-250 hover:tracking-h3 after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:bg-grey after:hover:w-full after:absolute after:left-0 after:bottom-0 after:h-[0.5px]">à
                        propos</a></div>
                    <div className="mb-[24px] inline-block text-center sm:text-left"><Link to="/realisations"
                                                               className="relative pb-[8px] font-nav uppercase text-grey font-light transition-all duration-250 hover:tracking-h3 after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:bg-grey after:hover:w-full after:absolute after:left-0 after:bottom-0 after:h-[0.5px]">Réalisations</Link>
                    </div>
                    <div className="mb-[24px] inline-block text-center sm:text-left"><Link to="/#competences"
                                                               className="relative pb-[8px] font-nav uppercase text-grey font-light transition-all duration-250 hover:tracking-h3 after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:bg-grey after:hover:w-full after:absolute after:left-0 after:bottom-0 after:h-[0.5px]">Compétences</Link>
                    </div>
                    <div className="inline-block text-center sm:text-left"><a href="#contact"
                                                     className="relative pb-[8px] font-nav uppercase text-grey font-light transition-all duration-250 hover:tracking-h3 after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:bg-grey after:hover:w-full after:absolute after:left-0 after:bottom-0 after:h-[0.5px]">Contact</a>
                    </div>
            </div>
            <div className="sm:mt-0 mt-8 flex flex-col inline-block justify-end">
                <img className="h-[80px] mb-[24px]" src="/img/logo-footer.svg"/>
                    <p className="text-[12px] text-center text-grey">© 2023, Portfolio de Thibaut Debroucke.</p>
            </div>
        </footer>

    </div>

  );
}

export default App;
