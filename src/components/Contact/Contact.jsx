import contactDarkImage from "../../images/contact_dark.webp";
import contactLightImage from "../../images/contact_light.webp";
import "./Contact.scss";

export const Contact = (props) => {
  return (
    <section id="contact" className="contact section" ref={props.contact}>
      <div className="container">
        <div className="section__inner">
          <div className="section__info">
            <div className="title">Contact</div>
            <a href="mailto:vlelyavin@gmail.com" id="email" className="descr">
              vlelyavin@gmail.com
            </a>
            <div className="contact__socials">
              <a href="https://github.com/vlelyavin" className="contact__socials__link hovereffect">
                <img
                  className="contact__socials__link"
                  src={props.theme === "dark" ? props.git : props.gitDark}
                  alt="github"
                />
              </a>
              <a href="https://www.instagram.com/v._lelyavin/" className="contact__socials__link hovereffect">
                <img
                  className="contact__socials__link"
                  src={props.theme === "dark" ? props.inst : props.instDark}
                  alt="inst"
                />
              </a>
            </div>
          </div>
          <div className="section__image__container">
            <img
              className="section__image spaceman"
              ref={props.spaceman}
              src={props.theme === "dark" ? contactDarkImage : contactLightImage}
              alt="contactImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
