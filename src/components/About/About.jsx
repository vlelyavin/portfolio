import mtb from "../../images/mtb.jpg";
import "./About.scss";

export const About = ({ about }) => {
  return (
    <section className="about section" ref={about}>
      <div className="container">
        <div className="section__inner">
          <div className="section__info">
            <div className="title">About</div>
            <div className="descr">
              i love development, technology
              <br />
              and biking
            </div>
            <div className="section__button">
              <div className="section__link hovereffect">Show me more</div>
            </div>
          </div>
          <div className="section__image__container">
            <img className="section__image" src={mtb} alt="mtb" />
          </div>
        </div>
      </div>
    </section>
  );
};
