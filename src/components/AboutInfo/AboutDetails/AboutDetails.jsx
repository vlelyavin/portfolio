import { Routes, Route, Link } from "react-router-dom";
import { AboutMe } from "../AboutMe/AboutMe";
import { Passion } from "../Passion/Passion";
import { Skills } from "../Skills/Skills";
import { VscClose } from "react-icons/vsc";
import { CHANGE_VISIBLE_STATUS } from "../../../actions/mainActions";

export const AboutDetails = (props) => {
  return (
    <div id="details" className="container">
      <div className="details__inner">
        <div className="details__nav">
          <Link to="/portfolio/about" className="details__nav__button">
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
            <Route path="/portfolio/about" element={<AboutMe />} />
            <Route path="/portfolio/passion" element={<Passion theme={props.state.theme} />} />
            <Route path="/portfolio/skills" element={<Skills />} />
          </Routes>
          <Link
            to="/portfolio"
            className="details__button__container"
            onClick={() => props.dispatch({ type: CHANGE_VISIBLE_STATUS, payload: !props.state.visible })}
          >
            <VscClose className="details__button" />
          </Link>
        </div>
      </div>
    </div>
  );
};
