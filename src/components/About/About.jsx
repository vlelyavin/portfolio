import mtb from "../../images/mtb.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AboutDetails } from "../AboutInfo/AboutDetails/AboutDetails";
import "./About.scss";
import { useReducer } from "react";
import { INITIAL_STATE, mainReducer } from "../../reducers/mainReducer";

export const About = (props) => {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);
  return (
    <Router>
      <section id="about" className="about section" ref={props.about}>
        {!state.visible ? (
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
                    to="/portfolio"
                    className="section__link hovereffect"
                    onClick={() => dispatch({ type: "CHANGE_VISIBLE_STATUS", payload: !state.visible })}
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
          <AboutDetails theme={props.theme} />
        )}
      </section>
    </Router>
  );
};
