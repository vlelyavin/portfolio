import { Routes, Route, Link } from "react-router-dom";
import { AboutMe } from "../AboutMe/AboutMe";
import { Passion } from "../Passion/Passion";
import { Skills } from "../Skills/Skills";
import { VscClose } from "react-icons/vsc";
import "./AboutDetails.scss";

export const AboutDetails = ({ theme, visible, setVisible }) => {
  return (
    <div id="details" className="container">
      <div className="details__inner">
        <div className="details__nav">
          <Link to="/portfolio" className="details__nav__button">
            Who i am
          </Link>
          <Link to="/portfolio/skills" className="details__nav__button">
            Skills
          </Link>
          <Link to="/portfolio/passion" className="details__nav__button">
            My passion
          </Link>
        </div>
        <div className="details__info">
          <Routes>
            <Route path="/portfolio" element={<AboutMe />} />
            <Route path="/portfolio/passion" element={<Passion theme={theme} />} />
            <Route path="/portfolio/skills" element={<Skills />} />
          </Routes>
          <Link to="/portfolio" className="details__button__container" onClick={() => setVisible(!visible)}>
            <VscClose className="details__button" />
          </Link>
        </div>
      </div>
    </div>
  );
};
