import "./Contact.scss";

export const Contact = ({ contact, github, inst }) => {
  return (
    <section className="contact section" ref={contact}>
      <div className="container">
        <div className="section__inner">
          <div className="section__info">
            <div className="title">Contact</div>
            <div className="descr">vlelyavin@gmail.com</div>
            <div className="contact__socials">
              <a href="https://github.com/vlelyavin" className="contact__socials__link hovereffect">
                <img className="contact__socials__link" src={github} alt="github" />
              </a>
              <a href="https://www.instagram.com/v._lelyavin/" className="contact__socials__link hovereffect">
                <img className="contact__socials__link" src={inst} alt="inst" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
