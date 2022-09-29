import mtb from "../../images/mtb.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AboutDetails } from "../AboutInfo/AboutDetails/AboutDetails";
import "./About.scss";

export const About = ({ theme, about, visible, setVisible }) => {
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
                  <Link to="/portfolio" className="section__link hovereffect" onClick={() => setVisible(!visible)}>
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
          <AboutDetails theme={theme} visible={visible} setVisible={setVisible} />
        )}
      </section>
    </Router>
  );
};
