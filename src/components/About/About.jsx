import { BrowserRouter as Router, Link } from "react-router-dom";
import { AboutDetails } from "../AboutInfo/AboutDetails/AboutDetails";
import { CHANGE_VISIBLE_STATUS } from "../../actions/mainActions";
import mtb from "../../images/mtb.png";
import "./About.scss";

export const About = (props) => {
  return (
    <Router>
      <section id="about" className="about section" ref={props.about}>
        {!props.state.visible ? (
          <div className="container">
            <div className="section__inner">
              <div className="section__info">
                <div className="title">About</div>
                <div className="descr">
                  i love technology, biking
                  <br />
                  and travelling
                </div>
                <div className="section__button">
                  <Link
                    to="/portfolio/about"
                    className="section__link hovereffect"
                    onClick={() => props.dispatch({ type: CHANGE_VISIBLE_STATUS, payload: !props.state.visible })}
                  >
                    Show me more
                  </Link>
                </div>
              </div>
              <div className="section__image__container">
                <img className="section__image bicycle" ref={props.bicycle} src={mtb} alt="mtb" />
              </div>
            </div>
          </div>
        ) : (
          <AboutDetails state={props.state} dispatch={props.dispatch} />
        )}
      </section>
    </Router>
  );
};
