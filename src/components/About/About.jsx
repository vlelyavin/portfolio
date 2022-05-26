import mtb from "../../images/mtb.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutMe } from "../AboutInfo/AboutMe/AboutMe";
import { Passion } from "../AboutInfo/Passion/Passion";
import { Skills } from "../AboutInfo/Skills/Skills";
import { VscClose } from "react-icons/vsc";
import "./About.scss";

export const About = ({ theme, about, visible, setVisible }) => {
  const showDetails = () => {
    setVisible(!visible);
  };

  const hideDetails = () => {
    setVisible(!visible);
  };

  return (
    <Router>
      <section className="about section" ref={about}>
        {!visible ? (
          <div id="about" className="container">
            <div className="section__inner">
              <div className="section__info">
                <div className="title">About</div>
                <div className="descr">
                  i love technology, biking
                  <br />
                  and travelling
                </div>
                <div className="section__button">
                  <Link to="/" className="section__link hovereffect" onClick={showDetails}>
                    Show me more
                  </Link>
                </div>
              </div>
              <div className="section__image__container">
                <img className="section__image bicycle" src={mtb} alt="mtb" />
              </div>
            </div>
          </div>
        ) : (
          <div id="details" className="container">
            <div className="details__inner">
              <div className="details__nav">
                <Link to="/" className="details__nav__button">
                  Who i am
                </Link>
                <Link to="/skills" className="details__nav__button">
                  Skills
                </Link>
                <Link to="/passion" className="details__nav__button">
                  My passion
                </Link>
              </div>
              <div className="details__info">
                <Routes>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="/passion" element={<Passion theme={theme} />} />
                  <Route path="/skills" element={<Skills />} />
                </Routes>
                <Link to="/" className="details__button__container" onClick={hideDetails}>
                  <VscClose className="details__button" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </Router>
  );
};
